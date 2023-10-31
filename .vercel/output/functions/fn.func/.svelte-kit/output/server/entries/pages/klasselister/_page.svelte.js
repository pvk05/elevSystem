import { c as create_ssr_component, b as get_store_value, v as validate_component, d as each, f as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { k as klasseStore, N as Nav } from "../../../chunks/nav.js";
import { l as lagListe } from "../../../chunks/list.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let skoleKlasser = get_store_value(klasseStore);
  let valgt = 0;
  let overskrifter = Object.getOwnPropertyNames(skoleKlasser[valgt].elever[0]);
  return `<h1 class="h1 p-5 text-center w-full" data-svelte-h="svelte-12154j8">Klasselister</h1> ${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} <br> <label for="velgKlasse" class="p-4 text-center text-lg">Velg klasse:
    <select name="velgKlasse" id="velgKlasse" class="bg-secondary-50-900-token border-secondary-900-50-token border-x border-y rounded-md p-1">${each(skoleKlasser, (klasse) => {
    return `<option${add_attribute("value", skoleKlasser.indexOf(klasse), 0)}>${escape(klasse.klasseNavn)}</option>`;
  })}</select></label> <table class="table table-hover table-auto w-2/3 m-auto bg-surface-200-700-token"><!-- HTML_TAG_START -->${lagListe(get_store_value(klasseStore)[valgt], overskrifter, false)}<!-- HTML_TAG_END --></table>`;
});
export {
  Page as default
};
