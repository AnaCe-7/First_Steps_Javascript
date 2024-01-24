// Car object

let car = {
    brand: "Toyota",
    number_of_doors: 4,
    parts: ["seats", "wheels", "lights"],
};

console.log(car);

// Function that returns the car brand
console.log("The brand of the car is: " + car.brand);
document.write("<br>The brand of the car is: " + car.brand + "<br>");

// Function that returns the number of doors
console.log("This car has " + car.number_of_doors + " doors");
document.write("<br>This car has " + car.number_of_doors + " doors" + "<br>");

// Function that returns an attribute of the nested object
console.log("A part of the car is: " + car.parts[1]);
document.write("<br>AOne of the parts of the car are the: " + car.parts[1]);