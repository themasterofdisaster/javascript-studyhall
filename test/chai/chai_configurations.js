/*
    CHAI CONFIGURATIONS

    https://www.chaijs.com/guide/styles/#configuration

    chai.config.includeStack - is false by default. Set to true if you want to include the full stack trace. 
    chai.config.showDiff - by default set to true. use it to include/exclude differences thrown by the assertion error. 
    chai.config.truncateThreshold - Sets length threshold for actual and expected values in the assertion errors. Default value is 40. Set to 0 to disable truncating. 

    The following is a mocha test with chai assertions. 

*/

var chai = require('chai');
var should = chai.should();

// chai.config.truncateThreshold = 0;

chai.config.showDiff = false; // turn off reporter diff display
chai.config.truncateThreshold = 0; // disable truncating
chai.config.includeStack = true; // turn on stack trace


describe("objects", function () {
    it("should equal", function () {
        var a = {
            a: 1,
            b: 2,
            c: {
                a: 1,
                b: 2,
                c: {
                    a: 1,
                    b: 2,
                    x: 3
                }
            }
        };

        var b = {
            a: 1,
            b: 2,
            c: {
                a: 1,
                b: 2,
                c: {
                    a: 1,
                    b: 2,
                    x: 4
                }
            }
        };
        a.should.deep.equal(b);
    });
});