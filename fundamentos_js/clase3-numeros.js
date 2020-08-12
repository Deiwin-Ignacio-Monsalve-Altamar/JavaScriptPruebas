var edad = 27

//Incremetar  o descrementarel valor de la variable
edad += 1; // edad = edad + 1

var peso = 75;

//peso = peso - 2;
peso -= 2;

//Sumando and restando numeros
var sandwinch = 1;
peso = peso + sandwinch;

var jugarAlFutbol = 3;
peso -= jugarAlFutbol;

//Multiplicando y quitando decimales
var precioDeVino = 200.3
    //Siendo mas preciso el numero
var total = Math.round(precioDeVino * 100 * 3) / 100
    //Mostrando mas ceros
var totalStr = total.toFixed(3);

//Tranformar de uns strign a decimal
var total2 = parseFloat(totalStr);

//Haciendo division
var pizza = 8,
    persona = 2;
var cantidadDePorcionesPorPersona = pizza / persona;