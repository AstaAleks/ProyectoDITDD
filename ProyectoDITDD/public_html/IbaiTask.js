/* global i */

"use_scrict";

let menu;
let titol;
const llistat = [];
let TitolModif;
let missatge = " ";
let modificarTasca;
let eliminarTasca;
let i = 0;
let taskEncontrada = 0;

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

menu = prompt("Que opción eliges? \n\n\
· Añadir Task(01)\n\
· Ver la lista de Tasks(02)\n\
· Modificar la Task(03)\n\
· Eliminar Task(04)\n\
· Salir de la aplicación(05)\n\
\n\
Tienes que elegir una de estas opciones,\n\
 para elegir alguna, escribe el numero asignado de cada uno.");



while (menu != "05") {

    switch (menu) {
        case "01":
            titol = prompt("Como quieres llamar ahora a esta tarea?");
            llistat[i] = titol;
            i++;
            break;
        case "02":
            alert("Aqui tienes la lista de tareas:" + llistat + ".");
            break;
        case "03":
            modificarTasca = prompt("Introdueix el títol de la tasca que vols modificar");
            for (let j = 0; j < llistat.length && taskEncontrada == 0; j++) {
                if (modificarTasca == llistat[j]) {
                    titol = prompt("Como quieres llamar ahora a esta tarea?");
                    llistat[i] = titol;
                    taskEncontrada = 1;
                }
            }

            if (taskEncontrada == 0) {
                alert("No s'ha trobat cap tasca amb aquest titol");
            }

            break;
        case "04":
            alert("hola");
            break;
    }

    menu = prompt("Que opción eliges? \n\n\
    · Añadir Task(01)\n\
    · Ver la lista de Tasks(02)\n\
    · Modificar la Task(03)\n\
    · Eliminar Task(04)\n\
    · Salir de la aplicación(05)\n\
    \n\
    Tienes que elegir una de estas opciones,\n\
    para elegir alguna, escribe el numero asignado de cada uno.");

}

if (menu == "05") {
    alert("Fins la proxima, màster");
}





