const readline = require('readline');
// your code here to initialize the program and take user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('Type a word: ');
rl.prompt();

let tmp = [];

function sort(words) {
  for (var i = 0; i < words.length; i++) {
    for (var j = 0; j < i; j++) {
      if (words[i].toLowerCase() < words[j].toLowerCase()) {
        let tmp = words[i]
        words[i] = words[j]
        words[j] = tmp
      }
    }
  }
  return words
}

rl.on('line', (input) => {
  if (input == '') {
    console.log('Congratulation! Your dictionary has ' + tmp.length + ' words.');
    for (var i = 0; i < tmp.length; i++) {
      console.log(tmp[i]);
      rl.close()
    }
  } else {
    rl.setPrompt('Type another word: (Or PRES ENTER TO FINISH) : ')
    rl.prompt();
    tmp.push(input)
    sort(tmp)
  }
})

//module.exports = Dictionary