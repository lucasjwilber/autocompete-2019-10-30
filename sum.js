'use strict';


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


rl.on('line', function sum(string) {

  let array = string.split('');
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += +array[i];
  }
  console.log(sum);
  return sum;
});
