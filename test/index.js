'use strict';

var should = require('chai').should();
var lipcore = require('../');

describe('#versionGuard', function() {
  it('global._lipcore should be defined', function() {
    should.equal(global._lipcore, lipcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      lipcore.versionGuard('version');
    }).should.throw('More than one instance of lipcore');
  });
});
