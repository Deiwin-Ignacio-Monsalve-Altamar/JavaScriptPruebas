// Operador de reposo puede extraer las propiedades de un objeto que aún no se ha construido. ...all

const obj = {
    name: 'Alejandro',
    nick: 'Alejandro-sin'
}

let { name, ...all } = obj;
console.log(name, all); // Si quito el argumento name, me trae todo menos el nombre.


// Utilizando propiedades de propagación se pueden añadir multiples objetos a otros objetos mediante ...nombre_objeto
const obj = {
    name: 'Alejandro',
    nick: 'Alejandro-sin'
}
const obj1 = {
    ...obj,
    alter: 'Etrx',
    alternick: 'n-etrx'
}
const obj2 = {
    ...obj1,
    loveone: 'Anny',
    nickloveone: 'Animadversion'
}

console.log(obj2);

//Promise.finally podemos saber cuando ha terminado el llamado para realizar una lógica.

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        resolve('helloWorld'): reject(newError('Test Error'))
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo'))

//MANEJAR REGEX ES MUY UTIL PARA FECHAS
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)