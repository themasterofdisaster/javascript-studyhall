/*
    EXPECT Assertion Style

    Assertion style 'expect', allows you to chain together natural language assertions to write readable tests in a BDD style. 

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
    EXPECT API EXAMPLES
-----------------------------------------------------------------------------------
*/

//::: Validate if one variable's content is equals another's :::

let a=1, b=1;
expect(a).to.be.equals(b);

//you can pass a message to provide useful informatio in the case the test fails:
expect(a).to.be.equals(b, "and and b are not equal");


//::: Validate if a specific input is an object/string/boolean, etc. :::

//fuction myObj is created: 
function myObj(){
    return{
        a: 100,
        b: 'Hello'
    }
}

//create two objects based on the function above:
x = new myObj(), y = new myObj();

//validate that x is an object:
expect(x).to.be.an('object');


//::: Validate that x and y are the same object :::

//Using equal or equals does not look into the content of the objects. The following test fails: 
//expect(x).to.be.equals(y, 'x and y are not equal');

//to compare the content of the objects use deep.equal or deep.equals. The following test passes: 
expect(x).to.be.deep.equals(y, 'x and y are not equal');


/*
    CHAINING EXPRESSIONS
-----------------------------------------------------------------------------------
*/

//Verify that x is an object AND that it is equal y by using the keyword "and"
//use 'a' or 'an' to validate the target type before performing assertions on it. 
expect(x).to.be.an('object').and.to.be.deep.equals(y);

//::: Arrays :::

let numbers = [1,2,3,4]
expect(numbers).to.be.an('array');

//chain assertions with word "that"
expect(numbers).to.be.an('array').that.includes(1); //passes
//expect(numbers).to.be.an('array').that.includes(5); //fails

