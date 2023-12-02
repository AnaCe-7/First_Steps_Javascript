// Array of 10 numbers
let arrayOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayOfNumbers);
document.write("This is an array of 10 numbers: " + arrayOfNumbers);


// Function that prints in console all the numbers in an array
function printConsoleArray(arrayOfNumbers) {
    for (let i = 0; i < arrayOfNumbers.length; i++) 
    console.log(arrayOfNumbers[i]);
};
printConsoleArray(arrayOfNumbers)


// Function that adds a number to an array
arrayOfNumbers.push(10);
console.log(arrayOfNumbers);
document.write("<br>Added a number to the array " + arrayOfNumbers);


// Function that removes the even numbers from an array
let showOnlyOdds = [];
function removeEven() {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] % 2 !== 0) showOnlyOdds.push(arrayOfNumbers[i]);
    }
};
removeEven()
console.log(showOnlyOdds);
document.write("<br>The odd numbers of the array are: " + showOnlyOdds);


// Function that returns the largest number in an array
function largestNumber(arrayOfNumbers) {
    return Math.max(...arrayOfNumbers);
};

let largestResult = largestNumber(arrayOfNumbers);
console.log(largestResult);
document.write("<br>The largest number in the array is: " + largestResult);

// Function that returns the smallest number from an array

function smallestNumber(arrayOfNumbers) {
    return Math.min(...arrayOfNumbers);
};

let smallestResult = smallestNumber(arrayOfNumbers);
console.log(smallestResult);
document.write("<br>The smallest number in the array is: " + smallestResult);

// Function that converts all the letters in a text to lower case
let text1 = "An Apple A Day Keeps The Doctor Away";
let lowerCaseText = text1.toLowerCase();
console.log(lowerCaseText);
document.write("<br>Lowercase texte: " + lowerCaseText);

// Function that converts all the letters in a text to uppercase letters
let text2 = "i have learned something new today";
let upperCaseText = text2.toUpperCase();
console.log(upperCaseText);
document.write("<br>Uppercase texte: " + upperCaseText);

// Function that converts the first letter of each element of the array to uppercase

// let arrayNames = ["cecilia", "sebastian", "elodie"];
// let firstLetterCapitalized = [];
// function capitalize(arrayNames) {
//     return arrayNames.map(word => {
//         let firstLetter = word.charAt(0).toUpperCase();
//         let remainder = word.slice(1).toLowerCase();

//         return firstLetter + remainder;
//     });
// };
//  console.log(capitalize([]));