## metalsmith-only
[![NPM version](https://badge.fury.io/js/metalsmith-only.png)](http://badge.fury.io/js/metalsmith-only) [![Dependencies Status](https://david-dm.org/Jeremial/metalsmith-only.png)](https://david-dm.org/Jeremial/metalsmith-only)

a file's attribute `only` filter for metalsmith

### Install
[![metalsmith-only](https://nodei.co/npm/metalsmith-only.png?compact=true)](https://nodei.co/npm/metalsmith-only)

### Usage
```js
var metalSmith = require('metalsmith');
var only = require('metalsmith-only');

var metalsmith = metalSmith(__dirname);
metalsmith
    .source('post')
    .use(only('name title'))
    .build()
```

### License
MIT