//for greeting and math function

const { add, multiply} = require('./math.js')
const {greet}= require('./greetings.js')

//calculate for math.js file
const sum=add(4,6);
const prod=multiply(2,7);

//print
console.log(`product: ${prod}`);
console.log(`Sum: ${sum}`);

//for greetings.js
const greets=greet("Prasanna");