var targz = require('targz');
 
// compress files into tar.gz archive
targz.compress({
    src: 'data',
    dest: 'result.tgz'
}, function(err){
    if(err) {
        console.log(err);
    } else {
        console.log("Done!");
    }
});