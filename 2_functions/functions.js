// 1)  Greeting function
    // 1-a) A way to do it
let person_name = "Sebastian";

function greeting(){
    return(`Hola, ${person_name}`);
}

console.log(greeting());
document.write(greeting());
// document.write(`Hola, ${person_name}`); --> otra opción


/*
    // 1-b) Another way to do it
function greeting(person_name) {
    let message = "Hola, " + person_name;
    console.log(message);
    document.write("<br>" + message); 
}

greeting("Sebastian");
*/ 


/*
    // 1-c) Another way to do it
let person_name = "Sebastian";

function greeting(){
    let message = "Hello, ";
    console.log(message + person_name);
    document.write("<br>" + message + person_name);
}

person_name = "Valentina"; //--> se ha reasignado un valor nuevo a la variable.
greeting();
*/ 

// 2) Sum function
function sum(){
    let number_a = 7;
    let number_b = 3;
    let result = number_a + number_b;
    return "<br>The sum of " + number_a + " plus " + number_b + " equals " + result; //--> OJO con el <br> en la consola
}

console.log(sum());
document.write(sum());


// 3) Function of odd and even numbers
//let odd_or_even = 

