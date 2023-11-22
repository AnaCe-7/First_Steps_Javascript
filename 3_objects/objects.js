// Car object

let car = {
    brand: "Toyota",
    number_of_doors: 4,
    parts: ["seats", "wheels", "lights"],
};

// Function that returns the car brand
console.log("The brand of the car is: " + car.brand);
document.write("<br>The brand of the car is: " + car.brand);

// Function that returns the number of doors
console.log("This car has " + car.number_of_doors + " doors");
document.write("<br>This car has " + car.number_of_doors + " doors");

// Function that returns an attribute of the nested object
console.log("A part of the car is: " + car.parts[1]);
document.write("<br>A part of the car is: " + car.parts[1]);