const array = process.argv.slice(2);
let element = 0;

for (let index = 0; index < array.length; index++) {
    element = element + parseInt(array[index]);
}
console.log(element);