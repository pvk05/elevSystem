<script>
    import Nav from "../nav.svelte";
    import { get } from "svelte/store";
    import { fagKlasseStore } from "../importerElever";
    import { lagListe } from "../list";

    let fagKlasser = get(fagKlasseStore);
    let valgt = 0;
    let overskrifter = Object.getOwnPropertyNames(fagKlasser[valgt].elever[0]);

</script>

<h1 class="h1 text-center p-5">Faglister</h1>

<Nav />
<br>
<label for="velgFag" class="p-4 text-center text-lg"
    >Velg fag for å se liste over elever. 
    <select
        name="velgFag"
        id="velgFag"
        class=" bg-secondary-50-900-token border-secondary-900-50-token border-x border-y rounded-md p-1"
        bind:value={valgt}
    >
        {#each fagKlasser as fag}
            <option value={fagKlasser.indexOf(fag)}>{fag.klasseNavn}</option>
        {/each}
    </select>
</label>
<table class=" table table-hover table-auto w-2/3 m-auto bg-surface-200-700-token">
    {@html lagListe(fagKlasser[valgt], overskrifter, false)}
</table>


<!--
<div class="table-container">
    <table class="w-1/2 bg-surface-800">
        <tr>
            <th>Navn</th>
            <th>Mobil</th>
            <th>Epost</th>
            <th>Klasse</th>
        </tr>
        {#each fagKlasser[valgt].elever as elev}
            <tr>
                <td>{elev.navn}</td>
                <td>{elev.telefon}</td>
                <td>{elev.epost}</td>
                <td>{elev.skoleKlasse}</td>
            </tr>
        {/each}
    </table>
</div>
-->
