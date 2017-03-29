const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Type a word: ',
});

var arr=[]
rl.prompt();
rl.on('line', (input) => {
  if (input === ""){
    console.log("Congratulations! Your dictionary has " + arr.length + " words:")
    arr.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    for(i=0; i<arr.length; i++){
      console.log(arr[i])
    }
  }
  else {
    arr.push(input);
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
