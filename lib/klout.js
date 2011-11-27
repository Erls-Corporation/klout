
/*

  klout
  NodeJS Klout API Wrapper
  0.0.1

*/

var request = require("request");

var klout = function(){};

klout.configure = function(key, format, version) {
  var self = this;
  self.key = key || undefined;
  self.format = format || "json";
  self.version = version || "0"; 
};

klout.get = function(path, users, callback) {
  if (klout.key === undefined) {
    callback(new Error('Use klout.configure("YOUR_API_KEY")'), null);
  };
  if (typeof(users) === "array" || typeof(users) === "object") {
    callback(new Error("Handles needs to be a comma separated string!"), null);
  }
  var kloutCallURL = "http://api.klout.com/" + klout.version + path + ".json?" + "key=" + klout.key + "&users=" + users;
  request(kloutCallURL, function (error, response, body) {
    if (error) {
      callback(error, null);
    } else {
      switch(response.statusCode) {
        case 401:
          callback(new Error("Invalid API Key"), null);
          break;
        case 403:
          callback(new Error("API Limited exceeded"), null);
          break;
        case 404:
          callback(new Error("User not found."), null);
          break;
        case 500:
          callback(new Error("Internal server error."), null);
          break;
        default:
          try {
            var data = JSON.parse(body);
            callback(null, data);
          } catch (error) {
            callback(error, null);
          };
      };
    };
  });
};

klout.getKlout = function(users, callback) {
  klout.get("/klout", users, callback);
};

module.exports = klout;

/* EOF */