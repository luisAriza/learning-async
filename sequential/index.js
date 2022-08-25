const { taskOne, taskTwo } = require("./tasks");

async function main() {
  try {
    console.time("Measuring time");
    const first = await taskOne();
    const second = await taskTwo();
    console.timeEnd("Measuring time");

    console.log("Return first task:", first);
    // throw new Error("Main task problem");
    console.log("Return second task:", second);
  } catch (e) {
    console.log(e);
  }
}

main();

// Ejecuta en la terminal: node sequential/index.js
