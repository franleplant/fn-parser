var fs = require('fs'),
	tests_path = __dirname;

fs.readdirSync(tests_path).forEach(  function(file) {

    var newPath = tests_path + '/' + file;


    if (/(.*)Spec\.js$/.test(file)) {
        require(newPath);
    }
});


