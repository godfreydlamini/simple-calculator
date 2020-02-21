const { add, multiply} = require('../src/calculator.js')

describe("A simple calculator that adds", function() {
    it("should be able to add two numbers", function(){

        expect(add(2,5)).toEqual(7);

    });
});

describe("A simple calculator that adds", function() {
    it("should be able to add more numbers", function(){

        expect(add(2,5,8,0,3)).toEqual(18);

    });
});

describe("A simple calculator that multiplies", function() {
    it("should be able to multiply two numbers", function(){

        expect(multiply(9,5)).toEqual(45);

    });
});

describe("A simple calculator that multiplies", function() {
    it("should be able to multiply more numbers", function(){

        expect(multiply(6,7,3,9,5)).toEqual(5670);

    });
});
 




