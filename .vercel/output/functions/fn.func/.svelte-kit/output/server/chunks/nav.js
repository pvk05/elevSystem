import { w as writable, r as readable } from "./index.js";
import { b as get_store_value, c as create_ssr_component, a as subscribe, e as escape, f as add_attribute, v as validate_component } from "./ssr.js";
const elevFil = [
  {
    navn: "Ola Nordmann",
    epost: "ola.nordmann@gmail.com",
    telefon: 12345678,
    fag1: "R2",
    fag2: "IT2",
    fag3: "Fysikk 2"
  },
  {
    navn: "Kari Hansen",
    epost: "kari.hansen@gmail.com",
    telefon: 23456789,
    fag1: "Rettslære",
    fag2: "Økonomi",
    fag3: "Psykologi"
  },
  {
    navn: "Per Olsen",
    epost: "per.olsen@gmail.com",
    telefon: 34567890,
    fag1: "S2",
    fag2: "Kjemi",
    fag3: "Sosiologi"
  },
  {
    navn: "Mette Pedersen",
    epost: "mette.pedersen@gmail.com",
    telefon: 45678901,
    fag1: "R2",
    fag2: "IT2",
    fag3: "Fysikk 2"
  },
  {
    navn: "Anders Johansen",
    epost: "anders.johansen@gmail.com",
    telefon: 56789012,
    fag1: "Rettslære",
    fag2: "Økonomi",
    fag3: "Psykologi"
  },
  {
    navn: "Ingrid Svendsen",
    epost: "ingrid.svendsen@gmail.com",
    telefon: 67890123,
    fag1: "S2",
    fag2: "Kjemi",
    fag3: "Sosiologi"
  },
  {
    navn: "Erik Kristiansen",
    epost: "erik.kristiansen@gmail.com",
    telefon: 78901234,
    fag1: "R2",
    fag2: "IT2",
    fag3: "Fysikk 2"
  },
  {
    navn: "Ida Eriksen",
    epost: "ida.eriksen@gmail.com",
    telefon: 89012345,
    fag1: "Rettslære",
    fag2: "Økonomi",
    fag3: "Psykologi"
  },
  {
    navn: "Tomas Hagen",
    epost: "tomas.hagen@gmail.com",
    telefon: 90123456,
    fag1: "S2",
    fag2: "Kjemi",
    fag3: "Sosiologi"
  },
  {
    navn: "Lise Nygård",
    epost: "lise.nygard@gmail.com",
    telefon: 12345678,
    fag1: "R2",
    fag2: "IT2",
    fag3: "Fysikk 2"
  },
  {
    navn: "Geir Madsen",
    epost: "geir.madsen@gmail.com",
    telefon: 23456789,
    fag1: "Rettslære",
    fag2: "Økonomi",
    fag3: "Psykologi"
  },
  {
    navn: "Hanne Hansen",
    epost: "hanne.hansen@gmail.com",
    telefon: 34567890,
    fag1: "S2",
    fag2: "Kjemi",
    fag3: "Sosiologi"
  },
  {
    navn: "Ole André Pedersen",
    epost: "ole.andre.pedersen@gmail.com",
    telefon: 45678901,
    fag1: "R2",
    fag2: "IT2",
    fag3: "Fysikk 2"
  },
  {
    navn: "Hilde Larsen",
    epost: "hilde.larsen@gmail.com",
    telefon: 56789012,
    fag1: "Rettslære",
    fag2: "Økonomi",
    fag3: "Psykologi"
  },
  {
    navn: "Anders Olsen",
    epost: "anders.olsen@gmail.com",
    telefon: 67890123,
    fag1: "S2",
    fag2: "Kjemi",
    fag3: "Sosiologi"
  },
  {
    navn: "Marte Bjørnson",
    epost: "marte.bjornson@gmail.com",
    telefon: 78901234,
    fag1: "R2",
    fag2: "IT2",
    fag3: "Fysikk 2"
  },
  {
    navn: "Knut Nilsen",
    epost: "knut.nilsen@gmail.com",
    telefon: 89012345,
    fag1: "Rettslære",
    fag2: "Økonomi",
    fag3: "Psykologi"
  },
  {
    navn: "Sara Andersen",
    epost: "sara.andersen@gmail.com",
    telefon: 90123456,
    fag1: "S2",
    fag2: "Kjemi",
    fag3: "Sosiologi"
  },
  {
    navn: "Petter Kristoffersen",
    epost: "petter.kristoffersen@gmail.com",
    telefon: 12345678,
    fag1: "R2",
    fag2: "IT2",
    fag3: "Fysikk 2"
  },
  {
    navn: "Line Iversen",
    epost: "line.iversen@gmail.com",
    telefon: 23456789,
    fag1: "Rettslære",
    fag2: "Økonomi",
    fag3: "Psykologi"
  },
  {
    navn: "Bjørn Eide",
    epost: "bjorn.eide@gmail.com",
    telefon: 34567890,
    fag1: "S2",
    fag2: "Kjemi",
    fag3: "Sosiologi"
  },
  {
    navn: "Tone Christensen",
    epost: "tone.christensen@gmail.com",
    telefon: 45678901,
    fag1: "R2",
    fag2: "IT2",
    fag3: "Fysikk 2"
  },
  {
    navn: "Andreas Thomassen",
    epost: "andreas.thomassen@gmail.com",
    telefon: 56789012,
    fag1: "Rettslære",
    fag2: "Økonomi",
    fag3: "Psykologi"
  },
  {
    navn: "Kirsten Johnsen",
    epost: "kirsten.johnsen@gmail.com",
    telefon: 67890123,
    fag1: "S2",
    fag2: "Kjemi",
    fag3: "Sosiologi"
  },
  {
    navn: "Marius Solberg",
    epost: "marius.solberg@gmail.com",
    telefon: 78901234,
    fag1: "R2",
    fag2: "IT2",
    fag3: "Fysikk 2"
  },
  {
    navn: "Elin Andersen",
    epost: "elin.andersen@gmail.com",
    telefon: 89012345,
    fag1: "Rettslære",
    fag2: "Økonomi",
    fag3: "Psykologi"
  },
  {
    navn: "Martin Sørensen",
    epost: "martin.sorensen@gmail.com",
    telefon: 90123456,
    fag1: "S2",
    fag2: "Kjemi",
    fag3: "Sosiologi"
  },
  {
    navn: "Emma Bjørklund Helleren",
    epost: "emmahelle@gmail.com",
    telefon: 12345678,
    fag1: "R2",
    fag2: "IT2",
    fag3: "Fysikk 2"
  },
  {
    navn: "Philip Knudsen",
    epost: "philip.knudsen@gmail.com",
    telefon: 12345678,
    fag1: "R2",
    fag2: "IT2",
    fag3: "Fysikk 2"
  },
  {
    navn: "Kathrine Øyno",
    epost: "kathrine.oyno@gmail.com",
    telefon: 36844795,
    fag1: "S2",
    fag2: "Kjemi",
    fag3: "Sosiologi"
  }
];
let lestFil = JSON.parse(JSON.stringify(elevFil));
let antallElever = lestFil.length;
let eleverPerKlasse = 10;
let antallKlasser = Math.ceil(antallElever / eleverPerKlasse);
class Elev {
  // definerer klassen Elev
  constructor(navn, epost, telefon, valgfag1, valgfag2, valgfag3, norsk, hist) {
    this.navn = navn;
    this.epost = epost;
    this.telefon = telefon;
    this.valgfag1 = valgfag1;
    this.valgfag2 = valgfag2;
    this.valgfag3 = valgfag3;
    this.skoleKlasse;
    this.norsk = norsk;
    this.historie = hist;
  }
  set sKlasse(x) {
    this.skoleKlasse = x;
  }
  get valgFag() {
    return [this.valgfag1, this.valgfag2, this.valgfag3];
  }
}
class Klasse {
  constructor(klasseNavn2) {
    this.klasseNavn = klasseNavn2;
    this.elever = [];
  }
  get klNavn() {
    return this.klasseNavn;
  }
  leggTilElev(elev) {
    this.elever.push(elev);
  }
}
class SkoleKlasse extends Klasse {
  // definerer SkoleKlasse class
  constructor(klasseNavn2) {
    super(klasseNavn2);
    this.antall = 10;
  }
  /*
  get klNavn() {
      return this.klasseNavn
  }
  leggTilElev(elev) {
      this.elever.push(elev)
  }*/
}
class FagKlasse extends Klasse {
  // definerer FagKlasse class
  constructor(fagNavn, rom, blokk) {
    super(fagNavn);
    this.klasserom = rom;
    this.blokk = blokk;
  }
  /*
  get klNavn() {
      return this.fagNavn
  }
  leggTilElev(elev) {
      this.elever.push(elev)
  }*/
  set rom(x) {
    this.klasserom = x;
  }
}
let elever = writable([]);
let klasseStore = writable([]);
let skoleKlasser = get_store_value(klasseStore);
let fagKlasseStore = writable([]);
let fagKlasser = get_store_value(fagKlasseStore);
let klasseNavn = "A";
for (let i = 0; i < antallKlasser; i++) {
  skoleKlasser[i] = new SkoleKlasse(klasseNavn);
  fagKlasser.push(new FagKlasse("Norsk - " + klasseNavn, fagKlasser.length + 101, 4));
  fagKlasser.push(new FagKlasse("Historie - " + klasseNavn, fagKlasser.length + 101, 5));
  klasseNavn = String.fromCharCode(klasseNavn.charCodeAt(0) + 1);
}
for (let i = 0; i < lestFil.length; i++) {
  let current = lestFil[i];
  let gjeldendeSKlasseIndex = Math.floor(i / 10);
  let gjeldendeSKlasse = skoleKlasser[gjeldendeSKlasseIndex];
  let norskNavn = "Norsk - " + gjeldendeSKlasse.klNavn;
  let historieNavn = "Historie - " + gjeldendeSKlasse.klNavn;
  let elev = new Elev(
    // legger til ny elev med verdiene fra filen
    current.navn,
    current.epost,
    current.telefon,
    current.fag1,
    current.fag2,
    current.fag3,
    norskNavn,
    historieNavn
  );
  elever.update((oldElever) => [...oldElever, elev]);
  elev.sKlasse = gjeldendeSKlasse.klNavn;
  gjeldendeSKlasse.leggTilElev(elev);
  let norskKlasse = fagKlasser.find(({ klasseNavn: klasseNavn2 }) => klasseNavn2 === norskNavn);
  norskKlasse.leggTilElev(elev);
  let historieKlasse = fagKlasser.find(({ klasseNavn: klasseNavn2 }) => klasseNavn2 === historieNavn);
  historieKlasse.leggTilElev(elev);
  let valgFag = elev.valgFag;
  for (const [index, fag] of valgFag.entries()) {
    let nyttFag = fagKlasser.find(({ klasseNavn: klasseNavn2 }) => klasseNavn2 === fag);
    if (nyttFag == void 0) {
      nyttFag = new FagKlasse(fag, fagKlasser.length + 101, index + 1);
      fagKlasser.push(nyttFag);
    }
    nyttFag.leggTilElev(elev);
  }
}
for (let i = 0; i < skoleKlasser.length; i++) {
  skoleKlasser[i].elever.sort((a, b) => a.navn > b.navn ? 1 : b.navn > a.navn ? -1 : 0);
}
for (let i = 0; i < fagKlasser.length; i++) {
  fagKlasser[i].elever.sort((a, b) => a.navn > b.navn ? 1 : b.navn > a.navn ? -1 : 0);
}
console.log(skoleKlasser);
console.log(get_store_value(elever));
console.log(fagKlasser);
const stores = {};
function localStorageStore(key, initialValue, options) {
  options?.serializer ?? JSON;
  options?.storage ?? "local";
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
    });
    const { subscribe: subscribe2, set } = store;
    stores[key] = {
      set(value) {
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        set(value);
      },
      subscribe: subscribe2
    };
  }
  return stores[key];
}
localStorageStore("modeOsPrefers", false);
localStorageStore("modeUserPrefers", void 0);
const modeCurrent = localStorageStore("modeCurrent", false);
function setInitialClassState() {
  const elemHtmlClasses = document.documentElement.classList;
  const condLocalStorageUserPrefs = localStorage.getItem("modeUserPrefers") === "false";
  const condLocalStorageUserPrefsExists = !("modeUserPrefers" in localStorage);
  const condMatchMedia = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (condLocalStorageUserPrefs || condLocalStorageUserPrefsExists && condMatchMedia) {
    elemHtmlClasses.add("dark");
  } else {
    elemHtmlClasses.remove("dark");
  }
}
function prefersReducedMotion() {
  return false;
}
readable(prefersReducedMotion(), (set) => {
});
const ProgressBar_svelte_svelte_type_style_lang = "";
const cTrack = "cursor-pointer";
const cThumb = "aspect-square scale-[0.8] flex justify-center items-center";
const cIcon = "w-[70%] aspect-square";
const LightSwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let trackBg;
  let thumbBg;
  let thumbPosition;
  let iconFill;
  let classesTrack;
  let classesThumb;
  let classesIcon;
  let $modeCurrent, $$unsubscribe_modeCurrent;
  $$unsubscribe_modeCurrent = subscribe(modeCurrent, (value) => $modeCurrent = value);
  let { title = "Toggle light or dark mode." } = $$props;
  let { bgLight = "bg-surface-50" } = $$props;
  let { bgDark = "bg-surface-900" } = $$props;
  let { fillLight = "fill-surface-50" } = $$props;
  let { fillDark = "fill-surface-900" } = $$props;
  let { width = "w-12" } = $$props;
  let { height = "h-6" } = $$props;
  let { ring = "ring-[1px] ring-surface-500/30" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  const cTransition = `transition-all duration-[200ms]`;
  const svgPath = {
    sun: "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",
    moon: "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
  };
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.bgLight === void 0 && $$bindings.bgLight && bgLight !== void 0)
    $$bindings.bgLight(bgLight);
  if ($$props.bgDark === void 0 && $$bindings.bgDark && bgDark !== void 0)
    $$bindings.bgDark(bgDark);
  if ($$props.fillLight === void 0 && $$bindings.fillLight && fillLight !== void 0)
    $$bindings.fillLight(fillLight);
  if ($$props.fillDark === void 0 && $$bindings.fillDark && fillDark !== void 0)
    $$bindings.fillDark(fillDark);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.ring === void 0 && $$bindings.ring && ring !== void 0)
    $$bindings.ring(ring);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  trackBg = $modeCurrent === true ? bgLight : bgDark;
  thumbBg = $modeCurrent === true ? bgDark : bgLight;
  thumbPosition = $modeCurrent === true ? "translate-x-[100%]" : "";
  iconFill = $modeCurrent === true ? fillLight : fillDark;
  classesTrack = `${cTrack} ${cTransition} ${width} ${height} ${ring} ${rounded} ${trackBg} ${$$props.class ?? ""}`;
  classesThumb = `${cThumb} ${cTransition} ${height} ${rounded} ${thumbBg} ${thumbPosition}`;
  classesIcon = `${cIcon} ${iconFill}`;
  $$unsubscribe_modeCurrent();
  return `${$$result.head += `<!-- HEAD_svelte-gewkj4_START --><!-- HTML_TAG_START -->${`<script nonce="%sveltekit.nonce%">(${setInitialClassState.toString()})();<\/script>`}<!-- HTML_TAG_END --><!-- HEAD_svelte-gewkj4_END -->`, ""} <div class="${"lightswitch-track " + escape(classesTrack, true)}" role="switch" aria-label="Light Switch"${add_attribute("aria-checked", $modeCurrent, 0)}${add_attribute("title", title, 0)} tabindex="0"> <div class="${"lightswitch-thumb " + escape(classesThumb, true)}"> <svg class="${"lightswitch-icon " + escape(classesIcon, true)}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path${add_attribute("d", $modeCurrent ? svgPath.sun : svgPath.moon, 0)}></path></svg></div></div>`;
});
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="block space-x-4 h-min w-fit pl-5 m-auto"><ul class="flex"><li class="text-token hover:bg-surface-300-600-token rounded-md px-3 py-2 text-md font-medium w-min" data-svelte-h="svelte-19vrfy"><a href="./">Home</a></li> <li class="text-token hover:bg-surface-300-600-token rounded-md px-3 py-2 text-md font-medium w-min" data-svelte-h="svelte-1sa4jrx"><a href="./elever">Elever</a></li> <li class="text-token hover:bg-surface-300-600-token rounded-md px-3 py-2 text-md font-medium w-min" data-svelte-h="svelte-obc4jt"><a href="./klasselister">Klasselister</a></li> <li class="text-token hover:bg-surface-300-600-token rounded-md px-3 py-2 text-md font-medium w-min" data-svelte-h="svelte-1l9z6uz"><a href="./faglister">Faglister</a></li> <li class="text-token hover:bg-surface-300-600-token rounded-md px-3 py-2 text-md font-medium w-fit" data-svelte-h="svelte-1yswxjp"><a href="./finnElev">Timeplan</a></li> <li class="">${validate_component(LightSwitch, "LightSwitch").$$render($$result, {}, {}, {})}</li></ul> </div>`;
});
export {
  Nav as N,
  fagKlasseStore as f,
  klasseStore as k
};
