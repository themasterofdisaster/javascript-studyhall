/*
    MOCHA HOOKS

        With its default “BDD”-style interface, Mocha provides the hooks before(), after(), beforeEach(), and afterEach().
        These should be used to set up preconditions and clean up after your tests.

        before() hook will execute the code block before the first test executes from it() function.
        after() hook will execute the code block after all the tests executes.
        beforeEach() hook will run the code block before every test execution.
        afterEach() hook will be running the code block after every text execution.

        The hooks must be specified within the describe() block. 

*/

describe('Mocha Hooks', function(){

    before('Execute Before All Tests', function(){
        // runs once before the first test in this block
        console.log('Execute Before All Tests');
    });

    beforeEach('Execute Before Each Test', function(){
        // runs before each test in this block
        console.log('Execute Before Each Test');
    });

    after('Execute After All Tests', function(){
        // runs once after the last test in this block
        console.log('Execute After All Tests');

    });

    afterEach('Execute After Each Test', function(){
        // runs after each test in this block
        console.log('Execute Before Each Test');
    });

    it('Mocha Hooks Test1', function(){

        console.log('Mocha - This is Test1 for Mocha Hooks');
    })
   
    it('Mocha Hooks Test2', function(){

      console.log('Mocha - This is Test2 for Mocha Hooks');
  })
})