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

hideShowButton.addEventListener("click", ()=> {
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

let myText =  document.createElement('p')
myText.textContent = "Tadam! the text appeared"
myText.classList.add("invisible")

container.appendChild(myBtn);
container.appendChild(myText);

myBtn.addEventListener("click", ()=> {
    myText.classList.toggle("invisible");
    if (myText.classList.contains("invisible")) {
        myBtn.textContent = "Show Text";
    } else {
        myBtn.textContent = "Hide Text";
    }
});


// 4) Array of 10 names
let olympianGods = ["Zeus", " Poseidon", " Ares", " Aphrodite", " Hera", " Demeter", " Athena", " Apollo", " Artemis", " Hephaestus"];
console.log(olympianGods);

// 5) Function that prints on screen a list of names from the array of names
console.log (olympianGods.toString());
document.write("<br>Ten of the twelve gods of Olympus are: " + olympianGods.toString());


// 6) Array of numbers

// 7) Function that prints on screen how many numbers the array of numbers has

// 8) Nodes to print a form

// 9) Nodes to print a table

// 10) Array of 10 objects with their respective key:value

// 11) Function that prints on screen each element of the object created above inside the table