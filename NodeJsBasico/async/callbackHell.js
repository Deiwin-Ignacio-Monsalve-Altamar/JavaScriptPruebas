function hola(nombre, micallback) {
    setTimeout(function(){
        console.log('Hola ' + nombre)
        micallback(nombre)
    }, 1500);
}

function hanlar(callbackHablar){
    setTimeout(function(){
        console.log('Blabla..');
        callbackHablar();
    }, 1000)
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios ' + nombre);
        otroCallback();
    },1000)
}

//---

function conversacion(nombre, veces, callback){
    if(veces > 0){
        hanlar(function (){
            conversacion(nombre, --veces, callback);
        })
    } else{
        adios(nombre, callback)
    }
}
console.log('iniciando proceso');
hola('dEIWIN', function(nombre){
    conversacion(nombre, 3, function(){
        console.log('Proceso Terminado')
    })
})

/* soyAsincronica('deiwin', function(nombre){
    hanlar(function(){
        hanlar(function(){
            hanlar(function(){
            
                adios(nombre, function(){
                    console.log('finalizando procesos')
            
                })

            })
        })
    })

}); */
