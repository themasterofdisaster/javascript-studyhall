/*
    SHOULD Assertion Style

    'should' interface extends Object.Prototype to provide a single getter as the starting point for language assertions.
        should -> Object.Prototype - a.should

*/
const chai = require('chai');
const should = chai.should();


/*
    SCENARIOS WHERE 'should' WILL NOT WORK
-----------------------------------------------------------------------------------
*/

// ::: Checking Existance of an Object :::

//The function called writeToFile(error) takes an object called “error” as an argument and 
//verifies that error should not exist by using the expression error.should.not.exist().
/*
function writeToAFile(error){

    //Normal scenario: Error has some value, for example 1. 
    //writeToAFile(1);
    //We can test using the following expression: 
    error.should.not.exist();
    //The assertion will fail as expected stating "AssertionError: expected 1 to not exist"

}
writeToAFile(1);
*/

function writeToAFile(error){

    //But what if error is undefined? 
    //writeToAFile(undefined);
    //In such cases, using 'error.should.not.exist();' would result in error "Cannot read property 'should' of undefined"
    //we cannot use this command if the value is null or undefined, as undefined and null haven't been extended with the should chain starter.

    // Given that error is undefined, order the 'should' command as follows: 
    should.not.exist(error);
}

writeToAFile(undefined);


/*
    ::: Should Helpers/Should Extras? :::

        should.exist
        should.not.exist
        should.equal
        should.not.equal
        should.Throw
        should.not.Throw
*/