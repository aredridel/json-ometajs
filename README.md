json-ometajs
============

A simple json parser using ometajs

Use
----

```javascript
var jsonic = require('json-ometajs');
var val = jsonic.parse('{ "Hello": "World" }');
```

The parser is also extensible, so subclasses can start with the JSON grammar and go from there.

Errors are reported with position information, making this preferable to JSON.parse when user error reporting is important.
