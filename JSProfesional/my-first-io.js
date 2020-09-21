const fs = require('fs');
const name = process.argv[2];

let data = fs.readFileSync(name, {flag:'r'});
let new_data = data.toString()
console.log(new_data.split('\n').length - 1);