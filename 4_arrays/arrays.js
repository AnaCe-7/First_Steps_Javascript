// 1) Array of 10 numbers
let arrayOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayOfNumbers);
document.write("This is an array of 10 numbers: " + arrayOfNumbers + "<br>");


// 2) Function that prints in console all the numbers in an array
function printConsoleArray(array) {
    for (let i = 0; i < array.length; i++) 
    console.log(array[i]);
};
printConsoleArray(arrayOfNumbers)


// 3) Function that adds a number to an array
arrayOfNumbers.push(10);
console.log(arrayOfNumbers);
document.write("<br>Added a number to the array " + arrayOfNumbers + "<br>");


// 4) Function that removes the even numbers from an array
let showOnlyOdds = [];
function removeEven() {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] % 2 !== 0) showOnlyOdds.push(arrayOfNumbers[i]);
    }
};
removeEven()
console.log(showOnlyOdds);
document.write("<br>The odd numbers of the array are: " + showOnlyOdds + "<br>");


// 5) Function that returns the largest number in an array
// The Math.max() static method returns the largest of the numbers given as input parameters.
// In this case the input parameter is an array of numbers that I have stored in a global variable:
function largestNumber(arrayOfNumbers) {
    return Math.max(...arrayOfNumbers);
};

let largestResult = largestNumber(arrayOfNumbers);
console.log(largestResult);
document.write("<br>The largest number in the array is: " + largestResult + "<br>");

// 5.a) In this case the input parameter are simple list of numbers:
console.log("The largest number in this other array is " + Math.max(9, 5.25, 3, -1, 0, -2));
console.log("The smallest number in this other array is " + Math.min(1, 7, 22, 19, -1, 14, -2));


// 6) Function that returns the smallest number from an array

function smallestNumber(arrayOfNumbers) {
    return Math.min(...arrayOfNumbers);
};

let smallestResult = smallestNumber(arrayOfNumbers);
console.log(smallestResult);
document.write("<br>The smallest number in the array is: " + smallestResult + "<br>");


// 7) Function that converts all the letters in a text to lowercase
let text1 = "An Apple A Day KEEPS The Doctor AWAY";
let lowerCaseText = text1.toLowerCase();
console.log(lowerCaseText);
document.write("<br>Lowercase texte: " + lowerCaseText + "<br>");


// 8) Function that converts all the letters in a text to uppercase
let text2 = "i have learned something new today";
let upperCaseText = text2.toUpperCase();
console.log(upperCaseText);
document.write("<br>Uppercase texte: " + upperCaseText + "<br>");


// 9) Function that converts the first letter of each element of the array to uppercase

let arrayNames = ["mafalda", "guille", "miguelito", "manolito", "susanita", "felipe", "libertad"];

//loop through each element of the array and capitalize the first letter.
function capitalizeFirstLetter(array) {
    for (let i = 0; i < array.length; i++)
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase(); 
};

capitalizeFirstLetter(arrayNames);
console.log(arrayNames);
document.write("<br>Quino's best known work was Mafalda. The main characters of this famous comic strip are: " + arrayNames + "<br>");