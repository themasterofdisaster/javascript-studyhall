/*
    EXPECT Assertion Style

    Assertion style expect, allows you to chain together natural language assertions to write readable tests in a BDD style. 

    Language Chains:

        to
        be
        been
        is
        that
        which
        and
        has
        have
        with
            at
            of
        same
        but
        does
        still

    For more information: https://www.chaijs.com/api/bdd/
*/

//import chai to the file by creating a variable: 
const chai = require('chai');

//create the variable expect, which we get from previously defined variable "chai"
const expect = chai.expect;

/*
    Expect API Examples
-----------------------------------------------------------------------------------
*/

//Validate if one variable's content is equals another's

let a=1, b=1;
expect(a).to.be.equals(b);

//Validate if a specific input is an object/string/boolean, etc.

//object fuction myObj is created: 
function myObj(){
    return{
        a: 100,
        b: 'Hello'
    }
}

x = new myObj(), y = new myObj();

//validate that x is an object 
expect(x).to.be.an('object');

//validate that x and y are the same object. Does not look into the content of the objects. The following test fails: 
//expect(x).to.be.equals(y, 'x and y are not equal');

//to compare the content of the objects use deep.equal or deep.equals. The following test passes: 
expect(x).to.be.deep.equals(y, 'x and y are not equal');

//CHAIN EXPRESSIONS
//Verify that x is an object AND that it is equal y by using the keyword "and"
expect(x).to.be.an('object').and.to.be.deep.equals(y);


//Arrays
let numbers = [1,2,3,4]
expect(numbers).to.be.an('array');
//expect(numbers).to.be.an('array').that.includes(5);