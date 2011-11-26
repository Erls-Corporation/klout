
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
        
      };

      
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

module.exports = klout;

/* EOF */