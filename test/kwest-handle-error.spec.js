var kwestHandleError = require('..'),
    Promise   = require('bluebird'),
    kwest     = require('kwest-base'),
    assert    = require('chai').assert;

describe('kwest-text', function () {

  it('pass through good response', function (done) {

    var errorKwest = kwest(function (request) {
      return Promise.resolve({
        statusCode: 200
      });
    }).use(kwestHandleError());

    errorKwest('http://www.example.com')
      .then(function (res) {
        done();
      })
      .catch(done);

  });

  it('handles error', function (done) {

    var errorKwest = kwest(function (request) {
      return Promise.resolve({
        statusCode: 404
      });
    }).use(kwestHandleError());

    errorKwest('http://www.example.com')
      .then(function (res) {
        done(new Error('expected to fail'));
      })
      .catch(kwestHandleError.StatusError, function (err) {
        assert.strictEqual(err.message, '404: Not Found');
        assert.strictEqual(err.code, 404);
        done();
      })
      .catch(done);

  });

});
