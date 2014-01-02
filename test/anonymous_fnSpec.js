var fnparser = require('../fnparser.js'),
	should = require('chai').should();
	

describe('Anonymous functions', function () {



	describe('with no arguments', function () {

		var fn, fn_text;


		beforeEach(function(){
			fn = function () {
				var a = 10;
				a++;
				if (a < 10) {
					return false;
				}
				return true;
			};

			fn_text = fn.toString();

			parsed_fn = fnparser(fn_text);
		});



		it('should return empty array of arguments', function () {
			parsed_fn.argumentz().should.be.an('array');
			parsed_fn.argumentz().length.should.equal(0);
		});

		it('should return the body of the functions as a string', function () {
			var expected = fn_text.split('\n'),
				actual = parsed_fn.body().split('\n'),
				len = actual.length,
				i, res;

			for (i = 0; i < len; i++) {
				res = expected[i+1].indexOf(actual[i]) !== -1 ? true : false;
				res.should.to.be.true;
			}
			
		});
	});


	describe('with arguments', function () {

		var fn, fn_text;


		beforeEach(function(){
			fn = function (a,b , c   ,   deedee     ) {
				z = a + b + c + deedee;
				a++;
				if (a < 10) {
					return false;
				}
				return true;
			};

			fn_text = fn.toString();

			parsed_fn = fnparser(fn_text);
		});


		it('should return arguments array', function () {
			parsed_fn.argumentz().should.be.an('array');
			parsed_fn.argumentz().length.should.equal(4);
			parsed_fn.argumentz()[0].should.equal('a');
			parsed_fn.argumentz()[1].should.equal('b');
			parsed_fn.argumentz()[2].should.equal('c');
			parsed_fn.argumentz()[3].should.equal('deedee');
		});

		it('should return the body of the functions as a string', function () {
			var expected = fn_text.split('\n'),
				actual = parsed_fn.body().split('\n'),
				len = actual.length,
				i, res;

			for (i = 0; i < len; i++) {
				res = expected[i+1].indexOf(actual[i]) !== -1 ? true : false;
				res.should.to.be.true;
			}
			
		});
	});

});