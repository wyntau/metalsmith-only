var is = require('jistype');
module.exports = function(keys){
    if(is.isString(keys)){
        keys = keys.split(/ +/);
    }
    if(!is.isArray(keys)){
        throw new Error('attr array error');
        process.exit(1);
    }
    return function(files, metalsmith, done){
        Object.keys(files).forEach(function(name){
            var file = files[name];

            Object.keys(file).forEach(function(key){
                if(keys.indexOf(key) == -1){
                    delete file[key];
                }
            });
        });
        done();
    };
};