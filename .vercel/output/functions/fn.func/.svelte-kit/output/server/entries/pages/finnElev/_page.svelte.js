import { c as create_ssr_component, b as get_store_value, v as validate_component, d as each, e as escape, f as add_attribute } from "../../../chunks/ssr.js";
import { k as klasseStore, f as fagKlasseStore, N as Nav } from "../../../chunks/nav.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let valgtKlasse;
  let valgtElev;
  let elevListe;
  let elev;
  let skoleKlasser = get_store_value(klasseStore);
  let fagKlasser = get_store_value(fagKlasseStore);
  valgtKlasse = 0;
  valgtElev = 0;
  elevListe = skoleKlasser[valgtKlasse].elever;
  elev = elevListe[valgtElev];
  return `  <h1 class="h1 text-center p-5" data-svelte-h="svelte-1g0ctes">Finn elev</h1> ${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} <br><br> <div class="w-fit m-auto"><label for="klasseValg" class="p-4 text-center inline text-lg">Velg klasse: 
        <select name="klasseValg" id="klasseValg" class="bg-secondary-50-900-token border-secondary-900-50-token border-x border-y rounded-md p-1">${each(skoleKlasser, (klasse) => {
    return `<option${add_attribute("value", skoleKlasser.indexOf(klasse), 0)}>${escape(klasse.klasseNavn)}</option>`;
  })}</select></label> ${valgtKlasse != void 0 ? `<label for="elevValg" class="p-4 text-center inline text-lg">Velg elev: 
        <select name="elevValg" id="elevValg" class="bg-secondary-50-900-token border-secondary-900-50-token border-x border-y rounded-md p-1">${each(elevListe, (elev2) => {
    return `<option${add_attribute("value", elevListe.indexOf(elev2), 0)}>${escape(elev2.navn)}</option>`;
  })}</select></label>` : ``}</div> <br><br> <table class="table table-hover table-auto m-auto bg-surface-200-700-token w-fit"><tr class="border-b-2 rounded-t-lg" data-svelte-h="svelte-1qlwlrw"><t></t> <th class="p-3">Mandag</th> <th class="p-3">Tirsdag</th> <th class="p-3">Onsdag</th> <th class="p-3">Torsdag</th> <th class="p-3 px-6">Fredag</th></tr> <tr class="border-b-2"><td class="p-3 px-6" data-svelte-h="svelte-7bz7iw">1. time</td> <td class="p-3 px-6">${escape(elev.valgfag1)}<br>Rom: ${escape(fagKlasser.find(({ klasseNavn }) => klasseNavn == elev.valgfag1).klasserom)}</td> <td class="p-3 px-6">${escape(elev.norsk)}<br>Rom: ${escape(fagKlasser.find(({ klasseNavn }) => klasseNavn == elev.norsk).klasserom)}</td> <td class="p-3 px-6">${escape(elev.valgfag2)}<br>Rom: ${escape(fagKlasser.find(({ klasseNavn }) => klasseNavn == elev.valgfag2).klasserom)}</td> <td class="p-3 px-6">${escape(elev.valgfag3)}<br>Rom: ${escape(fagKlasser.find(({ klasseNavn }) => klasseNavn == elev.valgfag3).klasserom)}</td> <td class="p-3 px-6">${escape(elev.historie)}<br>Rom: ${escape(fagKlasser.find(({ klasseNavn }) => klasseNavn == elev.historie).klasserom)}</td></tr> <tr class="border-b-2" data-svelte-h="svelte-3fbxic"><td class="p-3 px-6">Lunsj</td> <td class="p-3 px-6">-----</td> <td class="p-3 px-6">-----</td> <td class="p-3 px-6">-----</td> <td class="p-3 px-6">-----</td> <td class="p-3 px-6">-----</td></tr> <tr><td class="p-3 px-6" data-svelte-h="svelte-1j977qh">2. time</td> <td class="p-3 px-6">${escape(elev.valgfag3)}<br>Rom: ${escape(fagKlasser.find(({ klasseNavn }) => klasseNavn == elev.valgfag3).klasserom)}</td> <td class="p-3 px-6">${escape(elev.valgfag1)}<br>Rom: ${escape(fagKlasser.find(({ klasseNavn }) => klasseNavn == elev.valgfag1).klasserom)}</td> <td class="p-3 px-6">${escape(elev.historie)}<br>Rom: ${escape(fagKlasser.find(({ klasseNavn }) => klasseNavn == elev.historie).klasserom)}</td> <td class="p-3 px-6">${escape(elev.valgfag2)}<br>Rom: ${escape(fagKlasser.find(({ klasseNavn }) => klasseNavn == elev.valgfag2).klasserom)}</td> <td class="p-3 px-6">${escape(elev.norsk)}<br>Rom: ${escape(fagKlasser.find(({ klasseNavn }) => klasseNavn == elev.norsk).klasserom)}</td></tr></table>`;
});
export {
  Page as default
};
