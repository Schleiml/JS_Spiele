let ZahlR = Math.floor(Math.random() * 10) + 1;
console.log(ZahlR);

function Input_saver() {
    let Inhalt = document.getElementById("Input").value;
    if (Inhalt > ZahlR) {
        document.getElementById("Punkte").innerHTML = "Zu Groß!"
    }
    else if (Inhalt < ZahlR) {
        document.getElementById("Punkte").innerHTML = "Zu Klein!"
    }
    else if (Inhalt == ZahlR) {
        document.getElementById("Punkte").innerHTML = "Richtig!"
    }
    else {
        document.getElementById("Punkte").innerHTML = "Error!"
    }
}