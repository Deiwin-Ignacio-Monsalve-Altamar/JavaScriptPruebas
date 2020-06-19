/**Validacion de casos */
numero = prompot("Ingrese numero: ");
switch (numero) {
    case 1:
        console.log("Soy uno!");
        break;
    case 10:
        console.log("Soy un 10!");
        break;
    case 100:
        console.log("Soy 100!");
        break;
    default:
        console.log("No soy nada");
}

/*Exercise */

function juego(opcionjugador) {
    var value_pc = Math.round(Math.random() * 3);
    switch (opcionjugador) {
        case 1:
            if (value_pc === 2) {
                console.log("Has perdido");
            } else if (value_pc === 3) {
                console.log("Has ganado");
            } else {
                console.log("Has empatado");
            }
            break;
        case 2:
            if (value_pc === 3) {
                console.log("Has perdido");
            } else if (value_pc === 1) {
                console.log("Has ganado");
            } else {
                console.log("Has empatado");
            }
            break;
        case 3:
            if (value_pc === 1) {
                console.log("Has perdido");
            } else if (value_pc === 2) {
                console.log("Has ganado");
            } else {
                console.log("Has empatado");
            }
            break;
        default:
            console.log("Intenta nuevamente");
    }
}

/**Jugador maquina selecciona su arma */
var opcionjugador = parseInt(prompt("Ingrese su arma: 3-Piedra, 2-Tijera, 1-Papel: "));
juego(opcionjugador);