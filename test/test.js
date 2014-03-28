var only = require('..');
var metalSmith = require('metalsmith');

describe('metalsmith-only', function(){
    it('should filter attr', function(done){
        var metalsmith = metalSmith(__dirname);

        metalsmith.use(only('name title'));

        var files = {
            'a.md': {
                name: 'a.name',
                title: 'a.title',
                content: 'a.content'
            }
        };

        metalsmith.run(files, function(err, files){
            should.not.exist(err);
            files['a.md'].should.deep.equal({
                name: 'a.name',
                title: 'a.title'
            });
            done();
        });
    });
});