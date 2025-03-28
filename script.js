/* Liten og stor oppsummeringsboks*/

const boksOppsummert = document.querySelector(".oppsummering")
const punkterEl = document.querySelector(".punkter")
const knappEl = document.querySelector(".visMer")
let x = 0
function storBoks() {
    if (x % 2 == 0) {
        punkterEl.style.display = "flex"
        boksOppsummert.style.height = "fit-content"
        knappEl.innerHTML = "Vis mindre"
        x++
    }
    else {
        punkterEl.style.display = "none"
        boksOppsummert.style.height = "160px"
        knappEl.innerHTML = "Vis mer"
        x++
    }

}


/* Dropdownmeny synes*/

function klikk() {
    const dropdownElm = document.querySelector(".dropdown-content2")
    if (dropdownElm.style.display == "flex") {
        dropdownElm.style.display = "none"
    } else {
        dropdownElm.style.display = "flex"
    }
}




/* Mørkmodus*/

const toggleEl = document.querySelector(".knappikon")
toggleEl.addEventListener("click", Mørkmodus)

const bodyEl = document.querySelector("body")
const navbarEl = document.querySelector(".navbar")
const articleEl = document.querySelectorAll("article")
const overskrifterEl = document.querySelectorAll("h3.artikkeltittel")

function Mørkmodus() {
    let ikon1 = document.querySelector(".ikonmørkmodus")
    if (ikon1.classList.contains("fa-toggle-off")) {
        ikon1.classList.remove("fa-toggle-off")
        ikon1.classList.add("fa-toggle-on")
    } else {
        ikon1.classList.remove("fa-toggle-on")
        ikon1.classList.add("fa-toggle-off")
    }
    bodyEl.classList.toggle("toggleSvart")
    navbarEl.classList.toggle("toggleBlå")
    for (let i = 0; i < articleEl.length; i++) {
        articleEl[i].classList.toggle("toggleArticle")
    }
    for (let i = 0; i < overskrifterEl.length; i++) {
        overskrifterEl[i].classList.toggle("toggleOverskrift")
    }

}


function sok() {
    const søkeord = document.getElementById("søkeord").value.trim().toLowerCase(); // trim() for å fjerne ekstra mellomrom
    const søkContent = document.getElementById("søkContent");
    søkContent.innerHTML = "";
    søkContent.style.display = "block";

    const links = {
        meta: ["meta mot ai", "meta-mot-AI.html"],
        ai: ["meta mot ai", "meta-mot-AI.html"],
        data: ["datadelig", "datadelingiNorge.html"],
        datadelig: ["datadelig", "datadelingiNorge.html"],
        personvern: ["datadelig", "datadelingiNorge.html"],
        digitalisering: ["datadelig", "datadelingiNorge.html"],
        kreft: ["lungekreft", "lungekreft.html"],
        lunge: ["lungekreft", "lungekreft.html"],
        lungekreft: ["lungekreft", "lungekreft.html"],
        sykdom: ["lungekreft", "lungekreft.html"],
        chatgpt: ["lungekreft", "chatgpt.html"],
        nrk: ["lungekreft", "chatgpt.html"],
        prpoganda: ["lungekreft", "chatgpt.html"],
        russland: ["lungekreft", "chatgpt.html"],
        chip: ["chip", "chip.html"],
        microsoft: ["chip", "chip.html"],
        kraft: ["kraftkrise", "kraftkrise.html"],
        krise: ["kraftkrise", "kraftkrise.html"],
        strøm: ["kraftkrise", "kraftkrise.html"],
        power: ["kraftkrise", "kraftkrise.html"],
        usa: ["droner mot sørgrensa", "droner-mot-sorgrensen.html"],
        droner: ["droner mot sørgrensa", "droner-mot-sorgrensen.html"],
        krig: ["droner mot sørgrensa", "droner-mot-sorgrensen.html"],
        trump: ["droner mot sørgrensa", "droner-mot-sorgrensen.html"],
    };

    // Hvis søkeordet finnes i links, vis resultatet
    if (links[søkeord]) {
        søkContent.innerHTML = `<a href="${links[søkeord][1]}">${links[søkeord][0]}</a>`;
    } else {
        søkContent.innerHTML = "<p>Ingen resultater funnet</p>";
    }

    // Skjul resultatene etter 5 sekunder
    setTimeout(function () {
        søkContent.style.display = "none";
    }, 5000);
}
