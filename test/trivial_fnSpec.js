var fnparser = require('../fnparser.js'),
	should = require('chai').should();
	

describe('trivial functions', function () {




	describe('with no spaces', function () {
		var parsed_fn;

		beforeEach(function(){
			parsed_fn = fnparser('function(){}');
		});

		it('should return empty array of arguments', function () {
			parsed_fn.argumentz().should.be.an('array');
			parsed_fn.argumentz().length.should.equal(0);
		});

		it('should return empty string as body', function () {
			parsed_fn.body().should.equal('');
		});
	});

	describe('with spaces before arguments', function () {

		var parsed_fn;

		beforeEach(function(){
			parsed_fn = fnparser('function (){}');
		});

		it('should return empty array of arguments', function () {
			parsed_fn.argumentz().should.be.an('array');
			parsed_fn.argumentz().length.should.equal(0);
		});

		it('should return empty string as body', function () {
			parsed_fn.body().should.equal('');
		});
	});


	describe('with spaces before opening curly brackets', function () {


		var parsed_fn;

		beforeEach(function(){
			parsed_fn = fnparser('function() {}');
		});

		it('should return empty array of arguments', function () {
			parsed_fn.argumentz().should.be.an('array');
			parsed_fn.argumentz().length.should.equal(0);
		});

		it('should return empty string as body', function () {
			parsed_fn.body().should.equal('');
		});
	});


	describe('with spaces before arguments and opening curly brackets', function () {
		var parsed_fn;

		beforeEach(function(){
			parsed_fn = fnparser('function () {}');
		});

		it('should return empty array of arguments', function () {
			parsed_fn.argumentz().should.be.an('array');
			parsed_fn.argumentz().length.should.equal(0);
		});

		it('should return empty string as body', function () {
			parsed_fn.body().should.equal('');
		});
	});


});