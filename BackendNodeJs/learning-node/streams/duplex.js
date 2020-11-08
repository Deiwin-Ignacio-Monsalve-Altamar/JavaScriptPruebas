const { read } = require('fs');
const { Duplex } = require('stream');

const duplexStream = new Duplex({
    write(chunk, enconding, callback){
        console.log(chunk.toString())
        callback();
    },

    read(){
        if(this.currentCharCode > 90){
            this.push(null);
            return;
        }

        this.push(String.fromCodePoint(this.currentCharCode++))
    }
})

duplexStream.currentCharCode = 65;

process.stdin.pipe(duplexStream).pipe(process.stdout)