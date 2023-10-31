<script>
    import { elever } from "./importerElever.js";
    import { get } from "svelte/store";
    import Nav from "./nav.svelte";
</script>

<h1 class="h1 p-5 text-center w-full">Videregående skole</h1>

<Nav />

<br /><br />
<div class="w-2/3 bg-surface-200-700-token rounded-xl m-auto p-5">
    <h2 class="h2">Velkommen til Videregående skole.</h2>
    <br />
    <p>Dette er et program for registrering av elever.</p>
    <p>
        Elevene blir delt i klasser og fag og får tildelt klasserom og timeplan.
    </p>
    <p>
        Under elever kan du se en komplett liste over alle skolens elever,
        hvilke fag de har valgt og hvilken klasse de går i.
    </p>
    <p>
        Under klasselister kan du velge en klasse for å få kontaktinfo for alle
        elevene.
    </p>
    <p>Under faglister kan du velge et fag og se alle elevene i faget.</p>
    <p>
        Under timeplan kan du velge elev for å finne ut hvor denne eleven er til
        enhver tid.
    </p>
    <br /><br />
    <p>Eksamensoppgave av Philip V Knudsen. IT2 - høst 2023</p>
</div>
