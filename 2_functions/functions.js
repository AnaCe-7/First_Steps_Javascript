// 1)  Greeting function
let person_name = "Sebastian";

function greeting(){
    return(`Hola, ${person_name}`);
}

console.log(greeting());
document.write(greeting());

// 2) Sum function
function sum(){
    let number_a = 7;
    let number_b = 3;
    let result = number_a + number_b;
    return "The sum of " + number_a + " plus " + number_b + " equals " + result;
}

console.log(sum());
document.write("<br>", sum());

// 3) Function of odd and even numbers
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return (`The number ${number} is even`);
    } else { (number % 2 !== 0)
        return (`The number ${number} is odd`);
    }
};
// Test the function in the console
/*
console.log(evenOrOdd(10));
console.log(evenOrOdd(7));
*/

// Display variable values on the browser screen
document.write("<br>", evenOrOdd(20));
document.write("<br>", evenOrOdd(33));
