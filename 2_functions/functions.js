// 1)  Greeting function
// 1.a) With a dynamic parameter

function greeting_a(person_name){
    return(`Hello, ${person_name}`);
}

console.log(greeting_a("Valentina"));
document.write(greeting_a("Cecilia <br>"));

// 1.b) With two dynamic parameters

function greeting_b(greeting_parameter, name_parameter){
    return(`${greeting_parameter}, ${name_parameter}`);
}

console.log(greeting_b("Hello", "Ana"));
document.write(greeting_b("What's up", "Sebastian"));


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
