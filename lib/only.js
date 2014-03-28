var only = require('only');

module.exports = function(keys){
    return function(files, metalsmith, done){
        Object.keys(files).forEach(function(key){
            files[key] = only(files[key], keys);
        });
        done();
    };
};