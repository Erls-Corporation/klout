
# klout

## NodeJS Klout API Wrapper (This is a rewrite of my old node-klout)

## Download

```bash
$ npm install klout
```

## Examples

### Get a users Klout score

```javascript
var klout = require("klout");

klout.configure("MY_API_KEY", "json", "1");

klout.getKlout("kisshotch", function(error, users) {
  console.log(users);
});

/* EOF */
```

### Get a users Klout topics

```javascript
var klout = require("klout"); 

klout.getTopics("kisshotch", function(error, users) {
  console.log(users);
});

/* EOF */
```

### Get a users User object

```javascript
var klout = require("klout");

klout.getShow("kisshotch", function(error, users) {
  console.log(users);
});

/* EOF */
```

### Get a users influencers

```javascript
var klout = require("klout");

klout.getInfluencers("kisshotch", function(error, users) {
  console.log(users);
});

/* EOF */
```

### Get a users influencees

```javascript
var klout = require("klout");

klout.getInfluencerOf("kisshotch", function(error, users) {
  console.log(users);
});

/* EOF */
```

***

### MIT Licnese

Copyright (c) Copyright 2011, Edward Hotchkiss.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

