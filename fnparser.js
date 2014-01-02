 var Fnparser= function () {

	var intro = '^function\\s*',
		name =  '[^\\(]*\\s*',
		args = '\\(\\s*([^\\)])*\\s*\\)\\s*',
		body = '{\\s*\\r*\\n*([^$]*)}',
		flags = '',
		pattern;

	pattern = new RegExp(  intro + name + args + body, flags );

	return function (fn_text) {
		console.log(pattern, fn_text, parts)

		var parts = pattern.exec(fn_text);
		//console.log("parts", parts)

		var	parsed_fn = {
				args: parts[1] || [],
				body: parts[2]
			};

		return parsed_fn;	
	};
};



module.exports = Fnparser();





