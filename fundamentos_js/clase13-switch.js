/*** Condicional múltiple: switch*/
/**Switch se utiliza para realizar diferentes acciones basadas en múltiples condiciones.
Break, sirve para que el browser se salte un bucle. */

/**Prompt, muestra un cuadro de mensaje que le pide al usuario que ingrese algúna información.*/
var mes = prompt('¿Cual es tu mes?');

switch (mes) {

    case 'Enero':
        console.log('Llego Enero');
        break;
    case 'Febrero':
        console.log('Llego febrero');
        break;
    case 'Marzo':
        console.log('Llego marzo')
        break;
    default:
        console('No existes');
        break;
}