
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