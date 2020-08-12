var deiwin = {
    nombre: 'Deiwin',
    apellido: 'Monsalve',
    edad: 23,
    ingeniero: false,
    cocinero: false,
    ciclista: true
}

function ImprimirProfesiones(personas) {
    console.log('${persona.nombre} es:')

    if (personas.ingeniero) {
        console.log('Ingeniero');
    } else {
        console.log('No es ingeniero');
    }

    if (personas.cocinero) {
        console.log('Cocinero')
    }

    if (personas.ciclista) {
        console.log('Ciclista');
    }
}
ImprimirProfesiones(deiwin);

function imprimirSiEsMayorDeEdad(persona) {
    /*     console.log(`${persona.nombre} es: `)

        if (persona.edad >= 18){
            console.log(`Mayor de edad con ${persona.edad} Años`);
        } else{
            console.log(`Menor de edad con ${persona.edad} Años`);
        } */

    if (esMayorDeEdad(18)) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.edad} es menor de edad`);
    }
}
/*No cambia de valor*/
const MAYORIA_DE_EDAD = 18




/**Funcion anonima que se le asigna a una variable */

const esMayorDeEdad = function(persona) {
    return persona.edad >= MAYORIA_DE_EDAD;
}

/**Arrow funtcion */
const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;
//variable guardar = parametro => condicion y lo retorna


/* function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD;
} */
imprimirSiEsMayorDeEdad(deiwin);


function permitirAcesso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log('Acesso denegado');
    }
}