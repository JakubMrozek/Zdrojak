require('../mocha');
var request = require('supertest')
  , horaa = require('horaa')
  , app = require(process.cwd() + '/app');
  
describe('API pages', function(){
    
    describe('GET /api/pages', function(){
        var Page = horaa(process.cwd() + '/app/models/Page');
        
        beforeEach(function(){
            Page.hijack('find', function(cb){
                cb(null, [
                    {'_id': 'abc', 'title': 'titulek', 'url': 'titulek', 'content': 'lorem ipsum'},
                    {'_id': 'abd', 'title': 'titule2', 'url': 'titule2', 'content': 'lorem ipsum'}
                ]);
            }); 
        })
        
        afterEach(function(){
            Page.restore('find');
        });
        
        it('vrati seznam vsech polozek v databazi', function(done){
            request(app).get('/api/pages')
                .expect('Content-Type', /json/)
                .end(function(err, res) {
                    res.body.length.should.eql(2);
                    done();
                });
        });
        
        it('vrati jen urcene sloupce', function(done){
            request(app).get('/api/pages?fields=_id,url')
                .expect('Content-Type', /json/)
                .end(function(err, res) {
                    res.body[0].should.equal({'_id': 'abd', 'url': 'titulek'});
                    done();
                });
        });
    })    
});