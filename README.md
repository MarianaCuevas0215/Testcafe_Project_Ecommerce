# Testcafe_Project_Ecommerce

# Introduction
Testcafe is a Node JS tool create by DevExpress to automate E2E web testing, write tests in JavaScript or in TypeScript language, run them and view results throughout reports. Testcafe can open multiple instances of the same browser to run parallel tests. This tool can support different browsers: Chrome, FF, Edge and IE and can be simulate mobile devices The scripts can be run from a console and its reports can be viewed in a CI system’s interface (Team City, Jenkis, Travis, etc.). Testcafe is an open source tool, it is easy to install through npm command line and it is a good option for testers that start in automation testing due to is easy to learn. 

# Objective
The purpose of this repository is educational. These tests are part of an assessment process for grade the knowledge acquired during the Testcafe course with QA Minds Lab.

# Scope
Creation and execution of E2E automated tests using Testcafe tool to validate functionalities in an E-commerce site. Within the scope will be validated the following modules: Home page, Catalog products, Shopping products and My account. The tests should be run in Chrome and FF browsers at least. 

# Installation
For Windows 10:

To install Testcafe tool, run the following command:
npm install -g testcafe

Ensure that Node.js and npm are installed on your computer and run the following command:
npm install -g testcafe

# Considerations for the execution 

To run a test run the following command:
testcafe chrome tests/ 
p.e: testcafe chrome mi_Cuenta.js

To run an specific test script, please run the following command:
testcafe chrome tests/ -t "nameTest"
p.e testcafe chrome mi_Cuenta.js -t "Verify that user can create an account"

To run the tests and get a report, please consider the next commands:

testcafe chrome,firefox:headless mi_Cuenta.js --reporter html:Reports/MyAccount.html
testcafe chrome,firefox:headless homePage.js --reporter html:Reports/HomePage.html
testcafe chrome,firefox:headless listProducts.js --reporter html:Reports/ListProducts.html
testcafe chrome,firefox:headless shopping.js --reporter html:Reports/Shopping.html





