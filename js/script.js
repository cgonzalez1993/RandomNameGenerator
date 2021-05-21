let wickedCss = ["floater", "barrelRoll", "rollerRight", "rollerLeft", "hearbeat", "pulse",
    "rotation", "sideToSide", "zoomer", "zoomerOut", "spinner", "wiggle", "shake", "pound", "slideUp",
    "slideDown", "slideRight", "slideLeft", "fadeIn", "fadeOut", "rotateInRight", "rotateinLeft",
    "rotateIn", "bounceIn"];


//let studentNames = ["Adrian Segura", "Arthur Olmos", "Alex Ato", "Ann Chansey", "Bryan Stewart", "Carlos Gonzalez", "Christy Eang", "Demitrius Ovro", "Dylan McFarlin", "Hugo Mejia", "John Shamoon", "Jorge Lopez", "Joseph Racca", "Juan Morales", "Ken Martinez", "Leopoldo Manzo", "Matthew Mendoza", "Matthew Tyler Rose", "Sean Chandler", "Trevor Womack", "Victor Maldonado"];


//Script to have the button pull a name from the studentNames list
let getName = document.getElementById("getName").addEventListener("click", function () {
    randomNameGenerator();
    //     let cssRandom = Math.floor(Math.random() * wickedCss.length);
    // displayName.className = "";
    displayName.className = "card-text white center"
});

let selectedName = "";

function randomNameGenerator() {
    selectedName = newNames[Math.floor(Math.random() * newNames.length)];
    displayName.innerText = selectedName; //Script for button to display a random name wherever you set the id
}


let inputNames = document.getElementById("inputNames");
let outputNames = document.getElementById("outputNames");
let newNames = [];

let data = JSON.parse(localStorage.getItem("List"));


inputNames.addEventListener("keypress", function (e) {
    //console.log(e);
    if (e.code == "Enter") {
        appendElements(inputNames.value);
    }

});

function appendElements(checkList) {
    console.log(checkList);

    if (inputNames.value == "" || inputNames.value == null) {
        alert("Enter something other than nothing...");
    }
    else if (inputNames.value == "Something" || inputNames.value == "something") {
        alert("Ohhh you think you're funny, huh? Try again...");
    }
    else if (inputNames.value == "Nothing" || inputNames.value == "nothing") {
        alert("Smart ass. Try again...");
    }
    else {
        let pElement = document.createElement("p");
        pElement.innerText = checkList;

        pElement.addEventListener("click", function (e) {
            //debugger              
            newNames.forEach(x => {
                if (e.target.innerText != x) {
                    console.log(x);
                    newNames = [];
                    newNames.push(x)
                    localStorage.setItem("List", JSON.stringify(newNames))
                    e.target.remove();
                }

            })


        });

        outputNames.appendChild(pElement);
        inputNames.value = "";

        newNames.push(checkList);

        localStorage.setItem("List", JSON.stringify(newNames))
    }
}


if (data != "" || data != null) {
    for (let i = 0; i < data.length; i++) {
        let pElement = document.createElement("p");

        pElement.innerText = data[i];

        pElement.addEventListener("click", function (e) {
            e.target.remove();
        });

        outputNames.appendChild(pElement);
        newNames.push(data[i]);
        localStorage.setItem("List", JSON.stringify(newNames))
    }
}



