const fs = require('fs');
fs.mkdir("platzi/esxcula/node", { recursive: true}, err=>{
    if(err){
        return console.log(err);
    }
})