
var request = require("request");

var Klout = function(){};
Klout.key = null;

Klout.getSingle = function(handles, callback) {
	if (Klout.key === null || Klout.key === "MY_API_KEY") {
		var error = { message : "set your Klout.key" };
		callback(error, null);	
	} else {
		var method = "http://api.klout.com/1//klout.json?";
		var path = "key=" + Klout.key + "&users=" + handles;
		var URL = method + path;
		request(URL + path, function (error, response, body) {
			if (error) {
				callback(error, null);
			} else {
				if (response.statusCode === 403) {
					callback(null, null);
				} else if (response.statusCode === 200) {
					var data = JSON.parse(body);
					var klout = data.users[0].kscore;
					callback(null, klout);
				} else {
					callback(null, null);
				}
			}
		});
	};
};

module.exports = Klout;

/* EOF */