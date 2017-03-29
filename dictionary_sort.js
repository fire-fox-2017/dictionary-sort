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
  };

  this.insertionSort = function() {
    let result = [];
    for (let i = 1 ; i < this.word_vault ; i++) {
      // iterate array
      // check if arr[i] is smaller than arr[i-1]
      // if yes, find until arr[i-1] is not smaller or equal than arr[i]


      let j = i;
      for (let k = 0 ; k < j ; k++ ) {
        if ( this.word_vault[i] < this.word_vault[k]) {
          // swap
          let temp = this.word_vault[k];
          this.word_vault[k] = this.word_vault[i];
          this.word_vault[i] = temp;
        }
      }
    }
    
  };

}




var dict = new Dictionary();

rl.prompt();

rl.on('line', (input) => {
  // console.log('User input: ' + input);
  if(input.length > 0){
    // rl.setPrompt("New words: ");
    // rl.prompt();
    dict.add_words(input);

  } else {
    // console.log(dict.sort());
    console.log(dict._word_vault);
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
