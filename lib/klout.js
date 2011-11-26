
var request = require("request");

var klout = function(){};

klout.init = function(key, format, version) {
  if (arguments.length === 0) {
    throw new Error("Expected at least one argument (Klout API Key");
  } else {
    klout.key = key;
    klout.format = format || "json";
    klout.version = version || "0";
  };
};

klout.getKlout = function(handles, callback) {
  if (klout.key === undefined) {
    return callback('Use klout.init("YOU_API_KEY")'), null);
  };
  var kloutCallURL = "http://api.klout.com/" + klout. + "/klout.json?" + "key=" + klout.key + "&users=" + handles;
  request(kloutCallURL, function (error, response, body) {
    if (error) {
      return callback(error, null);
    } else {
      switch(response.statusCode) {
        case 401:
          return callback(new Error("Invalid API Key"), null);
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
            var klout = data.users[0].kscore;
          } catch (error) {
            callback(error, null);
          }
        }
      };
    };
  });
};

module.exports = klout;

/* EOF */