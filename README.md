
# klout

## NodeJS Klout API Wrapper 

### Download

```bash
$ npm install klout
```

### Examples

 ```javascript
var klout = require("klout");
klout.init("MY_API_KEY", "FORMAT", "VERSION");;

klout.get("kisshotch", function(error, klout) {
  if (error) {
    console.error(error); 
  } else {
    console.log("Klout Score for @kisshotch:", klout);
  };
});
 ```
