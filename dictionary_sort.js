const readline = require('readline');
rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Please input text here =>'
});

rl.prompt();

var box = [];
function dictionarySort(Input){
  for(var i = 1; i < box.length; i++) {
    for(var j = 0; j < i; j++) {
      if(box[i].toLowerCase() < box[j].toLowerCase()) {
        var lower = box[i];
        box[i] = box[j];
        box[j] = lower;
      }
    }
  }
  for(var i = 0; i < box.length; i++) {
    console.log(` ${box[i]}`);
  }
}

function container(){
  rl.on('line', (userInput) => {
 if (userInput.length === 0) {
      rl.close();
    } else {
      console.log(`${userInput} added!`)
      rl.setPrompt('> Type another word (or press enter to finish): ');
      rl.prompt();
      box.push(userInput);
    }

  }).on('close', () => {
    console.log(`> Congratulations! Your dictionary has ${box.length} words:`)
    dictionarySort(box);
  });
}
container();

module.exports = dictionarySort
