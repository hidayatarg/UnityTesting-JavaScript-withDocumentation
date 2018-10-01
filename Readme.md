# JS Unit Testing
-Behavior Driven Development is like creating a plan before you write your program
-Test first program later.
-Start by describing how the program should work, then write code until it works the way you expect it to work
If your tests are good, you can be confident that your functions really do what they’re supposed to do

## Red > Green > Refactor

Write the tests, even though at first they’ll fail 
Fix the function in the first way that comes to mind, just to get your tests passing 
Go back and refactor the function for improvements, repeating the cycle until you’re ready to move on


Chai is an expectation library that includes special functions that throw an error when an expectation is not met.

Let's install the dependencies
```sh
npm init
npm install chai --save-dev
npm install nodemon --save -dev
```