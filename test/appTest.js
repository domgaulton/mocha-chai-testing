// make test to ensure the app is returning what we want

// Could use the node js assert library but we're oging to use chai
// const assert = require('assert')

const assert = require("chai").assert;
const sayHello = require("../app").sayHello;
const addNumbers = require("../app").addNumbers;

describe("App", function() {
  describe("sayHello()", function() {
    it("sayHello should return hello", function() {
      let result = sayHello();
      assert.equal(result, "hello");
    });

    it("sayHello should return type string", function() {
      let result = sayHello();
      assert.typeOf(result, "string");
    });
  });

  describe("addNumbers()", function() {
    it("addNumbers should be above 5", function() {
      let result = addNumbers(1, 12);
      assert.isAbove(result, 5);
    });

    it("addNumbers should return type number", function() {
      let result = addNumbers(5, 5);
      assert.typeOf(result, "number");
    });
  });
});
