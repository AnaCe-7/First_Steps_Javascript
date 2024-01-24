// 1) Display a message when clicking on a button
let clickButton = document.getElementById("clickMeBtn");

clickButton.addEventListener("click", () => {
    Swal.fire("Sorry, at the moment this button leads nowhere");
})

"Sorry, at the moment this button leads nowhere"
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


// 6) Array of numbers
// 7) Function that prints on screen how many numbers the array of numbers has
let arrayOfNumbers = [4, 6, 7];

function showArrayLength(array) {
    return "This array has " + array.length + " numbers";
};

let arrayOfNumbersText = document.createElement('p');
arrayOfNumbersText.textContent = showArrayLength(arrayOfNumbers);
container.appendChild(arrayOfNumbersText);


// 8) Nodes to print a form
const myForm = document.getElementById('formContainer');

let formTitle = document.createElement('h2');
formTitle.textContent = "Contact Form";
myForm.appendChild(formTitle);

let form = document.createElement('form')
myForm.appendChild(form);

function createForm() {

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

createForm();

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
        name: "Toby the dog",
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
        name: "Juana the frog",
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

// 9) Nodes to print a table
const myTable = document.getElementById('animalsTable');
let tableRowHeaders = document.getElementById('tableHeadersContainer');

function createTable() {
    let headerKey1 = document.createElement('th');
    headerKey1.textContent = 'id';

    let headerKey2 = document.createElement('th');
    headerKey2.textContent = 'name';

    let headerKey3 = document.createElement('th');
    headerKey3.textContent = 'status';

    let headerKey4 = document.createElement('th');
    headerKey4.textContent = 'species';

    let headerKey5 = document.createElement('th');
    headerKey5.textContent = 'type';

    let headerKey6 = document.createElement('th');
    headerKey6.textContent = 'gender';

    tableRowHeaders.appendChild(headerKey1);
    tableRowHeaders.appendChild(headerKey2);
    tableRowHeaders.appendChild(headerKey3);
    tableRowHeaders.appendChild(headerKey4);
    tableRowHeaders.appendChild(headerKey5);
    tableRowHeaders.appendChild(headerKey6);

    animalsArray.forEach(addDataToTable);
}

// 11) Function that prints on screen each element of the object created above inside the table
function addDataToTable(animal) {
    let rowData = document.createElement('tr');
    rowData.insertCell(0).textContent = animal.id;
    rowData.insertCell(1).textContent = animal.name;
    rowData.insertCell(2).textContent = animal.status;
    rowData.insertCell(3).textContent = animal.species;
    rowData.insertCell(4).textContent = animal.type;
    rowData.insertCell(5).textContent = animal.gender;
 
    myTable.appendChild(rowData);
};

createTable();

