# kwest-handle-error [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

Error handler [kwest](https://github.com/Janpot/kwest) module. Rejects responses with bad statuscodes

## Installation

    $ npm install --save kwest-handle-error

## Use

without errorHandler
```js
var request = require('kwest');

request('http://www.example.com/not-found')
  .then(function (res) {
    console.log(res.statusCode); // 404
  });
```

with errorHandler
```js
var handleError = require('kwest-handle-error'),
    request     = handleError(require('kwest'));

request('http://www.example.com/not-found')
  .catch(function (err) {
    console.log(err.message); // "404: Not found"
  });
```


[travis-url]: http://travis-ci.org/Janpot/kwest-handle-error
[travis-image]: http://img.shields.io/travis/Janpot/kwest-handle-error.svg?style=flat

[depstat-url]: https://david-dm.org/Janpot/kwest-handle-error
[depstat-image]: http://img.shields.io/david/Janpot/kwest-handle-error.svg?style=flat
