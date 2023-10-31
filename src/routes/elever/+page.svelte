<script>
    import { get } from "svelte/store";
    import { elever, klasseStore } from "../importerElever.js";
    import Nav from "../nav.svelte";
    import { lagListe } from "../list.js";

    let overskrifter = Object.getOwnPropertyNames(get(klasseStore)[0].elever[0]);
</script>

<h1 class="h1 p-5 text-center w-full">Elevregister</h1>

<Nav />
<br /><br />
<p class=" text-center pb-4 text-lg">Dette er alle elevene som har fått skoleplass for inneværende skoleår sortert på klasse:</p>
<table class=" table table-hover table-auto w-2/3 m-auto bg-surface-200-700-token">
    {#each get(klasseStore) as klasse}
        {@html lagListe(klasse, overskrifter, true)}
    {/each}
</table>


<!--
<div class="table-container">
    <table class=" table table-hover table-auto">
        <tr class="">
            <th class="">{properties[0]}</th>
            <th>{properties[1]}</th>
            <th>{properties[2].charAt(0).toUpperCase() + properties[2].slice(1)}</th>
            <th>Fag 1</th>
            <th>Fag 2</th>
            <th>Fag 3</th>
            <th>Skoleklasse</th>
        </tr>
        {#each get(elever) as elev}
            <tr class="">
                <td>{elev.navn}</td>
                <td>{elev.epost}</td>
                <td>{elev.telefon}</td>
                <td>{elev.valgfag1}</td>
                <td>{elev.valgfag2}</td>
                <td>{elev.valgfag3}</td>
                <td>{elev.skoleKlasse}</td>
            </tr>
        {/each}
    </table>
</div>
-->
<br /><br />
