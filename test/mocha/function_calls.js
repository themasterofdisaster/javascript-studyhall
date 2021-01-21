/*
    MOCHA FUNCTION CALLS 

        describe() - It's a simple way to group tests in Mocha. Use it to create a series of tests. 
            It takes two arguments. The first one is the name/description of the test group. The second one is the call back function: A function which will be 
            executed after another function has finished executing. 

        it() - It's an "Individual Testcase". Each It test should be nested within the describe() block.
            It takes two arguments as well. The first one is the name/description of the test case. The second one is the call back function.


    EXERCISE: Mathematical Operations
        Create a test suite "Mathematical Operations". Include the following 4 test cases: 
            1. Addition
            2. Subtraction
            3. Multiplication
            4. Division


    Sources: 
        https://testautomationu.applitools.com/mocha-javascript-tests/

*/


var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){

  it('Addition of two numbers', function(){

    var a = 10;
    var b = 10;

    var c = a+b;

    assert.equal(c,20);

  });

  it('Subtraction of two numbers', function(){

    var a = 10;
    var b = 10;

    var c = a-b;

    assert.equal(c,0);


  });

  it('Multiplication of two numbers', function(){

    var a = 10;
    var b = 10;

    var c = a*b;

    assert.equal(c,100);


  });


  it('Division of two numbers', function(){

    var a = 10;
    var b = 10;

    var c = a/b;

      //Fails because 10/10 = 1. We're telling it to expect 0. 
    assert.equal(c,0);


  });

});
