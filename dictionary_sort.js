let dict = []

const readline = require('readline');
// your code here to initialize the program and take user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Type another word (or press enter to finish): '
});

rl.question('Type a word: ', (input) => {
  if (/[^a-z]/gi.test(input)) {
    console.log('masukan huruf saja')
  } else {
    dict.push(input);
  }
  rl.prompt();
});

function urutkan(nama){
  nama.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  return nama
}

rl.on('line', (line) => {
  if (line == '') {
    urutkan(dict)
    let wordCount = dict.length;
    console.log(`Congratulations! Your dictionary has ${wordCount} words:`);
    dict.forEach(value => console.log(value));
  } else
  if (/[^a-z]/gi.test(line)) {
    console.log('masukan huruf saja')
  } else {
    dict.push(line)
  }
  rl.prompt()
})
// module.exports = Dictionary
