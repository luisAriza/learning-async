const { taskOne, taskTwo } = require("./tasks");

async function main() {
  try {
    console.time("Measuring time");
    const results = await Promise.all([taskOne(), taskTwo()]);
    console.timeEnd("Measuring time");

    console.log("Return first task:", results[0]);
    // throw new Error("Main task problem");
    console.log("Return second task:", results[1]);
  } catch (e) {
    console.log(e);
  }
}

main();

// Ejecuta en la terminal: node sequential/index.js
