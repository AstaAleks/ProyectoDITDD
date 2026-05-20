/* global i */

"use_scrict";


alert("¡Hola Buenas! Bienvenido a ibaiTask, la mejor aplicación para organizarse.\n\
En esta aplicación, podràs organizarte con las siguientes opciones.\n\n\
 A continuacion, veras las opciones que tienes: \n\n\
· Añadir Task(01)\n\
· Ver la lista de Tasks(02)\n\
· Modiuficar la Task(03)\n\
· Eliminar Task(04)\n\
· Salir de la aplicación(05)\n\
\n\
Tienes que elegir una de estas opciones,\n\
 para elegir alguna, escribe el numero asignado de cada uno");
let menu=prompt("Que opcion eliges? \n\n\
· Añadir Task(01)\n\
· Ver la lista de Tasks(02)\n\
· Modificar la Task(03)\n\
· Eliminar Task(04)\n\
· Salir de la aplicación(05)\n\
\n\
Tienes que elegir una de estas opciones,\n\
 para elegir alguna, escribe el numero asignado de cada uno.");

let accio;
let titol;
let hora;
const llistat=[ ];
let TascaModif;
let missatge=" ";
let accion;
let afegirTitol;
let afegirHora;
let veureLlista;
let modificarTasca;
let modificarTitol;
let modificarHora;
let eliminarTasca;
const tasques = [];

switch(menu){
    case "01":
            titol=prompt("Como quieres llamar esta tarea?");
            llistat[i]=titol;
    break;
case "02":
    "Aqui tienes la lista de tareas:"+llistat+".";
    break;
    
            
}

"use_strict";



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
        




