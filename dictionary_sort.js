"use strict"

const readline = require('readline');
// your code here to initialize the program and take user input

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

rl.on('line', (line) => {
  let tempInput = line;

  Dictionary(tempInput);
  rl.prompt();
});

console.log('Type a word:');
let tempArr = [], tempChar = [];

function Dictionary(wordArr) {
  // Your pig latin implementation here...
  let tempDict;
  let checkWord = /[a-z]/gi;
  if (wordArr.length > 0) {
    tempArr.push(wordArr);
    console.log('Type a word (or press enter to finish):');
    rl.prompt();
  } else {
    console.log('Congratulation! Your dictionary has '+tempArr.length+' words:');
    tempDict = dictionarySort(tempArr);
    for (let i = 0; i < tempDict.length; i++) {
      console.log('> '+tempDict[i]);
    }
    process.exit(0);
  }
}

function dictionarySort(arr){
  let temp;
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

module.exports = Dictionary
