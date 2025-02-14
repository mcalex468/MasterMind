//Declaración de constantes.
const MAX_INTENTOS = 10;
const MAX_COMBI_COLORES = 4;
const COLORS = ['white', 'blue', 'green', 'violet', 'yellow', 'red', 'orange', 'cyan'];
const GREY = "grey";
const WHITE = "white";
const BLACK = "black";


//Declaración de variables globales.
const master = [];
const userCombi = [];
var intento = 0;
var aciertos = 0;

function init() {
    //1. Genera el código random del master
    //masterColors()
    //2. Crea todas las filas según el número de intentos.
    filasJuego()
}

/*Funcion colores del master*/
function masterColors() {
    let colorsMaster = document.getElementById('master');

    for (let i = 0; i < MAX_COMBI_COLORES; i++) {
        const i = Math.floor(Math.random() * COLORS.length);
        master.push(COLORS[i]);
    }
    return master;
    master.appendChild(colorsMaster);
}

console.log(masterColors());


/** Procedimiento que se ejecuta cada vez que el usuario selecciona un color, hasta el número máximo de colores permitidos en la combinación. */
function añadeColor(color) {
    do {
        let colorSelect = document.getElementById('combiText');  // Obtener el campo de texto
        colorSelect.value += color + " ,";  // Añadir el color al valor del campo de texto
        intento++
    } while (intento < 5)
    
}


function filasJuego() {
    // Obtener el contenedor donde se agregarán las filas de intentos
    let resultFilas = document.getElementById('Result');
    for (let i = 0; i < MAX_INTENTOS; i++) {
        // Crear una fila
        resultFilas.innerHTML += ROW_RESULT;
    }
}


/* Llamaremos a esta función desde el botón HTML de la página para comprobar la propuesta de combinación que nos ha
introducido el usuario.
Informamos al usuario del resultado y del número de intentos que lleva*/
function Comprobar() {
    // switch case
    // usar variables globales
}



/** Template con el código HTML que corresponde a cada fila de juego/intento. */
const ROW_RESULT = `<div class="rowResult w100 flex">
    <div class="rowUserCombi w75 flex">
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
    </div>
    <div class="rowCercleResult w25 flex">
       <div class="w50 h40">
            <div class="cercleResult flex"></div>
       </div>
       <div class="w50 h40">
           <div class="cercleResult flex"></div>
       </div>
       <div class="w50 h40">
           <div class="cercleResult flex"></div>
       </div>
       <div class="w50 h40">
           <div class="cercleResult flex"></div>
       </div>
    </div>
</div>`;
