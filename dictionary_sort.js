const readline = require('readline');
readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> Type a word: '
});

readlineInterface.prompt();

let userInputContainer = [];

let dictionarySort = (userInput) => {
  for(let i = 1; i < userInputContainer.length; i++) {
    for(let j = 0; j < i; j++) {
      if(userInputContainer[i].toLowerCase() < userInputContainer[j].toLowerCase()) {
        let lower = userInputContainer[i];
        userInputContainer[i] = userInputContainer[j];
        userInputContainer[j] = lower;
      }
    }
  }

  for(let i = 0; i < userInputContainer.length; i++) {
    console.log(`> ${userInputContainer[i]}`);
  }

}

let storeUserInput = () => {

  readlineInterface.on('line', (userInput) => {
    var testNumber = /\d/g.test(userInput);
    var testWhiteSpace= /\s/g.test(userInput);

    if(testNumber || testWhiteSpace) {
      console.log('Error. Jangan masukan angka, string kosong, spasi atau kalimat.');
      readlineInterface.prompt();
    } else if (userInput.length === 0) {
      readlineInterface.close();
    } else {
      console.log(`${userInput} added!`)
      readlineInterface.setPrompt('> Type another word (or press enter to finish): ');
      readlineInterface.prompt();
      userInputContainer.push(userInput);
    }
    
  }).on('close', () => {
    console.log(`> Congratulations! Your dictionary has ${userInputContainer.length} words:`)
    dictionarySort(userInputContainer);
  });
}


storeUserInput();

module.exports = dictionarySort
