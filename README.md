# kwest-text

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
