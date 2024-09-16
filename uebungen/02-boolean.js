console.log("Booleans")
console.log("========")

console.log("Boolsche Werte (Booleans) sind Wahrheitswerte, die wahr (true) oder falsch (false) annehmen können.")

// Wahrheitswerte kennen wir bereits aus der Wenn-Funktion in Excel.

console.log("Aufgabe 01")

if(true){
    console.log("Der Ausdruck ist wahr.")
}else{
    console.log("Der Ausdruck ist unwahr / falsch / false")
}

// Weil in dieser Aufgabe die Prüfung immer wahr ist if(true),
// wird immer die Anweisung hinter if ausgeführt.
// Die Anweisung hinter else kommt niemals zur Ausfürung.

console.log("Aufgabe 02")

// In Erweiterung von Aufgabe 1 soll der Ausdruck dynamisch entweder true oder false sein.

let a = 5

// Hier wird mit einem Prüfoperator auf wahr oder falsch geprüft.

// Pfrüfoperatoren: 
// ==      : Prüfung auf Gleichheit im Wert  Bsp: if(1 == # '1') true
// ===     : Prüfung auf Gleichheit im Wert und im Typ  Bsp: if(1 == # '1') false
// >       : größer als
// <       : kleiner als
// >=      : größer oder gleich
// <=      : kleiner oder gleich

if(a > 6){
    console.log("Das ist wahr")
}else{
    console.log("Das ist falsch")
}

console.log("Aufgabe 3")

// Wenn die Schülerin 16 oder jünger ist, muss sie fahrradfahren
// wenn sie 17 ist, darf sie begleiet fahren
// Wenn sie 18 ist darf sie "fahren"
// Voraussetzung für das fahren mit dem Auto ist der Führerschein.

let alter = 16;
let fuehrerschein = true;

if(alter <= 16 || fuehrerschein === false){    // Wenn die Schülerin 16 ist oder keinen Führerschein hat oder beides, dann Fahrrad
    console.log("fahrradfahren")
}

if(alter === 17 && fuehrerschein === true){    // Wenn 17 UND Führerschein, dann begleitet fahren
    console.log("begleitet fahren")
}

if(alter > 17 && fuehrerschein === true){      // Wenn älter 17 UND Führerschein, dann fahren
    console.log("fahren")
}

// Andere Lösung 

if(fuehrerschein){     // fuehrerschein ist bereits true or false. Es bedarf keines Vergleichsoperators.

    if(alter === 17){
        console.log("begleitet fahren")
    }else{
        console.log("fahren")
    }
}else{
    console.log("fahrradfahren")
}

console.log('Aufgabe 4')
// Zahlen können in Javascript true oder false sein.

let zahl = 1

if(1){
    console.log("Die Zahl " + zahl +" nimmt den boolschen Wert true an")
}else{
    console.log("Die Zahl " + zahl +" nimmt den boolschen Wert false an")
}
 
// Positive Zahlen sind true.
// Die Ziffer 0 ist false.
// Negative Zahlen sind true.

console.log("Aufgabe 5")
// Auf einem Sparkonto soll bei einem positiven Kontostand auf der Console stehen: "Zinsen berechnen"
// Wenn kein Guthaben existiert: "Keine Zinsen"

let kontostand = 100

if(kontostand){  // auf den Prüfoperator kann verzichtet werden, da Zahlen bereits true oder false sind
    console.log("Zinsen berechnen für Kontostand " + kontostand)
}else{
    console.log("Keine Zinsen, da Kontostand 0")
}

console.log("Aufgabe 6")

// In der Bundesliga gibt es Punkte für Spiele
// Sieg:          3 Punkte
// Unentschieden  1 Punkt
// Niederlage:    o Puntke 

let spielausgang = "Sieg"
let mannschaft = "Preußen Münster"

if(spielausgang == "Sieg"){
console.log("Es gibt 3 Punkte")
}
if(spielausgang == "Unentschieden"){
    console.log("Es gibt 3 Punkte")
}
if(spielausgang == "Niederlage"){
    console.log("Es gibt 3 Punkte")
}