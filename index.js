'use strict';

var util = require('util'),
    http = require('http');

function isGoodStatus(statusCode) {
  return 200 <= statusCode && statusCode < 400;
}

function kwestHandleError(kwest) {
  return kwest.wrap(function (makeRequest, request) {
    return makeRequest(request)
      .then(function (response) {
        var code = response.statusCode;
        if (!isGoodStatus(code)) {
          var desc = http.STATUS_CODES[code],
              msg  = util.format('%s: %s', code, desc),
              err  = new Error(msg);

          throw err;
        }
        
        return response;
      });
  });
}

module.exports = kwestHandleError;
