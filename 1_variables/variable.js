// 1) Data type variables: numbers, text string, boolean
let number = 7;
let number_a = 100;
let number_b = 133;
let str = "I am very fond of ";
let animal = "cats";
let bool = true;

// Display variables values in the browser console
console.log(number, number_a , number_b);
console.log(str, animal);
console.log(bool);

// Display variable values on the browser screen
document.write("The week has " + number + " days" + "<br>");
document.write("<br>I love animals, and " + str + animal + "<br>");
document.write("<br>Boolean variables have two possible values: false and " + bool + "<br>");

// 2) Integer type variables and basic mathematical operations
let sum = number + number_a;
let subtract = number_b - number_a;
let multiply = number_a * number_b;
let divide = number_b / number;

console.log(sum);
console.log(subtract);
console.log(multiply);
console.log(divide);

document.write("<br>The sum of 7 + 100 equals " + sum + "<br>");
document.write("<br>The subtraction of 133 - 100 " + subtract + "<br>");
document.write("<br>The multiplication of 100 x 133 " + multiply + "<br>");
document.write("<br>The division of 133 by 7 equals " + divide + "<br>");

// 3) Concatenation of text string variables
let sentence = str + animal;
console.log(sentence);
document.write("<br>", sentence);