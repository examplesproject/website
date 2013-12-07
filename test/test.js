var expect = require('chai').expect;

var add = require('../app/add');

describe('add', function() {
  it('should expose a function', function() {
    expect(add).to.be.a('function');
  });
  it('should add the values', function() {
    expect(add(1, 3)).to.equal(4);
  });
});