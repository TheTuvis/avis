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