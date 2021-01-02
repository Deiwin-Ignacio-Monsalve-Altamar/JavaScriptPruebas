//Aplicado en metodos
function log(target, key){
    console.log(key + 'se ha llamado');
}


class Person {
    private name: string;
    constructor(name: string){
        this.name = name;
    }
    @log
    sayMyName(){
        return this.name;
    }
}

const person :Person = new Person('alan');

person.sayMyName();//Alan //sayMyName se ha llamado

//Aplicando en Clases
function init(target){
    return class extends target{
        nombre = 'Alan';
        apellido = 'JOdio';

        sayMyName(){
            return `${this.nombre} ${this.apellido}`;
        }
    }
}

@init
class P{
    constructor(){}

    sayMyName(){}
}

const p = new P();
console.log(p.sayMyName()); //Alan Jodio

//Aplicando en propiedades

function logProperty(target, key){
    let _val = this[key];
    const getter = () =>{
        console.log(`Get: ${key} => ${_val}`);
        return _val;
    }

    const setter = (newValue) =>{
        console.log(`Get: ${key} => ${newValue}`);
        _val = newValue;
    }

    const objectProperty = {
        get: getter,
        set: setter
    }

    Object.defineProperty(target, key, objectProperty)
}
class Persona1 {
    //Implementando decorators
    @logProperty
    public name: string;

    constructor(name: string){
        this.name = name;
    }
}

const persona1 = new Persona1('ALan');
persona1.name = 'Platzi'; // `Set: name => platzi`

const nameFromClass = persona1.name;// `Get: name => platzi`

//Aplicando en propiedades

function logParameter(target, propertyName, index){
    const metadataKey = `log_${propertyName}_parameters`;
    if(Array.isArray(target[metadataKey])){
        target[metadataKey].push(index);
    } else{
        target[metadataKey] = [index]
    }
}

class Per {
    greet(@logParameter message: string): string {
        return message;
    }
}

const per = new Per();
per.greet('Hola')