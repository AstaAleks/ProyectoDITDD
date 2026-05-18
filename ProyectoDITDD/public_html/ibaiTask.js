"use_strict";

let accion;
let afegirTitol;
let afegirHora;
let veureLlista;
let modificarTasca;
let modificarTitol;
let modificarHora;
let eliminarTasca;
const tasques = [];

accion = prompt("Que vols fer? Pots Afegir tasca, Veure llista de tasques, Modificar tasca, Eliminar Tasca i Sortir de l'aplicacio");

while (accion = !"Sortir de l'aplicacio") {
    accion = prompt("Que vols fer? Pots Afegir tasca, Veure llista de tasques, Modificar tasca, Eliminar Tasca i Sortir de l'aplicacio");
}

if (accion == "Afegir tasca") {
        afegirTitol=prompt("Digues el titol de la tasca que vols afegir:");
        afegirHora=prompt("Digues la data màxima de la tasca "+afegirTitol+":");
    } else if (accion == "Veure llista de tasques") {
        alert(veureLlista);
    } else if (accion == "Modificar tasca") {
        modificarTitol=prompt("Digues el titol de la tasca que vols ")
    } else if (accion == "Eliminar tasca") {
        alert(eliminarTasca);
    } else if (accion == "Sortir de l'aplicacio") {
        alert("Fins la proxima, màster!");
    }