## metalsmith-only
a file's attribute `only` filter for metalsmith

### Install

    npm install metalsmith-only

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