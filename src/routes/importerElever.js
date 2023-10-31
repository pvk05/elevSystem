import { writable, get } from "svelte/store"; // importerer writable og get for å kunne bruke store-funksjoner
import elevFil from "./elever3.json"; // importerer fil med elever

let lestFil = JSON.parse(JSON.stringify(elevFil)); //leser inn fil med elever
let antallElever = lestFil.length; // finner antall elever i filen
let eleverPerKlasse = 10; // setter et maks antall elever i hver klasse
let antallKlasser = Math.ceil(antallElever / eleverPerKlasse); // finner ut hvor mange klasser man må ha

class Elev { // definerer klassen Elev
    constructor(navn, epost, telefon, valgfag1, valgfag2, valgfag3, norsk, hist) {
        this.navn = navn;
        this.epost = epost;
        this.telefon = telefon;
        this.valgfag1 = valgfag1;
        this.valgfag2 = valgfag2;
        this.valgfag3 = valgfag3;
        this.skoleKlasse;
        this.norsk = norsk;
        this.historie = hist
    }
    set sKlasse(x) { // setter for å legge inn navn på klassen etter objektet er lagd
        this.skoleKlasse = x;
    }
    get valgFag() { // getter for å hente ut valgfagene eleven har valgt
        return [this.valgfag1, this.valgfag2, this.valgfag3]
    }
}

class Klasse {
    constructor(klasseNavn) {
        this.klasseNavn = klasseNavn; // A,B,C etc
        this.elever = []; // array med elevene i klassen
    }
    get klNavn() { // getter for å hente ut navnet på klassen
        return this.klasseNavn
    }
    leggTilElev(elev) { // metode for å legge til elever i klassen
        this.elever.push(elev)
    }
}

class SkoleKlasse extends Klasse { // definerer SkoleKlasse class
    constructor(klasseNavn) {
        super(klasseNavn)
        //this.klasserom; // klasseromet til klassen
        //this.elever = []; // array med elevene i klassen
        this.antall = 10; // maks antall elever i en klasse
    }
    /*
    get klNavn() {
        return this.klasseNavn
    }
    leggTilElev(elev) {
        this.elever.push(elev)
    }*/
}

class FagKlasse extends Klasse { // definerer FagKlasse class
    constructor(fagNavn, rom, blokk) {
        super(fagNavn)
        this.klasserom = rom;
        //this.timer = [];
        this.blokk = blokk;
        //this.fagNavn = fagNavn; // Fagnavn (Fysikk, kjemi etc)
        //this.klasserom; // klasseromet til klassen
        //this.elever = []; // array med elevene i klassen
    }
    /*
    get klNavn() {
        return this.fagNavn
    }
    leggTilElev(elev) {
        this.elever.push(elev)
    }*/
    set rom(x) { // setter for å sette klasserommet til den klassen
        this.klasserom = x
    }
}



//STORES//
export let elever = writable([]);  // oppretter en store med array for alle elevene
export let klasseStore = writable([]);  // opretter en store med array for klassene
let skoleKlasser = get(klasseStore) // henter array av skoleKlasser fra store
export let fagKlasseStore = writable([]); // oppretter en store med array for fagklassene
let fagKlasser = get(fagKlasseStore) // henter array av fagklasser fra store

let klasseNavn = "A"; // første klassenavn




for (let i = 0; i < antallKlasser; i++) {
    skoleKlasser[i] = new SkoleKlasse(klasseNavn); // oppretter en ny klasse med et klassenavn og legger det i klasser arrayet

    fagKlasser.push(new FagKlasse("Norsk - " + klasseNavn, fagKlasser.length+101, 4)) // oppretter Norskklassene
    fagKlasser.push(new FagKlasse("Historie - " + klasseNavn, fagKlasser.length+101, 5)) // oppretter Historieklassene

    klasseNavn = String.fromCharCode(klasseNavn.charCodeAt(0) + 1); // endrer klassenavn til neste bokstav
}




