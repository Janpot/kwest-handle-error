'use strict';

var util = require('util'),
    http = require('http');


function StatusError(statusCode) {
  var desc = http.STATUS_CODES[statusCode];
  this.name = 'StatusError';
  this.message = util.format('%s: %s', statusCode, desc);
  this.code = statusCode;
}
StatusError.prototype = new Error();
StatusError.prototype.constructor = StatusError;


function isGoodStatus(statusCode) {
  return 200 <= statusCode && statusCode < 400;
}

function kwestHandleError() {
  return function (request, next) {
    return next(request)
      .then(function (response) {
        if (!isGoodStatus(response.statusCode)) {
          throw new StatusError(response.statusCode);
        }
        
        return response;
      });
  };
}

kwestHandleError.StatusError = StatusError;
module.exports = kwestHandleError;
