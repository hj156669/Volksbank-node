/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');

// Constants
// Die Anweisungen werden von oben nach unten abgearbeitet. Der Wert 3000 wird von rechts nach links
// zugewiesen an die Konstante namens PORT. Das einfache Gleichheitszeichen lässt sich also übersetzen 
// mit "...wird zugewiesen an..."
const PORT = 3000;
// der Wert '0,0,0,0' wird zugewiesen an eine Konstante namens HOST
const HOST = '0.0.0.0';

// App

const app = express();

// Es wird der App bekanntgegeben, wo die Styles zu finden sind.
app.use(express.static('public'))



app.get('/', (req, res) => {

	// res ist die Amtwort des Servers an den Browser.
	// send() ist die Anweisung etwas an den Browser zu senden
	// 'Hello world...' ist der Wert, der an die Anweisung send() übergeben wird
	//res.send('Hello remote world!\n');

	// Das res-Objekt kann noch mehr als nur eine Zeichenkette an den
	// Browser zu senden. Das res-Objekt kann mit der Funktion render() 
	// eine HTML-Datei an den Browser senden. 
	res.render('index.ejs',{});
});

// Wenn im Browser die Adresse .../agb aufgerufen wird, wird der Server aufgefordert, 
// die angefragte Seite an den Browser zurückzugeben.
// Der Server arbeitet dazu die Funktion app.get('agb)... ab.
app.get('agb', (req, res) => {

	// Der Server gibt die gerenderte EJS-Seite an den 
	// Browser zurück.
    res.render('agb.ejs',{});
});

// Mit listen wird der Server angewiesen, auf den angegebenen Host und
// Port zu lauschen. 
app.listen(PORT, HOST);

// mit der Anweisung console.log() wird dem Server Administrator auf der 
// Konsole angezeigt, was der Server macht. Der Programmierer schreibt dazu 
// in die runden Klammern den Ausdruck, der auf der Konsole angezeigt
// werden soll.  Die Werte der beiden Konstanten HOST und PORT werden in den
// Ausdruck übergeben. Ein Verb mit anschließenden runden Klammern steht 
// immer für eine Anweisung etwas zu tun.
console.log(`Running on http://${HOST}:${PORT}`);

// Mit der Funktion require wird die Datei in den runden Klammern eingelesen.
//require('./uebungen/03-objekte.js');
//require('./klausuren/klausur20240930.js');
//require('./uebungen/04-funktionen.js');