var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();
var name = "sudhi";
var friends = {school:["x","y","z"],colg:["a","b"]};
describe('sample shoulds',function(){
	it('examples',function(){
		name.should.exist;
		//name.should.not.exist;
		friends.should.exist;
		name.should.equal('sudhi');
	});
});
describe('Expects',function(){
		it('Examples',function(){
			expect(name).to.be.a('string');
			expect(name).to.have.lengthOf(5);
			expect(friends).to.have.property('school').with.lengthOf(3);
			expect(name).to.equal('sudhi');
		});
});
describe('Assertions',function(){
	it('Examples',function(){
		assert.typeOf(name,'string');
		assert.equal(name,'sudhi');
	});
});
