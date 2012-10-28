var request = require('supertest')
  , horaa = require('horaa')
  , cwd = process.cwd()
  , app = require(cwd + '/app')
  , Page = horaa(cwd + '/app/models/Page');
  
//vzorova testovaci data
var testData = {
    all: [
        {'_id': 'abc', 'title': 'titulek', 'url': 'titulek', 'content': 'lorem ipsum'},
        {'_id': 'abd', 'title': 'titule2', 'url': 'titule2', 'content': 'lorem ipsum'}
    ],
    columns: [
        {'_id': 'abc', 'url': 'titulek'},
    ]
};
  
  
describe('API pages', function(){
    
    describe('GET /api/pages', function(){
        
        it('vrati seznam vsech polozek v databazi', function(done){
            Page.hijack('find', function(cond, cols, cb){
                cb(null, testData.all);
            }); 
            request(app).get('/api/pages')
                .end(function(err, res) {
                    res.body.should.eql(testData.all);
                    done();
                });
        });
        
        it('vrati jen urcene sloupce', function(done){
            Page.hijack('find', function(cond, cols, cb){
                cols.should.eql({url:1});
                cb(null, testData.columns);
            }); 
            request(app).get('/api/pages?fields=url')
                .end(function(err, res) {
                    res.body.should.eql(testData.columns);
                    done();
                });
        });
        
        it('vrati kod 400 pri zadani pole, ktere neexistuje v databazi', function(done){
            Page.hijack('find', function(cond, cols, cb){
                cb(null, []);
            });
            request(app).get('/api/pages?fields=abc').expect(400, done);
        })
    })  
    
    
    describe('GET /api/pages/page', function(){
        
        afterEach(function(){
            Page.restore('findOne');
        });
        
        it('vrati detail jedne stranky', function(done){
            Page.hijack('findOne', function(cond, cb){
                cond.should.eql({url: 'abc'});
                cb(null, testData.all[0]);
            }); 
            request(app).get('/api/pages/abc')
                .end(function(err, res) {
                    res.body.should.eql(testData.all[0]);
                    done();
                });
        });
        
        it('vrati 404, pokud stranka neexistuje', function(done){
            Page.hijack('findOne', function(cond, cb){
                cb();
            }); 
            request(app).get('/api/pages/neexistuje').expect(404, done);
        });
    });
    
   
    
    describe('POST /api/pages', function(){
       
    });
    
    describe('PUT /api/pages/page', function(){
       
    });
    
    describe('DELETE /api/pages/page', function(){
       
    });
    
});