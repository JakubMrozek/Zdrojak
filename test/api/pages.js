var request = require('supertest')
  , horaa = require('horaa')
  , app = require(process.cwd() + '/app');
  
describe('API pages', function(){
    
    describe('GET /api/pages', function(){
        var Page = horaa(process.cwd() + '/app/models/Page'),
            testData;
        
        var hijackFind = function(fc) {
            Page.hijack('find', fc); 
        };
        
        afterEach(function(){
            Page.restore('find');
        });
        
        it('vrati seznam vsech polozek v databazi', function(done){
            testData = [
                {'_id': 'abc', 'title': 'titulek', 'url': 'titulek', 'content': 'lorem ipsum'},
                {'_id': 'abd', 'title': 'titule2', 'url': 'titule2', 'content': 'lorem ipsum'}
            ];
            Page.hijack('find', function(cond, cols, cb){
                cb(null, testData);
            }); 
            request(app).get('/api/pages')
                .end(function(err, res) {
                    res.body.should.eql(testData);
                    done();
                });
        });
        
        it('vrati jen urcene sloupce', function(done){
            testData = [
                {'_id': 'abc', 'url': 'titulek'}
            ];
            Page.hijack('find', function(cond, cols, cb){
                cols.should.eql({url:1});
                cb(null, testData);
            }); 
            request(app).get('/api/pages?fields=url')
                .end(function(err, res) {
                    res.body.should.eql(testData);
                    done();
                });
        });
        
        it('vrati kod 400 pri zadani pole, ktere neexistuje v databazi', function(done){
            hijackFind(function(cond, cols, cb){
                cb(null, []);
            });  
            request(app).get('/api/pages?fields=abc')
                .expect(400, done);
        })
    })  
    
    
    describe('GET /api/pages/page', function(){
       
    });
    
    describe('POST /api/pages', function(){
       
    });
    
    describe('PUT /api/pages/page', function(){
       
    });
    
    describe('DELETE /api/pages/page', function(){
       
    });
    
});