const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Type a word: "
});
// your code here to initialize the program and take user input

let arr = [];
rl.prompt();

rl.on("line", input => {
  if (input == "") {
    let sorted = Dictionary(arr);
    console.log(`Congratulations! Your dictionary has ${sorted.length} words`);
    for (let i = 0; i < sorted.length; i++) {
      console.log(sorted[i]);
    }
    rl.close();
  } else {
    arr.push(input);
    rl.setPrompt("Type another word (or press enter to finish): ");
    rl.prompt();
  }
});

const Dictionary = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++){
      if (arr[j] < arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

module.exports = Dictionary
