
var vows = require("vows");
var util = require("util");
var assert = require("assert");
var should = require("should");

var klout = require("../lib/klout");

klout.configure("MY_API_KEY", "json", "1");

vows.describe("general module tests").addBatch({
  "when requiring klout":{
    topic:function(){ 
      return klout;
    },
    "klout should be a function":function(topic){
      topic.should.be.a("function");
    }
  },
  // score methods
  "when requesting a single users klout":{
    topic:function(){
      klout.getKlout("kisshotch", this.callback);
    },
    "we should be able to get a klout score, with no errors, and a user object with a length":function(error, users){
      assert.equal(error, null);
      assert.notEqual(users.users.length, undefined);
      users.should.be.a("object");
    }
  },
  "when requesting multipel users klout scores":{
    topic:function(){
      klout.getKlout("kisshotch,hankejh,craigablerino", this.callback);
    },
    "we should be able to get a set of klout scores, with no errors, users as an object and users should have a length":function(error, users){
      assert.equal(error, null);
      assert.notEqual(users.users.length, undefined);
      users.should.be.a("object");
    }
  },
  // user methods
  "when requesting a users user object":{
    topic:function(){
      klout.getShow("kisshotch", this.callback);
    },
    "we should be able to get a user object, with no errors, and a user object with a length":function(error, users){
      assert.equal(error, null);
      assert.notEqual(users.users.length, undefined);
      users.should.be.a("object");
    }
  },
  "when requesting a users topics":{
    topic:function(){
      klout.getTopics("kisshotch", this.callback);
    },
    "we should be able to get a user object, with no errors, and a user object with a length":function(error, users){
      assert.equal(error, null);
      assert.notEqual(users.users.length, undefined);
      users.should.be.a("object");
    }
  },
  // influence methods
  "when requesting a users object with who they're influenced by":{
    topic:function(){
      klout.getInfluencedBy("kisshotch", this.callback);
    },
    "we should be able to get a user object, with no errors, and a user object with a length":function(error, users){
      assert.equal(error, null);
      assert.notEqual(users.users.length, undefined);
      users.should.be.a("object");
    }
  },
  "when requesting the users that influence users":{
    topic:function(){
      klout.getInfluencerOf("kisshotch", this.callback);
    },
    "we should be able to get a user object, with no errors, and a user object with a length":function(error, users){
      assert.equal(error, null);
      assert.notEqual(users.users.length, undefined);
      users.should.be.a("object");
    }
  },
}).export(module);

/* EOF */