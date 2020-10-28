async function hello(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("hello", name);
         resolve();
        /* reject("Error"); */
      }, 1500);
    });
  }
  
async function speaks(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("bla bla bla...");
        resolve(name);
      }, 1000);
    });
  }
  
async function bye(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("bye", name);
        resolve();
      }, 1000);
    });
}

async function main(){
    let nombre = await hello('Deiwin');
    await speaks()
    await speaks()
    await speaks()
    await bye('Deiwin')
}

console.log('Empezamos')
main()