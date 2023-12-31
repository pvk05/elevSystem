
export function lagListe(gjeldendeKlasse, overskrifter, fag) {
    //lager header delen av tabellen
    let header = `
    <tr>
        <th class=" p-2">${capitalize(overskrifter[0])}</th>
        <th class=" p-2">${capitalize(overskrifter[1])}</th>
        <th class=" p-2">${capitalize(overskrifter[2])}</th>`
    
    if(fag) {
    header +=    `<th class=" p-2">${capitalize(overskrifter[3])}</th>
        <th class=" p-2">${capitalize(overskrifter[4])}</th>
        <th class=" p-2">${capitalize(overskrifter[5])}</th>`
    }

    header +=    `<th class=" p-2">Klasse</th>
    </tr>`

    let innhold = ""; // innholdet i tabellen
    for(let i=0;i<gjeldendeKlasse.elever.length;i++) { // legger til hver elev i innholdet
        innhold +=  `<tr>
            <td class="text-center" onclick="js:copyText()">${gjeldendeKlasse.elever[i].navn}</td>
            <td class="text-center">${gjeldendeKlasse.elever[i].epost}</td>
            <td class="text-center">${gjeldendeKlasse.elever[i].telefon}</td>`

        if(fag) {
            innhold += `<td class="text-center">${gjeldendeKlasse.elever[i].valgfag1}</td>
                <td class="text-center">${gjeldendeKlasse.elever[i].valgfag2}</td>
                <td class="text-center">${gjeldendeKlasse.elever[i].valgfag3}</td>`
        }

        innhold += `<td class="text-center">ST${gjeldendeKlasse.elever[i].skoleKlasse}</td>
        </tr>`
    }

    let liste = header + innhold // setter det sammen til en tabell

    return liste
}


function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1) // gjør den første bokstaven av ordet stort
}
