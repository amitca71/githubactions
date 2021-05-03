var expect    = require("chai").expect;
var request = require("request");
var converter = require("../app.js");
var async =  require("async");
describe("check returns of function", function() {
    var url = "http://localhost:3001/";
    it("returns status 200", function() {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(2001);
      });
    });
 }); 

