
node-klout
==========

 * Extremely reliable Node.js Klout API Wrapper
 * Returns null on non-parseable JSON (ocassional) from the Klout API.
 
 ```javascript

var Klout = require("node-klout");
Klout.key = "MY_API_KEY";

Klout.getSingle("kisshotch", function(error, klout) {
	if (error) {
		console.error(error); 
	} else {
		console.log("Klout Score: ", klout);
	};
});
 ```
