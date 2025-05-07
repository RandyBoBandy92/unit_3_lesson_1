const _ = require("lodash");
const prompt = require("prompt-sync")();

const randomNumber = _.random(1, 100);

console.log("Hello World");
console.log(`Random Number: ${randomNumber}`);

const name = prompt("What is your name?");
console.log(`Hi ${name}!`);
