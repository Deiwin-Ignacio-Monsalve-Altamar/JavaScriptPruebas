function hello(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hello", name);
       resolve();
      /* reject("Error"); */
    }, 1500);
  });
}

function speaks(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("bla bla bla...");
      resolve(name);
    }, 1000);
  });
}

function bye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("bye", name);
      resolve();
    }, 1000);
  });
}

/** Execute */
console.log("Init process...");
hello("George")
  .then(speaks)
  .then(speaks)
  .then(speaks)
  .then(speaks)
  .then(bye)
  .then(() => console.log("End process"))
  .catch((error) => console.log("Error", error));