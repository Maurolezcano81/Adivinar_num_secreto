const generarNumAleatorio = () => { 
    return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroAleatorio, numeroAdivinado) =>{
    if(Number(numeroAdivinado) === Number(numeroAleatorio)){
        console.log("Adivinaste!");
    } else if (numeroAdivinado > numeroAleatorio){
        console.log("Estas cerca, el numero es menor");
    } else{
        console.log("Estas cerca, el numero es mas grande");
    }
};

module.exports = {
    generarNumAleatorio,
    verificarAdivinanza
};