function $(t,c,h){let s=`
    <tr>
        <th class=" p-2">${l(c[0])}</th>
        <th class=" p-2">${l(c[1])}</th>
        <th class=" p-2">${l(c[2])}</th>`;h&&(s+=`<th class=" p-2">${l(c[3])}</th>
        <th class=" p-2">${l(c[4])}</th>
        <th class=" p-2">${l(c[5])}</th>`),s+=`<th class=" p-2">Klasse</th>
    </tr>`;let a="";for(let e=0;e<t.elever.length;e++)a+=`<tr>
            <td class="text-center" onclick="js:copyText()">${t.elever[e].navn}</td>
            <td class="text-center">${t.elever[e].epost}</td>
            <td class="text-center">${t.elever[e].telefon}</td>`,h&&(a+=`<td class="text-center">${t.elever[e].valgfag1}</td>
                <td class="text-center">${t.elever[e].valgfag2}</td>
                <td class="text-center">${t.elever[e].valgfag3}</td>`),a+=`<td class="text-center">ST${t.elever[e].skoleKlasse}</td>
        </tr>`;return s+a}function l(t){return t.charAt(0).toUpperCase()+t.slice(1)}export{$ as l};
