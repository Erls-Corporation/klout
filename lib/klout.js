
/*!
  NodeJS Klout API Wrapper Class
  @author Edward Hotchkiss
  v0.2.0
*/

var klout = function(){};

// Mikeal's http.request wrapper
var request = require("request");

/*!
  Configures the Klout API Call
  @param {String} key Klout API Key
  @params {String} format Klout API format
  @param {Number} version Klout API version
 */

klout.configure = function(key, format, version) {
  var self = this;
  self.key = key || undefined;
  self.format = format || "json";
  self.version = version || "0"; 
};

/*!
  Builds and executes a configurable Klout API Call
  @param {String} path API URI Path
  @param {String} users Comma separated list of users to inquire about
  @param {Function} callback Function to call upon error or success
  @returns {Object} error, {Object} users
*/

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
          callback(new Error("API Limited exceeded or Invalid API Key"), null);
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

/*!
  Get's users Klout Score
  @param {String} users Comma separated list of users to inquire about
  @param {Function} callback Function to call upon error or success
  @returns {Object} error, {Object} users
*/

klout.getKlout = function(users, callback) {
  this.get("/klout", users, callback);
};

/*!
  Get's a users "User" object
  @param {String} users Comma separated list of users to inquire about
  @param {Function} callback Function to call upon error or success
  @returns {Object} error, {Object} users
*/

klout.getShow = function(users, callback) {
  this.get("/users/show", users, callback);
};

/*!
  Get's a users topics related to that user
  @param {String} users Comma separated list of users to inquire about
  @param {Function} callback Function to call upon error or success
  @returns {Object} error, {Object} users
*/

klout.getTopics = function(users, callback) {
  this.get("/users/topics", users, callback);
};

/*!
  Get's the users that influence users
  @param {String} users Comma separated list of users to inquire about
  @param {Function} callback Function to call upon error or success
  @returns {Object} error, {Object} users
*/

klout.getInfluencedBy = function(users, callback) {
  this.get("/soi/influenced_by", users, callback);
};

/*!
  Get's the users that are influencer of this users
  @param {String} users Comma separated list of users to inquire about
  @param {Function} callback Function to call upon error or success
  @returns {Object} error, {Object} users
*/

klout.prototype.getInfluencerOf = function(users, callback) {
  this.get("/soi/influencer_of", users, callback); 
};

// export module function klout(){}
module.exports = klout;

/* EOF */