
var Klout = require("../");
Klout.key = "MY_API_KEY";

Klout.getSingle("kisshotch", function(error, klout) {
	if (error) {
		console.error(error); 
	} else {
		console.log("Klout Score for @kisshotch:", klout);
	};
});