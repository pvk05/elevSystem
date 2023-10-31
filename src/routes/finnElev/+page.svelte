<script>
    import { get } from "svelte/store";
    import { klasseStore, fagKlasseStore } from "../importerElever";
    import Nav from "../nav.svelte";

    let skoleKlasser = get(klasseStore);
    let fagKlasser = get(fagKlasseStore)

    $: valgtKlasse = 0;
    $: valgtElev = 0;

    $: elevListe = skoleKlasser[valgtKlasse].elever

    $: elev = elevListe[valgtElev]

</script>
<!--HTML for å velge klasse og elev-->
<!--alle option blir generert dynamisk-->

<h1 class="h1 text-center p-5">Finn elev</h1>

<Nav />
<br /><br />
<div class="w-fit m-auto">
    <label for="klasseValg" class=" p-4 text-center inline text-lg">
        Velg klasse: 
        <select
            name="klasseValg"
            id="klasseValg"
            class=" bg-secondary-50-900-token border-secondary-900-50-token border-x border-y rounded-md p-1"
            bind:value={valgtKlasse}
        >
            {#each skoleKlasser as klasse}
                <option value={skoleKlasser.indexOf(klasse)}
                    >{klasse.klasseNavn}</option
                >
            {/each}
        </select>
    </label>
    {#if valgtKlasse != undefined}
    <label for="elevValg" class=" p-4 text-center inline text-lg">
        Velg elev: 
        <select
            name="elevValg"
            id="elevValg"
            class=" bg-secondary-50-900-token border-secondary-900-50-token border-x border-y rounded-md p-1"
            bind:value={valgtElev}
        >
            {#each elevListe as elev}
                <option value={elevListe.indexOf(elev)}
                    >{elev.navn}</option
                >
            {/each}
        </select>
    </label>
    {/if}
</div>

<br><br>

<table class=" table table-hover table-auto m-auto bg-surface-200-700-token w-fit">
    <tr class="border-b-2 rounded-t-lg">
        <t></t>
        <th class="p-3">Mandag</th>
        <th class="p-3">Tirsdag</th>
        <th class="p-3">Onsdag</th>
        <th class="p-3">Torsdag</th>
        <th class="p-3 px-6">Fredag</th>
    </tr>
    <tr class="border-b-2">
        <td class="p-3 px-6">1. time</td>
        <td class="p-3 px-6">{elev.valgfag1}<br>Rom: {(fagKlasser.find(({ klasseNavn }) => klasseNavn == elev.valgfag1)).klasserom}</td>
        <td class="p-3 px-6">{elev.norsk}<br>Rom: {(fagKlasser.find(({ klasseNavn }) => klasseNavn == elev.norsk)).klasserom}</td>
        <td class="p-3 px-6">{elev.valgfag2}<br>Rom: {(fagKlasser.find(({ klasseNavn }) => klasseNavn == elev.valgfag2)).klasserom}</td>
        <td class="p-3 px-6">{elev.valgfag3}<br>Rom: {(fagKlasser.find(({ klasseNavn }) => klasseNavn == elev.valgfag3)).klasserom}</td>
        <td class="p-3 px-6">{elev.historie}<br>Rom: {(fagKlasser.find(({ klasseNavn }) => klasseNavn == elev.historie)).klasserom}</td>
    </tr>
    <tr class="border-b-2">
        <td class="p-3 px-6">Lunsj</td>
        <td class="p-3 px-6">-----</td>
        <td class="p-3 px-6">-----</td>
        <td class="p-3 px-6">-----</td>
        <td class="p-3 px-6">-----</td>
        <td class="p-3 px-6">-----</td>
    </tr>
    <tr>
        <td class="p-3 px-6">2. time</td>
        <td class="p-3 px-6">{elev.valgfag3}<br>Rom: {(fagKlasser.find(({ klasseNavn }) => klasseNavn == elev.valgfag3)).klasserom}</td>
        <td class="p-3 px-6">{elev.valgfag1}<br>Rom: {(fagKlasser.find(({ klasseNavn }) => klasseNavn == elev.valgfag1)).klasserom}</td>
        <td class="p-3 px-6">{elev.historie}<br>Rom: {(fagKlasser.find(({ klasseNavn }) => klasseNavn == elev.historie)).klasserom}</td>
        <td class="p-3 px-6">{elev.valgfag2}<br>Rom: {(fagKlasser.find(({ klasseNavn }) => klasseNavn == elev.valgfag2)).klasserom}</td>
        <td class="p-3 px-6">{elev.norsk}<br>Rom: {(fagKlasser.find(({ klasseNavn }) => klasseNavn == elev.norsk)).klasserom}</td>
    </tr>
</table>