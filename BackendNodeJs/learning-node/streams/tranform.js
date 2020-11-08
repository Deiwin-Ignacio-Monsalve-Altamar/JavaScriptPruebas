const { Transform } = require('stream');

const TransformString = new Transform({
    transform(chunk, encondig, callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

process.stdin.pipe(TransformString).pipe(process.stdout)