
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
  "when requesting a single users klout":{
    topic:function(){
      klout.getKlout("kisshotch", this.callback);
    },
    "we should be able to get a klout score":function(error, users){
      assert.equal(error, null);
      users.should.be.a("object");
    }
  }
}).export(module);

/* EOF */