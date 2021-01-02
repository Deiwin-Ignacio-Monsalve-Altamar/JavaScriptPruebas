let a = 'Hola';//Type infiere es cuando el lenguaje lo identifica dependiendo del contenido
a = 'Holas';
//a = 2 ---->  Error

let b: number = 10;
//b = a; ---> Error
b = 20;
b = 10 + 5;

const nume1 = 10;
const num2 = 20;
b = nume1 + 2;


function suma(num1: number, num2: number): number{
    return num1 + num2;
}

let anyValue: any = 10;
anyValue =  'Elteso';

suma(1, 2);
//suma(1, '2') --> Error
function sumaJavascriptVanilla(num1, num2){
    return num1 + num2;
}

//Tipo type
type dni = string; //Creando un alias
//let dninumber: dni = 2123 --->> Error

