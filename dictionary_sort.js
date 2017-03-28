const readline = require('readline');
// your code here to initialize the program and take user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Your input: "
});

// const word = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   prompt: "New Word: "
// });

function Dictionary () {
  this._word_vault = [];

  // methods
  this.add_words = function(new_word) {
    this._word_vault.push(new_word);
  };

  this.sort = function() {
    return this._word_vault.sort();
  }
}

var dict = new Dictionary();

rl.prompt();

rl.on('line', (input) => {
  // console.log('User input: ' + input);
  if(input == "add"){
    rl.setPrompt("New words: ");
    rl.prompt();
    dict.add_words(input);

  } else if (input == "sort") {
    console.log(dict.sort());
  }

  rl.setPrompt("Your input: ");
  rl.prompt();
});

//
// dict.add_words('word');
// console.log(dict._word_vault);
// dict.add_words('alfa');
// dict.add_words('beta');
// console.log(dict.sort());
//

module.exports = Dictionary
