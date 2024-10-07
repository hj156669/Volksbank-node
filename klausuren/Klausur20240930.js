console.log("Klausur 20240930")
// 
// Bearbeiten Sie alle Aufgaben nach Vorgabe. 
// Deklarieren Sie stets Objekte mit Eigenschaften und sprechenden Namen und geben Sie einen Antwortsatz auf der Konsole aus.


console.log("Aufgabe 1")
// 1a) 
// Es soll das Volumen eines Würfels in Quadratzentimeter (cm3) ausgegeben werden. Arbeiten Sie mit einem Objekt und sprechenden Eigenschaften.
// Geben Sie das Volumen in einem Antwortsatz auf der Konsole aus.

let a = 5;
console.log('Volumen: ' + (a * a * a));

// Das ist der Bauplan, aus dem im folgenden die Würfel-Objekte 
// erzeugt werden sollen. Ohne diese Klassendefiniton (=Bauplan)
// können keine Objekte instanziiert werden.

class Wuerfel{
    constructor(){
        this.Volumen
        this.Kantenlaenge
    }

    // Die Funktion BerechneVolumen soll das Volumen berechnen
    BerechneVolumen(){
        this.Volumen = this.Kantenlaenge * this.Kantenlaenge * this.Kantenlaenge
    }
}

// Deklaration (=Bekanntmachung), Instanziierung (= Speicherzellen reservieren)
let wuerfel = new Wuerfel();

// Initialisierung
wuerfel.Kantenlaenge = 6;

// Berechnung
wuerfel.Volumen = wuerfel.Kantenlaenge * wuerfel.Kantenlaenge * wuerfel.Kantenlaenge;

console.log("Das Volumen bei einer Kantenlänge von " + wuerfel.Kantenlaenge + " beträgt: " + wuerfel.Kantenlaenge + ".")

// NEU: Man kann die Berechnung auch zu einer Funktion innerhalb der Klasse abbilden.
// Dazu muss in die Klasse unterhalb des Constructors die Funktion BerechneVolumen() eingebaut werden.
// Alternative Berechnung mit der Funktion BerechneVolumen():

wuerfel.Kantenlaenge = 8;
wuerfel.BerechneVolumen();
console.log("Das Volumen bei einer Kantenlänge von " + wuerfel.Kantenlaenge + " beträgt: " + wuerfel.Kantenlaenge + ".")

// 1b 
// Wenn das Volumen 1000 oder mehr Quadratzentimeter beträgt soll eine Meldung auf der Konsole ausgegeben werden, die besagt,
// dass das Volumen 1000 oder mehr Quadratzentimeter beträgt.

if(wuerfel.Volumen >= 1000){
    console.log("Das Volumen beträgt 1000 oder mehr Quadratzentimeter.");
}

// 1c) - Nur Klausurschreiber
// Nutzen Sie die Math-Bibliothek .sqrt(), um die Wurzel aus dem Volumen zu errechnen. Geben Sie die Kantenlänge in einem Antwortsatz aus.

// Um die 3. Wurzel zu ziehen, kann die Funktion Math.pow verwendet werden.
wuerfel.Kantenlaenge = (Math.pow(wuerfel.Volumen,1/3))

console.log("Die Kantenlänge beträgt: " + wuerfel.Kantenlänge)


console.log("Aufgabe 2")
// Sie werden beauftragt ein Schulverwaltungsprogramm für das BKB zu erstellen. Konkret sollen Sie sich in einem ersten Schritt
// die Zeugnisse vornehmen. Deklarieren, Instanziieren und Initialisieren Sie ein Zeugnisobjekt, 
// in dem Sie neben "Deutsch", "Mathe" und "Englisch" 5 weitere, geeignete Eigenschaften deklarieren. 

// 2a)
// Definieren Sie die class

class Zeugnis{
    constructor(){
        this.Deutsch
        this.Mathe
        this.Englisch
        this.Vorname
        this.Fehlstunden
        this.Bemerkung
        this.Klasse
        this.Adresse
        this.Nachname
    }
}


// 2b)
// Deklarieren, Instanziieren und Initialisieren Sie ein Objekt von der Zeignisklasse.

let zeugnis = new Zeugnis();
zeugnis.Mathe = 1;
zeugnis.Deutsch = 2;
zeugnis.Englisch = 3;
zeugnis.Adresse = "Josefstraße 10, 46325 Borken";
zeugnis.Klasse = "GW23A";



// 2c)
// Geben Sie die Eigenschaftswerte Ihres Objekts auf der Konsole aus.

console.log("Mathe: " + zeugnis.Mathe);
console.log("Deutsch: " + zeugnis.Deutsch);
console.log("Englisch: " * zeugnis.Englisch);
console.log("usw.: ");

// 2d) NUR KLAUSURSCHREIBER
// Berechnen Sie die Durchnittsnote Ihres Objekts. Geben Sie die Durchschnittsnote auf der Konsole aus.




