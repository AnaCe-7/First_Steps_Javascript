// 1) Display a message when clicking on a button
let clickButton = document.getElementById("clickMeBtn");

clickButton.addEventListener("click", () => {
    alert("Sorry, at the moment this button leads nowhere");
})


// 2) Change the content of an HTML element
let newTitle = document.getElementById("title");
newTitle.innerHTML = "Document Object Model (DOM)";


// 3) Hide and display HTML elements
// 3.a) With style.display
let hideShowButton = document.getElementById('hideShowBtn');
let hideText = document.getElementById('hiddenText');

hideShowButton.addEventListener("click", () => {
    if (hideText.style.display === "none") {
        hideText.style.display = "block";
    }
    else {
        hideText.style.display = "none";
    }
})

// 3.b) With classList.toggle
let container = document.querySelector('.domTestingContainer');

let myBtn = document.createElement("button");
myBtn.textContent = "Show Text";
myBtn.classList.add("showHideBtn")

let myText = document.createElement('p')
myText.textContent = "Tadam! the text appeared"
myText.classList.add("invisible")

container.appendChild(myBtn);
container.appendChild(myText);

myBtn.addEventListener("click", () => {
    myText.classList.toggle("invisible");
    if (myText.classList.contains("invisible")) {
        myBtn.textContent = "Show Text";
    } else {
        myBtn.textContent = "Hide Text";
    }
});


// 4) Array of 10 names
let olympianGods = ["Zeus", " Poseidon", " Ares", " Aphrodite", " Hera", " Demeter", " Athena", " Apollo", " Artemis", " Hephaestus"];

// 5) Function that prints on screen a list of names from the array of names
let olympianText = document.createElement('p')
olympianText.textContent = "Ten of the twelve gods of Olympus are:"
container.appendChild(olympianText);

function printOlympianGods() {
    let myList = document.createElement("ul");
    olympianGods.forEach(function (god) {
        let namesList = document.createElement("li");
        namesList.textContent = god;
        myList.appendChild(namesList);
    });

    container.appendChild(myList);
}

printOlympianGods();


// 6) Array of numbers & 7) Function that prints on screen how many numbers the array of numbers has
function showArrayLength(array) {
    return "This array has " + array.length + " numbers";
};

let arrayOfNumers = [1, 2, 3, 4, 5, 6, 7];
document.write(showArrayLength(arrayOfNumers));


// 8) Nodes to print a form
// Call the main element by its id
const main = document.getElementById('main');

// Create inside main a new container for the form
let formDiv = document.createElement('div');
formDiv.classList.add("formContainer");
main.appendChild(formDiv);

// Create a heading for the form
let formTitle = document.createElement('h2');
formTitle.textContent = "Contact Form";
formDiv.appendChild(formTitle);

//Create the form element
let form = document.createElement('form')
formDiv.appendChild(form);

function myform() {
    // Form fields:
    let labelName = document.createElement("label");
    labelName.textContent = 'Name:';
    let inputName = document.createElement("input");
    inputName.setAttribute("type", "text");

    let labelLastName = document.createElement("label");
    labelLastName.textContent = 'Last Name:';
    let inputLastName = document.createElement("input");
    inputLastName.setAttribute("type", "text");

    let labelPhoneNumber = document.createElement("label");
    labelPhoneNumber.textContent = 'Phone number:';
    let inputPhoneNumber = document.createElement("input");
    inputPhoneNumber.setAttribute("type", "tel");

    let labelEmail = document.createElement("label");
    labelEmail.textContent = 'Email:';
    let inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");

    let formButton = document.createElement("button");
    formButton.classList.add("sendBtn");
    formButton.innerText = "Send";

    // Add elements to the form
    form.appendChild(labelName);
    form.appendChild(inputName);

    form.appendChild(labelLastName);
    form.appendChild(inputLastName);

    form.appendChild(labelPhoneNumber);
    form.appendChild(inputPhoneNumber);

    form.appendChild(labelEmail);
    form.appendChild(inputEmail);

    form.appendChild(formButton);

};

myform();

// 9) Nodes to print a table

// 10) Array of 10 objects with their respective key:value
const animalsArray = [
    {
        id: 1,
        name: "Lorenzo the elephant",
        status: "melancholic",
        species: "mammals",
        type: "herbivore",
        gender: "male"
    },
    {
        id: 2,
        name: "Blue the fish",
        status: "surprised",
        species: "fish",
        type: "gnathostomates",
        gender: "male"
    },
    {
        id: 3,
        name: "Thomas the cat",
        status: "happy",
        species: "mammals",
        type: "feline",
        gender: "male"
    },
    {
        id: 4,
        name: "Tito the dog",
        status: "hyperactive",
        species: "mammals",
        type: "canid",
        gender: "male"
    },
    {
        id: 5,
        name: "Roberto the crocodile",
        status: "angry",
        species: "reptile",
        type: "carnivorous",
        gender: "male"
    },
    {
        id: 6,
        name: "Fernanda the whale",
        status: "serene",
        species: "mammals",
        type: "cetacean",
        gender: "female"
    },
    {
        id: 7,
        name: "Anabel the anaconda",
        status: "hungry",
        species: "reptile",
        type: "carnivorous",
        gender: "female"
    },
    {
        id: 8,
        name: "Leopoldo the turtle",
        status: "nervous",
        species: "reptile",
        type: "oviparous",
        gender: "male"
    },
    {
        id: 9,
        name: "Juana la rana ",
        status: "shy",
        species: "amphibians",
        type: "oviparous",
        gender: "female"
    },
    {
        id: 10,
        name: "Bianca the eagle",
        status: "curious",
        species: "bird",
        type: "prey",
        gender: "female"
    }
];


// 11) Function that prints on screen each element of the object created above inside the table