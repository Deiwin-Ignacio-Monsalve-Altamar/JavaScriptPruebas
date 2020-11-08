const asyncCallback = function(cb){
    setTimeout(()=>{
        if(Math.random() < 0.5){
            return cb(null, 'Hello-world')
        }else{
            cb(new Error('Hello error'));
        }
    }, 2000)
}

asyncCallback((err, msg) =>{
    if(err){
        console.log('Eror', err)
    }else{
        console.log('mesage', msg)
    }
});