const Throw = require('.');
const { expect } = require('chai');

describe('throw2', function()
{
	class CustomError extends Error {}

	it('throws with the correct message', function()
	{
		expect(Throw).to.throw(Error, /^$/);
		expect(() => Throw()).to.throw(Error, /^$/);
		expect(() => Throw('foo error')).to.throw(Error, /^foo error$/);
		expect(() => Throw('foo', 'error')).to.throw(Error, /^foo error$/);
		expect(() => Throw(1, true, { toString() { return 'foo message' } }))
			.to.throw(Error, /^1 true foo message$/);
		expect(() => Throw(null, undefined)).to.throw(Error, /^\s+$/);
	});

	it('throws the passed error', function()
	{
		const error = new Error('user-instantiated error');
		expect(() => Throw(error)).to.throw(error);
	});

	it('throws custom type error', function()
	{
		const error = new CustomError('user-instantiated error');
		expect(() => Throw(error)).to.throw(error);
	});

	it('crestes a custom error', function()
	{
		expect(() => Throw(Error, 'err1')).to.throw(Error, /^err1$/);
		expect(() => Throw(CustomError, 'err2')).to.throw(CustomError, /^err2$/);
	});
});
