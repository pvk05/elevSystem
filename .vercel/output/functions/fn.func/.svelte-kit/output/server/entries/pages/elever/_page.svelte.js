import { c as create_ssr_component, b as get_store_value, v as validate_component, d as each } from "../../../chunks/ssr.js";
import { k as klasseStore, N as Nav } from "../../../chunks/nav.js";
import { l as lagListe } from "../../../chunks/list.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let overskrifter = Object.getOwnPropertyNames(get_store_value(klasseStore)[0].elever[0]);
  return `<h1 class="h1 p-5 text-center w-full" data-svelte-h="svelte-1lbo4d7">Elevregister</h1> ${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} <br><br> <p class="text-center pb-4 text-lg" data-svelte-h="svelte-167yfsm">Dette er alle elevene som har fått skoleplass for inneværende skoleår sortert på klasse:</p> <table class="table table-hover table-auto w-2/3 m-auto bg-surface-200-700-token">${each(get_store_value(klasseStore), (klasse) => {
    return `<!-- HTML_TAG_START -->${lagListe(klasse, overskrifter, true)}<!-- HTML_TAG_END -->`;
  })}</table>  <br><br>`;
});
export {
  Page as default
};
