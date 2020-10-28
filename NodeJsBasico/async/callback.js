function soyAsincronica(nombre, micallback) {
    setTimeout(function(){
        console.log('Hola ' + nombre)
        micallback()
    }, 1500);
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios ' + nombre);
        otroCallback();
    },1000)
}

console.log('iniciando proceso');
soyAsincronica('deiwin', function(){
    adios('Deiwin', function(){
        console.log('finalizando procesos')

    })

});
