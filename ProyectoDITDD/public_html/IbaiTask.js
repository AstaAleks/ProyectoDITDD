/* global i */

"use scrict";

let menu;
let titol;
const llistat = [];
let TitolModif;
let missatge = " ";
let modificarTasca;
let eliminarTasca;
let i = 0;
let taskEncontrada=0;

alert("¡Hola buenas! Bienvenido a ibaiTask, la mejor aplicación para organizarse.\n\
En esta aplicación, podrás organizarte con las siguientes opciones.\n\n\
 A continuación, verás las opciones que tienes: \n\n\
· Añadir Task\n\
· Ver la lista de Tasks\n\
· Modificar la Task\n\
· Eliminar Task\n\
· Salir de la aplicación");

menu = prompt("¿Qué opción eliges? \n\n\
· Añadir Task (01)\n\
· Ver la lista de Tasks (02)\n\
· Modificar la Task (03)\n\
· Eliminar Task (04)\n\
· Salir de la aplicación (05)\n\
\n\
Tienes que elegir una de estas opciones,\n\
para hacerlo, escribe el número asignado de cada una.");



while (menu != "05") {

    switch (menu) {
        case "01":
            titol = prompt("Como quieres llamar a esta nueva tarea?");
            llistat[i] = titol;
            i++;
            break;
        case "02":
            missatge=" "; //para que esté vacio
            for (let k = 0; k < llistat.length; k++) {
                if (llistat[k] != undefined) {//Para q no salga algo que borramos (huecos)
                    missatge = missatge + " -  " + llistat[k] + "\n";
                }
            }

            if (missatge == "") {
                alert("La lista está vacía");
            } else {
                alert("Aquí tens la llista de tasques:\n\n" + missatge);
            }

            break;
        case "03":
            modificarTasca = prompt("Introduce el título de la tarea que quieres modificar");
            for (let j = 0; j < llistat.length && taskEncontrada == 0; j++) {
                if (modificarTasca == llistat[j]) {
                    titol = prompt("Como quieres llamar ahora a esta tarea?");
                    llistat[j] = titol;
                    taskEncontrada = 1;
                }
            }

            if (taskEncontrada == 0) {
                alert("No se ha encontrado ninguna tarea con este título");
            }

            break;
        case "04":
            eliminarTasca = prompt("Introduce el título de la tarea que quieres eliminar");
            taskEncontrada = 0;//para reiniciar la variable antes de buscar

            for (let j = 0; j < llistat.length && taskEncontrada == 0; j++) {
                if (eliminarTasca == llistat[j]) {
                    delete llistat[j];
                    taskEncontrada = 1;
                }
            }

            if (taskEncontrada == 1) {
                alert("Task eliminada correctamente");
            } else {
                alert("No se ha encontrado ninguna tarea con este título");
            }
            break;
    }

    menu = prompt("¿Qué opción eliges? \n\n\
    · Añadir Task (01)\n\
    · Ver la lista de Tasks (02)\n\
    · Modificar la Task (03)\n\
    · Eliminar Task (04)\n\
    · Salir de la aplicación (05)\n\
    \n\
    Tienes que elegir una de estas opciones,\n\
    para hacerlo, escribe el número asignado de cada uno.");
                    
taskEncontrada = 0;

}

if (menu == "05") {
    alert("Hasta la próxima, máster");
}





