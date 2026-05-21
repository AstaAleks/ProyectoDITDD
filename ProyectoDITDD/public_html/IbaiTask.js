/* global i */

"use_scrict";

let menu;
let menu2;
let accio;
let titol;
let hora;
const llistat=[ ];
let TitolModif;
let missatge=" ";
let modificarHora;
let eliminarTasca;

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

menu=prompt("Que opción eliges? \n\n\
· Añadir Task(01)\n\
· Ver la lista de Tasks(02)\n\
· Modificar la Task(03)\n\
· Eliminar Task(04)\n\
· Salir de la aplicación(05)\n\
\n\
Tienes que elegir una de estas opciones,\n\
 para elegir alguna, escribe el numero asignado de cada uno.");



while (menu = !"05"){

    menu2=prompt("Que opción eliges? \n\n\
    · Añadir Task(01)\n\
    · Ver la lista de Tasks(02)\n\
    · Modificar la Task(03)\n\
    · Eliminar Task(04)\n\
    · Salir de la aplicación(05)\n\
    \n\
    Tienes que elegir una de estas opciones,\n\
    para elegir alguna, escribe el numero asignado de cada uno.");
    
   switch(menu){
    case "01":
            titol=prompt("Como quieres llamar esta tarea?");
            llistat[i]=titol;
    break;
case "02":
    "Aqui tienes la lista de tareas:"+llistat+".";
    break;
case "03":
    
    
            
} 
}


while (accion = !"05") {
    accion = prompt("Que vols fer? Pots Afegir tasca, Veure llista de tasques, Modificar tasca, Eliminar Tasca i Sortir de l'aplicacio");
}

if (accion == "01") {
        afegirTitol=prompt("Digues el titol de la tasca que vols afegir:");
        afegirHora=prompt("Digues la data màxima de la tasca "+afegirTitol+":");
    } else if (accion == "Modificar tasca") {
        modificarTitol=prompt("Digues el titol de la tasca que vols ")
    } else if (accion == "Eliminar tasca") {
        alert(eliminarTasca);
    } else if (accion == "Sortir de l'aplicacio") {
        alert("Fins la proxima, màster!");
    }
        




