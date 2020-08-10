var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "T.V", costo: 1500 },
    { nombre: "Libro", costo: 350 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 }
];

//METODO FILTER()
/** Devuelve todos los elementos del array que cumplan con la condición dada.*/
var articulosFiltrados = articulos.filter(function(articulo) {
    return articulos.costo <= 500
});

articulosFiltrados;

//METODO MAP
/**crea un nuevo array con los resultados de la llamada
 * a la función indicada aplicados a cada uno de sus elementos*/

nombreArticulo = articulos.map(function(articulo) {
    return articulo.nombre;
});

//METODO FIND
/**Devuelve el primer elemento del array que cumpla con la condición dada*/
var encuentraArticulo = articulos.find(function(articulo) {
    return articulo.nombre === 'Laptop';
});

var encuentraArticulo;

//METODO FOREACH
/*Ejecuta lo que le definamos una vez por cada elemento de nuestro array*/
articulos.forEach(function(articulo) {
    console.log(articulo.nombre);
});

//SOME
/** Comprueba si al menos un elemento del array cumple con la condición que le damos*/
var articuloBaratos = articulos.some(function(articulo) {
    return articulo.costo <= 700;
});

var articuloBaratos;

/**¿Cual es la diferencia entre find y filter ?

filter retorna todas las coincidencias y find retorna solo la primer coincidencia */