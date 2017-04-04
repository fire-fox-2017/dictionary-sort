const readline = require('readline');
// your code here to initialize the program and take user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

rl.on('line', (line) => {
  let inputSentence = line;
  dictionary(inputSentence);
  rl.prompt();
});

console.log('Type a word:');
let sentenceArray = [], tempChar = [];

function dictionary(inputSentence) {
  if (inputSentence.length > 0) {
    sentenceArray.push(inputSentence);
    console.log('Type a word (or press enter to finish):');
    rl.prompt();
  } else {
    console.log('Congratulation! Your dictionary has '+sentenceArray.length+' words:');
    tempDict = dictionarySort(sentenceArray);
    for (let i = 0; i < sentenceArray.length; i++) {
      console.log('> '+sentenceArray[i]);
    }
    process.exit(0);
  }
}

function dictionarySort(sentenceArray){
  let temp;
  for (let i = 0; i < sentenceArray.length-1; i++) {
    for (let j = i+1; j < sentenceArray.length; j++) {
      if (sentenceArray[i].toLowerCase() > sentenceArray[j].toLowerCase()) {
        temp = sentenceArray[i];
        sentenceArray[i] = sentenceArray[j];
        sentenceArray[j] = temp;
      }
    }
  }
  return temp;
}

module.exports = dictionary
