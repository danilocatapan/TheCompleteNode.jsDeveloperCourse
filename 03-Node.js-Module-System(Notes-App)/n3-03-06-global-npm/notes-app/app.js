const chalk = require("chalk");
const getNotes = require("./notes");

const msg = getNotes();
console.log(msg);

const greenMsg = chalk.bold.inverse.red("texto 123 123 texto");
console.log(greenMsg);
