const Readline = require('readline-sync');
const {generarNumAleatorio, verificarAdivinanza} = require('./adivinanza');

const consultarNumero = () =>{
    return Readline.question("Ingrese un numero: ");
}

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumAleatorio();
    let numeroAdivinado = 0;

    console.log("Bienvenido a las adivinanzas \n");
    console.log("El juego consiste en adivinar el numero del 1 al 100");

    while (numeroAdivinado != numeroSecreto){
        numeroAdivinado = consultarNumero();
        verificarAdivinanza(numeroSecreto, numeroAdivinado)
    }
}

juegoAdivinanza();