
String.prototype.trim = function() { 
  return this.replace(/^\s+|\s+$/g, "");
};

var request = require("request");

var Klout = function(){};
Klout.key = null;

Klout.getSingle = function(handle, callback) {
  if (Klout.key === null || Klout.key === "MY_API_KEY" || Klout.key === undefined) {
    var error = { message : "set your Klout.key" };
    callback(error, null);  
  } else {
    var method = "http://api.klout.com/1/klout.json?";
    var path = "key=" + Klout.key.trim() + "&users=" + handle;
    var URL = method + path;
    request(URL, function (error, response, body) {
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
};

module.exports = Klout;

/* EOF */