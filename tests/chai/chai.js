const chai = require('chai');
//expect

const expect = chai.expect;

//expect API examples

//::::: validate if one variable's content is equals another's ::::://

let a=1, b=1;
expect(a).to.be.equals(b);

//----- validate if a specific input is an object/string/boolean, etc. -----//

//test object fuction myObj is created: 
function myObj(){
    return{
        a: 100,
        b: 'Hello'
    }
}

x = new myObj(), y = new myObj();

//validates x is an object 
expect(x).to.be.an('object');

//validate it x and y are the same object. Does not look into the content of the objects. The following test fails: 
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