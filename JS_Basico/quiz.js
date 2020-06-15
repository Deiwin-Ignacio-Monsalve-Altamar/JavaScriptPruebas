/* Conocimiento con else if*/
/*var edad = 18;

if(edad === 18){
    console.log("Pudes votar, serea tu 1ra votacion");
} else if (edad > 18){
    console.log("Puedes votar de nuevo");
} else{
    console.log("Aun no puedes votar")
}
*/
/*OPerador Ternario */
//conditin ? true : false;

/**Exercise Plan Piedra o Tijera */
var value = prompt("Bienvenido a tu juego preferido escoje:\n"
    "1 = Piedra\n"
    "2 = Tijera\n"
    "3 = Papel\n"
    "Elige: ");
if (value === 1) {
    console.log("Escogistes Piedra");
} else if (value === 2) {
    console.log("Escogistes Tijera");
} else if (value === 3) {
    console.log("Escogistes Papel");
} else {
    console.log("Valor Invalido, Intente Nuevamente");
}

function juego(value) {
    var value_pc = Math.round(Math.random() * 3);
    if (value_pc === 1) {
        console.log("La Pc escogio Piedra");
    } else if (value === 2) {
        console.log("La Pc escogio Tijera");
    } else {
        console.log("La Pc escogio Papel");
    }

    if (value === value_pc) {
        console.log("Han Empatado");
    } else if ((value === 1 && value_pc === 2) || (value === 2 && value_pc === 3) || (value === 3 && value_pc === 1)) {
        console.log("!Has ganado¡ (:");
    } else {
        console.log("!Has perdido¡ ):");
    }
}