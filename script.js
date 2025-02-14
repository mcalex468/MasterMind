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
    masterColors()
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
    //master.appendChild(colorsMaster);
}


// Función para añadir un color a la combinación del usuario
function añadeColor(color) {
    if (userCombi.length < MAX_COMBI_COLORES) {
        userCombi.push(color);
        document.getElementById('combiText').value = userCombi.join(', ');

        // Pintar los colores en la fila correspondiente
        let filaActual = document.querySelectorAll('.rowResult')[intento];
        // Obtener la fila del intento actual
        let celdas = filaActual.querySelectorAll('.celUserCombi');
        // Seleccionar las 4 celdas

        celdas[userCombi.length - 1].style.backgroundColor = color;
        // Pintar celda con el color elegido
    } else {
        alert('Ya has seleccionado 4 colores.');
    }
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
    // Verificacion de colores elegidos por el usuario
    if (userCombi.length !== MAX_COMBI_COLORES) {
        alert('Selecciona 4 colores antes de comprobar.');
        return;
    }

    let filaActual = document.querySelectorAll('.rowResult')[intento];
    let resultadoCeldas = filaActual.querySelectorAll('.cercleResult');

    let aciertosExactos = 0;

    // Buscar coincidencias exactas (Negros)
    for (let i = 0; i < MAX_COMBI_COLORES; i++) {
        if (userCombi[i] === master[i]) {
            aciertosExactos++;
            resultadoCeldas[i].style.backgroundColor = BLACK;
        } 
        // Buscar coincidencias de color (Blancos)
        else if (master.includes(userCombi[i])) {
            resultadoCeldas[i].style.backgroundColor = WHITE;
        }
    }

    intento++; 

    // Verificar Resultado
    resultado(aciertosExactos);

    // Reiniciar la combinación
    userCombi.length = 0;
    document.getElementById('combiText').value = '';
}




function resultado(aciertosExactos) {
    if (aciertosExactos === MAX_COMBI_COLORES) {
        document.getElementById('info').textContent = `¡Felicidades! Has acertado la combinación en ${intento} intentos.`;
        mostrarMaster();
    } else if (intento >= MAX_INTENTOS) {
        document.getElementById('info').textContent = 'Has alcanzado el máximo de intentos. ¡Inténtalo de nuevo!';
        mostrarMaster();
    } else {
        document.getElementById('info').textContent = `Intento ${intento}: Sigue intentándolo, tu puedes.`;
    }
}


function mostrarMaster() {
    // Selector del master
    let masterCeldas = document.querySelectorAll('#master .cel');

    for (let i = 0; i < master.length; i++) {
        // Accedemos al master, para pintar con los colores aleatorios generados
        masterCeldas[i].style.backgroundColor = master[i];
    };
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
