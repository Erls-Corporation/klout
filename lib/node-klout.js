
var request = require("request");

var Klout = function(){};
Klout.key = null;

var active = 0;

// next interval time
function nextTime() {
	// 0 wait on first call
	if (active === 0) {
		active += 150;
		return 0;
	} else {
		active += 150;
		return active;
	};
};

Klout.getSingle = function(handles, callback) {
	setTimeout(function() {
		if (Klout.key === null || Klout.key === "MY_API_KEY" || Klout.key === undefined) {
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
					};
				};
			});
		};
	}, nextTime() );
};

module.exports = Klout;

/* EOF */