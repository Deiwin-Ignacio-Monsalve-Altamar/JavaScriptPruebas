const fs = require('fs');

const out = fs.createWriteStream('./out.log');
const err = fs.createWriteStream('./err.log');

const constFIle = new console.Console(out, err);

setInterval(() => {
    
    constFIle.log(new Date())
    constFIle.error(new Error("Ooops"))

}, 2000);