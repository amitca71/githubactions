var expect    = require("chai").expect;
var request = require("request");
var converter = require("../app.js");
describe("check returns of function", function() {
    var url = "http://localhost:3001/";
    it("returns status 200", function() {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
      });
    });
 }); 

