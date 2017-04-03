const readline = require('readline');
// your code here to initialize the program and take user input
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout,
  prompt : 'Please type a word>',
});

rl.prompt()
let userInput = [];
let dictionarySort = (dataInput) => {
  for(let i = 1; i < userInput.length; i++) {
    for(let j = 0; j < i; j++) {
      if(userInput[i].toLowerCase() < userInput[j].toLowerCase()) {
        let bawah = userInput[i];
        userInput[i] = userInput[j];
        userInput[j] = bawah;
      }
    }
  }

  for(let i = 0; i < userInput.length; i++) {
    console.log(`> ${userInput[i]}`);
  }
}
let masukanData = () => {
rl.on('line', (dataInput) =>{
  var testNumber = /\d/g.test(dataInput);
  var testWhiteSpace = /\s/g.test(dataInput);
  if(testNumber || testWhiteSpace) {
      console.log('Error. dont use numeric');
      rl.prompt();
    } else if (dataInput.length === 0) {
      rl.close();
    } else {
      console.log(`${dataInput} Added one word!`)
      rl.setPrompt('> Type other text (or press enter to exit): ');
      rl.prompt();
      userInput.push(dataInput);
    }
}).on('close', () => {
    console.log(`> Congratulations! Your dictionary has ${userInput.length} words:`)
    dictionarySort(userInput);
  });
}

masukanData();

module.exports = dictionarySort