/*
elever.subscribe((value) => { // subscribe kjører hver gang et nytt elev-objekt blir lagt til i elever
    console.log(value[value.length - 1]); // eleven som sist ble lagt til

    let antallKlasser = get(klasser).length; // antall klasser som er opprettet til nå

    if (value.length % 10 == 1) { // hvis antall elever delt på 10 gir 1 i rest
        get(klasser)[antallKlasser] = new SkoleKlasse(klasseNavn); // oppretter en ny klasse med et klassenavn og legger det i klasser arrayet

        klasseNavn = String.fromCharCode(klasseNavn.charCodeAt(0) + 1); // endrer klassenavn til neste bokstav
    }

    klasser.update(gammel => [...gammel]);

    console.log(get(klasser)); //  arayet med klassene
})
*/

for (let i = 0; i < lestFil.length; i++) { // løkke til å lage objekter til hver elev i filen
    let current = lestFil[i] // linje med info om en elev
    
    let gjeldendeSKlasseIndex = Math.floor(i / 10); // finner indexen til det klassen eleven skal i
    let gjeldendeSKlasse = skoleKlasser[gjeldendeSKlasseIndex] // 

    let norskNavn = "Norsk - " + gjeldendeSKlasse.klNavn // setter sammen navnet av norskklassen
    let historieNavn = "Historie - " + gjeldendeSKlasse.klNavn // setter sammen navnet på historieklassen
    
    //ELEV//
    let elev = new Elev( // legger til ny elev med verdiene fra filen
        current.navn,
        current.epost,
        current.telefon,
        current.fag1,
        current.fag2,
        current.fag3,
        norskNavn,
        historieNavn
    )
        
    elever.update(oldElever => [...oldElever, elev]); // oppdaterer arrayet med ny elev
        
    // SKOLEKLASSE //
    elev.sKlasse = gjeldendeSKlasse.klNavn; // legger klasse til elevene 

    gjeldendeSKlasse.leggTilElev(elev); // legger eleven inn i skoleklasse objektet

    
    // FELLESFAG //
    let norskKlasse = fagKlasser.find(({ klasseNavn }) => klasseNavn === norskNavn) // finner objektet til den riktige norskklassen
    norskKlasse.leggTilElev(elev) // legger eleven til i riktig norskklasse
    let historieKlasse = fagKlasser.find(({ klasseNavn }) => klasseNavn === historieNavn)// finner objektet til den riktige historieklassen
    historieKlasse.leggTilElev(elev) // legger eleven til i riktig historieklasse


    //VALGFAG//
    let valgFag = elev.valgFag // henter array med elevens valgfag
    for (const [index, fag] of valgFag.entries()) {
        let nyttFag = fagKlasser.find(({ klasseNavn }) => klasseNavn === fag)
        if( nyttFag == undefined ) {
            nyttFag = new FagKlasse(fag, fagKlasser.length+101, index+1)
            fagKlasser.push(nyttFag);
        } 
        nyttFag.leggTilElev(elev)

    }

}
for ( let i = 0; i < skoleKlasser.length; i++) { // løkke som kjører for hver skoleklasse
    skoleKlasser[i].elever.sort((a,b) => (a.navn > b.navn) ? 1 : ((b.navn > a.navn) ? -1 : 0)) // sorterer elevene i klassen
}
for ( let i = 0; i < fagKlasser.length; i++) { // løkke som kjører for hver fagklasse
    fagKlasser[i].elever.sort((a,b) => (a.navn > b.navn) ? 1 : ((b.navn > a.navn) ? -1 : 0)) // sorterer elevene i klassen
}

console.log(skoleKlasser); //  arayet med skoleklassene (A,B,C)
console.log(get(elever)); // arrayet med elevene
console.log(fagKlasser) // array med fagklassene (fysikk, kjemi, it2, ...)