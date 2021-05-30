let wickedCss = ["floater", "barrelRoll", "rollerRight", "rollerLeft", "hearbeat", "pulse",
    "rotation", "sideToSide", "zoomer", "zoomerOut", "spinner", "wiggle", "shake", "pound", "slideUp",
    "slideDown", "slideRight", "slideLeft", "fadeIn", "fadeOut", "rotateInRight", "rotateinLeft",
    "rotateIn", "bounceIn"];
    
let inputNames = document.getElementById("inputNames");
let outputNames = document.getElementById("outputNames");
let newNames = [];
let selectedName = "";
    
let data = JSON.parse(localStorage.getItem("List"));


let getName = document.getElementById("getName").addEventListener("click", function () {
    if (newNames.length <= 0) {
        alert("There are no names listed. Please enter some names.")
    }
    else {
        randomNameGenerator();
        let cssRandom = Math.floor(Math.random() * wickedCss.length);
        displayName.className = "list-group-item bleu center cremeColour radius" + wickedCss[cssRandom];
    }
});

function randomNameGenerator() {
    // let selectedName = "";
    selectedName = newNames[Math.floor(Math.random() * newNames.length)];
    displayName.innerText = selectedName; //Script for button to display a random name wherever you set the id
}


inputNames.addEventListener("keypress", function (e) {
    if (e.code == "Enter") {
        appendElements(inputNames.value);
    } 
});

function appendElements(addedName) {
    console.log(addedName);
    if (inputNames.value == "" || inputNames.value == null) {
        alert("Enter something other than nothing...");
    }
    else if (inputNames.value.toLowerCase() == "something") {
        alert("Ohhh you think you're funny, huh? Try again...");
    }
    else if (inputNames.value.toLowerCase() == "nothing") {
        alert("Smart ass. Try again...");
    }
    else if (newNames.includes(inputNames.value) == true) {
        alert("This name has already been entered. Please enter a new name!")
    }
    else {
        let pElement = document.createElement("p");
        pElement.innerText = addedName;
        pElement.className = "list-group-item center bleu radius px-5";
        outputNames.appendChild(pElement);
        inputNames.value = "";
        newNames.push(addedName);
        localStorage.setItem("List", JSON.stringify(newNames));

        pElement.addEventListener("click", function (e) {
            for (i = 0; i < newNames.length; i++) {
                if (e.target.innerText == newNames[i]) {
                    let nameToRemove = newNames.indexOf(e.target.textContent);
                    newNames.splice(nameToRemove, 1);
                    localStorage.setItem("List", JSON.stringify(newNames))
                    e.target.remove();
                }
            }
        });
    }
    console.log(newNames);
}

if (data != "" || data != null) {
    for (let i = 0; i < data.length; i++) {
        let pElement = document.createElement("p");
        pElement.innerText = data[i];
        pElement.className = "list-group-item center bleu radius px-5";
        outputNames.appendChild(pElement);
        newNames.push(data[i]);
        localStorage.setItem("List", JSON.stringify(newNames));

        pElement.addEventListener("click", function (e) {
            for (i = 0; i < newNames.length; i++) {
                if (e.target.innerText == newNames[i]) {
                    let nameToRemove = newNames.indexOf(e.target.textContent);
                    newNames.splice(nameToRemove, 1);
                    localStorage.setItem("List", JSON.stringify(newNames));
                    e.target.remove();
                }
            }
        });
    }
}


