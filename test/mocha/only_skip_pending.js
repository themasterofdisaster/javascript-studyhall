/*
    MOCHA TEST FEATURES: ONLY, SKIP, PENDING

        Exclusive Tests - Run only the specified test case or test suite by appending .only() to the funcion. 

        Inclusive Tests - Ignore the specified test case(s) or test suite(s) by appending .skip() to the function. Marked as pending in the results. Does not fail.

        Pending Tests   - Pending tests will also be ignored/skipped. It's a test without a call back function. Marked as pending in the results. Does not fail. 

*/

// To get the Reporters - use the below code
// mocha test/ --reporter dot

var assert = require('assert');

/* describe("Mathematical Operations - Test Suite", function(){
  beforeEach(function(done){
  this.timeout(500);
  setTimeout(done,3000);
}); */


describe('Mathematical Operations2 - Test Suite', function(){

  this.timeout(10000);

    var a = 10;
    var b = 10;

  it.only('Addition of two numbers', function(done){

    var c = a+b;

    assert.equal(c,20);

    setTimeout(done,1000);


  });

  it('Subtraction of two numbers', function(done){

    var c = a-b;

    assert.equal(c,0);

    setTimeout(done,2000);

    
   });

  it.skip('Multiplication of two numbers', function(done){

    var c = a*b;

    assert.equal(c,100);

    setTimeout(done,1000);


  });

  it('Division of two numbers', function(done){
      
    var c = a/b;

    assert.equal(c,1);

    setTimeout(done,2000);


  });

  //Pending test. No call back function. 
  it('This is a test for Pending Test Feature');

});