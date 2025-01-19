// Convert a traditional function that calculates the square of a number into an arrow function.


// //arrow function:

    // const sq=(num)=>{
    //     return num*num
    // }

    // console.log(sq(33));

function getSquare(num){
 return num*num
}
console.log(getSquare(2)) 


//using arrow function

const Square=(num)=>{
    return num*num;
}

console.log(Square(2)); 