/*
*
*	FUNCTION PARSER
*    TODO: description
*
*/

var intro = '^function\\s*',
	name =  '[^\\(]*\\s*',
	args = '\\(([^\\)]*)\\)\\s*',
	body = '{\\s*\\r*\\n*([^$]*)}',
	flags = '',
	pattern,
	arg_separator = /\s*,\s*/,
	Parsed_fn,
	fnparser;

pattern = new RegExp(  intro + name + args + body, flags );

function trim(string) {
	//remove white space from end and beginning of the string
	return string.replace(/^\s+|\s+$/m, '')
};

function split_args(  args_text ) {
	//Split arguments
	return args_text.split(arg_separator);
};


// Constructors
//TODO: doc
Parsed_fn = function (fn_text) {
	var that = {},
		parts = pattern.exec(fn_text),
		args_text = parts[1], 
		body = parts[2], 
		args = [], 
		lines;

	//console.log("arg text! before everything", args_text);
	if ( args_text ) {	
		args = split_args( trim(args_text) );
		//console.log("esto es lo que separo!", args)
	};


	that.body = function () {
		return body;
	};

	that.argumentz = function () {
		//console.log("parts!", fn_text);
		//console.log("arg text!", args_text);
		return args;
	};

	//Experimental
	that.lines = function () {
		lines = lines || body.split('\n');

		return lines;
	};

	return that;
};


module.exports = Parsed_fn;
