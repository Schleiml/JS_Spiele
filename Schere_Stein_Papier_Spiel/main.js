let Auswahl;

function Schere_isPressed() {
    Auswahl = "Schere";
    document.getElementById("Schere").style.backgroundColor = "green";
    console.log("Meine Auswahl: " + Auswahl);
}
function Stein_isPressed() {
    Auswahl = "Stein";
    document.getElementById("Stein").style.backgroundColor = "green";
    console.log("Meine Auswahl: " + Auswahl);
}
function Papier_isPressed() {
    Auswahl = "Papier";
    document.getElementById("Papier").style.backgroundColor = "green";
    console.log("Meine Auswahl: " + Auswahl);
}
function Choosing() {
    let PC_Auswahl = Math.floor(Math.random() * 3) + 1;
    if (PC_Auswahl == 1) {
        PC_Auswahl = "Schere";
    } else if (PC_Auswahl == 2) {
        PC_Auswahl = "Stein";
    } else if (PC_Auswahl == 3) {
        PC_Auswahl = "Papier";
    }
    console.log("Bot Auswahl: " + PC_Auswahl);
}