# About Mocha 

Mocha is a JavaScript Test Framework (compare to what TestNG is for Java or NUnit for C#).
Runs on NodeJS and browser. 

Used to organize the tests and execute them in a logical sequence to make testing more effective. Helps make asynchronous testing simpler. 

## Installing Mocha

### Pre-requisites
- NodeJS and Node Package Manager (NPM)
Download from https://nodejs.org/en/download/
Run the installer and follow instructions. 

To verify that you have successfully installed node enter the following on the terminal: 
`node --version`

### Install Mocha 

On the terminal run:
`npm install mocha -g`
-g indicates we want this package to be installed as a global package 
This command will download all the dependency packages for Mocha, all extras and will install. 

For more details on what is being installed you can check as follows: 
Go to the official Node Package Manager website https://www.npmjs.com/ and search for Mocha package. 
The first link will take you to the official mocha page. Here you can see details related to Mocha such as dependencies, latest version and more. 

Once Mocha has been installed successfully run the following command to confirm and verify the installed version: 
`mocha -version`

## To run mocha tests 
From terminal run the following command: 
`npm test`

The above will execute all the tests included as part of this particular JavaScript file.

## Mocha Configurations

### Retry 
Retry is a function available within Mocha to execute the failed test several times.

-You can tell Mocha to execute the failed tests several times according to your requirement. 
-Retry function is primarily used for End-toEnd tests like Selenium scripts. 
-Re-runs on beforeEach/afterEach hooks but NOT on before/after hooks. 
-Retry is not recommended for Unit Tests. 


## Sources
https://mochajs.org/
https://testautomationu.applitools.com/mocha-javascript-tests/
