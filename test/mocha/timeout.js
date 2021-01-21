/*
    TIMEOUTS
    Fail test(s) when the specified timeout is exceeded. 

        Suite Level - Timeout which applies to the entire test suite. Can be disabled test level by using this.timeout(0).

        Test Level  - Timeout which applies to the specified test case. Can use this.timeout(0) to disable timeouts completely. 

        Hook Level  - Timesout which is implemented in the hooks. 

    Sources: https://testautomationu.applitools.com/mocha-javascript-tests/chapter5.html
*/
// To get the Reporters - use the below code
// mocha test/ --reporter dot

var assert = require('assert');

describe.only('Mathematical Operations - Timeouts - Test Suite', function(){

/*
  //Hook level timeout. Fails on the hook and never gets to run the tests.
  beforeEach(function(done){
  this.timeout(500);
  setTimeout(done,3000);
}); 
*/

  //Suite level timeout
  this.timeout(10000);

    var a = 10;
    var b = 10;

  it('Addition of two numbers', function(done){
    
    //Test case level timeout. Overrides the suite level timeout. 
    this.timeout(100);

    var c = a+b;

    assert.equal(c,20);

    //Test fails because 1000 exceeds the 100 timeout. 
    setTimeout(done,1000);


  });

  it('Subtraction of two numbers', function(done){

    var c = a-b;

    assert.equal(c,0);

    setTimeout(done,2000);

    
   });

  it('Multiplication of two numbers', function(done){

    var c = a*b;

    assert.equal(c,100);

    setTimeout(done,1000);


  });

  it('Division of two numbers', function(done){
      
    var c = a/b;

    assert.equal(c,1);

    setTimeout(done,2000);


  });

});