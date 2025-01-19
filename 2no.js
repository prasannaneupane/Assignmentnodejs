//Create a calculator function that takes two numbers and an operator (+, -, *, /) as argument of the function and returns the result. Hint: switch()


function calculator(n1, n2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = n1 + n2;
            break;

        case '*':
            result = n1 * n2;
            break;

        case '/':
            if (n2 !== 0) {
                result = n1 / n2;
            } else {
                return "Error: Division by zero is not allowed.";
            }
            break;

        case '-':
            result = n1 - n2;
            break;

        default:
            return "Error: Invalid operator. Use +, -, *, or /.";
    }
    return result;
}

console.log(calculator(10, 5, '+')); 
console.log(calculator(10, 5, '*')); 
console.log(calculator(10, 0, '/')); // showing error while dividing by zero
console.log(calculator(10, 5, '%')); //invalid operator