
(function(global, undefined) {
	var http = require("http");
	var events = require("events");
	var request = require("request");
	var querystring = require("querystring");
	var Klout = function(){};
	Klout.klout = function(handles, callback) {
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
	module.exports = Klout;
})(global);

/* EOF */