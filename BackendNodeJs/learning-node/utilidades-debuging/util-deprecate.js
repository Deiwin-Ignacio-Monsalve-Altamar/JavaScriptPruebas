const util = require('util');

const helloPluto = util.deprecate(()=> {
    console.log('Hello pluto')
}, 'pluto is deprecate. it is not planer anymore')

helloPluto();