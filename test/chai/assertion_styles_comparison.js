/*
    ASSERTION STYLES COMPARISON

    https://testautomationu.applitools.com/chai-test-assertions
*/

//import chai to the file by creating a variable: 
const chai = require('chai');

//create the variable expect, which we get from previously defined variable "chai"
const expect = chai.expect;

//create variable should()
const should = chai.should();

//create variable assert (TDD style)
const assert = chai.assert;

/*
    EXPECT API EXAMPLES
-----------------------------------------------------------------------------------
*/

//::: Validate if one variable's content is equals another's :::

let a=1, b=1;

//Same assertion in expect, should and assert styles: 
expect(a).to.be.equals(b, "a and b are not equal");
a.should.be.equals(b);
assert.equal(a,b, 'a and b are not equal');

//::: Validate if a specific input is an object :::

function myObj(){
    return{
        a: 100,
        b: 'Hello'
    }
}

x = new myObj(), y= new myObj();

expect(x).to.be.an('object');


//vaidate that content of object x is euals to contents of object y.
//deep.equal or deep.equals
//same assertion in expect, should, assert: 
expect(x).to.be.deep.equals(y, 'x and y are not equal');
x.should.to.be.deep.equals(y, 'x and y are not equal');
assert.deepEqual(x,y, 'x and y are not equal');

/*
    CHAINING EXPRESSIONS
-----------------------------------------------------------------------------------
*/

// verify that x is an object AND that x and y are equal
// keywords- and, with, but, ...
expect(x).to.be.an('object').and.to.be.deep.equals(y);
x.should.to.be.an('object').and.to.be.deep.equals(y);


//::: Arrays :::

let numbers = [1,2,3,0];

//verify that 'numbers' is an array AND that it includes number 3. 
//same assertion in expect, should, assert: 
expect(numbers).to.be.an('array').that.includes(3);
(numbers).should.be.an('array').that.includes(3);
assert.isArray(numbers, 'numbers is not an array');

//should extras
//should -> Object.Prototype - a.should
function writeToAFile(error){
    //should extras

    // normal scenario
    // error.should.not.exist();

    //Given that error is undefined
    should.not.exist(error);
}

writeToAFile(undefined);


