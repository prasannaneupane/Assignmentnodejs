//Write a function findMax that accepts an array of numbers and returns the maximum value. Hint: Math.max()

// Maath.max()=Returns the largest number: It compares the numbers and returns the maximum

function findMax(numbers){
    return Math.max(...numbers)
}

const num=[10,23,33,23,4324,11,43,7,0,122,66]
console.log("the maximum value from the given array is ",findMax(num)); //output: the maximum value from the given array is  4324
