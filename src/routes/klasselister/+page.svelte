<script>
    import Nav from "../nav.svelte";
    import { lagListe } from "../list.js";
    import { klasseStore } from "../importerElever.js";
    import { get } from "svelte/store";

    let skoleKlasser = get(klasseStore);

    let valgt = 0;

    let overskrifter = Object.getOwnPropertyNames(skoleKlasser[valgt].elever[0]);
</script>

<h1 class="h1 p-5 text-center w-full">Klasselister</h1>

<Nav />

<br>

<label for="velgKlasse" class=" p-4 text-center text-lg">
    Velg klasse:
    <select
        name="velgKlasse"
        id="velgKlasse"
        class=" bg-secondary-50-900-token border-secondary-900-50-token border-x border-y rounded-md p-1"
        bind:value={valgt}
    >
        {#each skoleKlasser as klasse}
            <option value={skoleKlasser.indexOf(klasse)}
                >{klasse.klasseNavn}</option
            >
        {/each}
    </select>
</label>

<table class=" table table-hover table-auto w-2/3 m-auto bg-surface-200-700-token">
    {@html lagListe(get(klasseStore)[valgt], overskrifter, false)}
</table>