// 2e) NUR KLAUSURSCHREIBER
// Lisa hat die Durchsnittsnote 3, Tom hat die Durschnittsnote 4, Max hat die Durschnittsnote 5
// Vergleichen Sie Ihre Zeugnis-Objekt-Durchschnittsnote aus 2d) mit den Zeugnisdurchschnittsnoten von Lisa, Tom und Max.
// Wenn Ihre Zeugnis-Objekt-Durschnittsnote besser ist als die der anderen, dann soll das auf der Konsole entsprechend
// ausgegeben werden. Wenn die Note schlechter ist als die aller anderen, soll das ebenfalls ausgegeben werden.
// Ergänzen Sie die Eigenschaft "Klassenbeste" in Ihrem Zeugnisobjekt. 
// Setzen Sie die Eigenschaft entsprechend der Zeugnisnote auf true oder false
// Es hilft Ihnen dabei die Funktion Math.min() aus der Math-Bibliothek.
// Beispiel der Anwendung von Math.min():
// let x = Math.min(5, 10); --> Es werden 5 und 10 verglichen. x nimmt jetzt den Wert 5 an, da 5 der niedrigste der kommaseparierten Werte ist.






console.log("Aufgabe 3")
// Es gilt:
// Rabatt = Listenpreis · Rabatt-Prozentsatz : 100 %
// Netto-Rechnungsbetrag = Listenpreis – Rabatt
// MwSt = Netto-Rechnungsbetrag · MwSt-Prozentsatz : 100 %
// Brutto-Rechnungsbetrag = Netto-Rechnungsbetrag + MwSt
// Skonto = Brutto-Rechnungsbetrag · Skonto-Prozentsatz : 100 %
// Zahlungsbetrag = Brutto-Rechnungsbetrag – Skonto

// Der Netto-Rechnungsbetrag liegt bei 370,00 EUR.
// Die Mehrwertsteuer hängt von der Produktart ab: 
// * Lebensmittel, Zeitung und Buch: 7%
// * alles andere: 19%
// Dieses Produkt hat die Produktart "Zeitung"

// 3a)
// Deklarieren, Instanziieren Sie ein Objekt mit allen genannten Eigenschaften. 

class Rechnungsbetrag{
    constructor(){
        this.netto-Rechnungsbetrag
        this.Mwst Lebensmittel, Zeitung, Buch
        this.Mwst alles andere
    }
}


// 3b
// Initialisieren Sie Ihr Objekt mit den gegebenen Werten. 
// Geben Sie die einen Anwortsatz auf der Konsole aus.

let Rechnungsbetrag = new Rechnungsbetrag{
    let.netto-Rechnungsbetrag = 370
    let.Mwst Lebensmittel, Zeitung, Buch = 7%
    let.Mwst alles andere = 19%
}

console.log("netto-Rechnungsbetrag:" + 'let.netto-Rechnungsbetrag' , "Lebensmittel, Zeitung, Buch:" + 'let.Lebensmittel, Zeitung, Buch' , "alles andere" + 'let.alles andere')

// 3c)
// Berechnen Sie die MwSt in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.

let Mwst = 7%

console.log("Mwst:" (370*7/100))
console.log('Das Ergebnis der Mwst:(370*7/100)')


// 3d)
// Berechnen Sie den Eigenschaftswert des Brutto-Rechnungsbetrags. 
// Wenn die Produktart sich ändert, muss Ihre Berechnung sich anpassen.
// Geben Sie den Wert in einen Anwortsatz auf der Konsole aus.

console.log("Brutto-Rechnungsbetrag:" (370+7%))
console.log('Das Ergebnis des Netto-Rechnungsbetrags:(370+7%)')



// 3e) NUR KLAUSURSCHREIBER
// Das Skonto ist gestaffelt abhängig vom Brutto-Rechnungsbetrags.
// Brutto-Rechnungsbetrag kleiner als   |     Skonto
//                                  100 | 1
//                                  200 | 1,1
//                                  300 | 1,4
//                                  400 | 1,5
//                                  500 | 1,6
//                                  500 | 1,7
//                                  500 | 1,8
//                                  500 | 1,9
//                                  500 | 2

// Berechnen Sie das Skonto und geben Sie das Ergebnis auf der Konsole aus.

console.log("Aufgabe 4") // NUR KLAUSURSCHREIBER

// Sie wollen Ihre Auto-Kaufentscheidung mit einem Programm stützen.

// 4a) // NUR KLAUSURSCHREIBER
// Erstellen Sie zwei Auto-Objekte mit den Eigenschaften Name, Leistung, Geschwindigkeit, Preis, Verbrauch
// Initialisieren Sie mit realsitischen Werten.




// 4b) // NUR KLAUSURSCHREIBER
// Vergleichen Sie die beiden Autos:
// Wenn eines der Autos in Preis und Verbrauch besser ist, dann soll es das Auto werden.
// Wenn Preis und Verbrauch gleich sind, dann entscheidet die Geschwindigkeit.
// Wenn auch die Geschwindigkeit gleich ist, entscheidet die Leistung.
// Geben Sie entsprechende Antworten auf der Kosnole aus.