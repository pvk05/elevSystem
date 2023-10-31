import { c as create_ssr_component, b as get_store_value, v as validate_component, d as each, f as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { f as fagKlasseStore, N as Nav } from "../../../chunks/nav.js";
import { l as lagListe } from "../../../chunks/list.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fagKlasser = get_store_value(fagKlasseStore);
  let valgt = 0;
  let overskrifter = Object.getOwnPropertyNames(fagKlasser[valgt].elever[0]);
  return `<h1 class="h1 text-center p-5" data-svelte-h="svelte-1wmvszg">Faglister</h1> ${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} <br> <label for="velgFag" class="p-4 text-center text-lg">Velg fag for å se liste over elever. 
    <select name="velgFag" id="velgFag" class="bg-secondary-50-900-token border-secondary-900-50-token border-x border-y rounded-md p-1">${each(fagKlasser, (fag) => {
    return `<option${add_attribute("value", fagKlasser.indexOf(fag), 0)}>${escape(fag.klasseNavn)}</option>`;
  })}</select></label> <table class="table table-hover table-auto w-2/3 m-auto bg-surface-200-700-token"><!-- HTML_TAG_START -->${lagListe(fagKlasser[valgt], overskrifter, false)}<!-- HTML_TAG_END --></table> `;
});
export {
  Page as default
};
