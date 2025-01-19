//10. Write a program that filters out even numbers from an array and returns a new array with only the odd numbers. Hint: filter()


//const add = (a, b) => a + b;


const arr=[3,5,2,22.32,44,88,76,47,5,32,20,8,1]

const oddno= arr.filter(num => num % 2!=0);

console.log(oddno); //prints only odd number