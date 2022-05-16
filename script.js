let zoznam = JSON.parse(localStorage.getItem("zoznam"));

// načítanie dat z id
let nameInput = document.getElementById("name");
let zanerInput = document.getElementById("zaner");
let rokInput = document.getElementById("rok");
let herciInput = document.getElementById("herci");

if (zoznam == null) {
    zoznam = [];
}

let containerDiv = document.getElementById("container");


function vykresliZoznam() {

    containerDiv.innerHTML = "";

    for (let i = 0; i < zoznam.length; i++) {

        containerDiv.innerHTML += "<p>" + zoznam[i].name + " " + zoznam[i].zaner + " " + zoznam[i].rok + " " + zoznam[i].herci + "</p>"
    }

}

function klikloSaTlacitko(event) {
    event.preventDefault()

    zoznam.push({name: nameInput.value, zaner: zanerInput.value, rok: rokInput.value, herci: herciInput.value});

    nameInput.value = "";
    /*zanerInput.value = "";*/
    rokInput.value = "";
    herciInput.value = "";

    console.log("******* Aktuálny zoznam filmov *******")

    vykresliZoznam();

    // aby sa nam zoznam nevymazal po refresh stranky zapisanie zoznamu do lacal storage
    localStorage.setItem("zoznam", JSON.stringify(zoznam));

    console.log(zoznam);

}

function klikloSaNaReset(event) {
    event.preventDefault()

    zoznam = [];

    localStorage.setItem("zoznam", JSON.stringify(zoznam));

    nameInput.value = "";
    /*zanerInput.value = "";*/
    rokInput.value = "";
    herciInput.value = "";

    console.log("******* Aktuálny zoznam filmov *******")
    vykresliZoznam();

    // aby sa nam zoznam nevymazal po refresh stranky zapisanie zoznamu do lacal storage
    localStorage.setItem("zoznam", JSON.stringify(zoznam));

    console.log(zoznam);
}

function klikloSaOdstranenie(event) {
    localStorage.setItem("zoznam", JSON.stringify(zoznam));
    zoznam.pop();

    console.log("******* Aktuálny zoznam filmov *******")
    vykresliZoznam();

    // aby sa nam zoznam nevymazal po refresh stranky zapisanie zoznamu do lacal storage
    localStorage.setItem("zoznam", JSON.stringify(zoznam));

    console.log(zoznam);
}
