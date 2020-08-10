/**Un objeto en programación es una representación
 * abstracta de un objeto en la vida real, sin embargo
 * también puede entenderse como un contenedor de datos.*/

/**Creando objeto */
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function() {
        console.log(`Àuto ${this.modelo} ${this.annio}`)
    }
};

/**Acceder a un objeto */
miAuto.marca;
miAuto.annio;

/**Acceder por funcion */
miAuto.detalleDelAuto();
/**Que es el this hace referencia al objeto global/ */


/**Como utilizar un funcion contructora */
/**Creando objeto */
function auto(marca, modelo, annnio) {
    /**Tengo funcion que tiene propiedades ocupo la palabra
     * resevada para referencia a nuestra funcion constructora */
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annnio;
}
/*Instanciando objetos*/
var AutoNuevo = new auto("Tesla", "Model 3", 2020);

var AutoNuevo2 = new auto("Tesla", "Model x", 2018);