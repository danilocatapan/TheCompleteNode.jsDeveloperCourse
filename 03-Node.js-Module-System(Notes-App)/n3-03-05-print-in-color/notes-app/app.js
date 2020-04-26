const chalk = require("chalk");
const getNotes = require("./notes");

const msg = getNotes();
console.log(msg);

const greenMsg = chalk.bold.inverse.green(msg);
console.log(greenMsg);
