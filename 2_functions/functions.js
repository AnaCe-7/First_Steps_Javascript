// 1)  Greeting function
let person_name = "Sebastian";

function greeting(){
    return(`Hola, ${person_name}`);
}

console.log(greeting());
document.write(greeting());

// 2) Function sum of 2 parameters
function sumOfNumbers(num1, num2) {
    let result = num1 + num2;
    console.log(`The sum of ${num1} + ${num1} equals ${result}`);
    document.write(`<br>The sum of ${num1} + ${num1} equals ${result}`);
};

sumOfNumbers(7,7);

// 3) Function of odd and even numbers
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return (`The number ${number} is even`);
    } else { (number % 2 !== 0)
        return (`The number ${number} is odd`);
    }
};
// Testing the function in the console
console.log(evenOrOdd(10));
console.log(evenOrOdd(7));

// Display variable values on the browser screen
document.write("<br>", evenOrOdd(20));
document.write("<br>", evenOrOdd(33));
