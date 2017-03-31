const readline = require('readline');
// your code here to initialize the program and take user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Type a word : '
});

var tempArr=[];
rl.prompt();

rl.on('line', (aksi) => {
	tempArr.push(aksi);
	rl.setPrompt("Type another word (or press ctrl+c to finish) : ");
	rl.prompt();
})
function dictionary(arrIn){
    arrIn.sort(function(a,b){
        return a.toLowerCase().localeCompare(b.toLowerCase());
    })
    return arrIn;
	}
rl.on('close', () => {
	console.log("");
	console.log("Congratulations! Your dictionary has "+tempArr.length+" words : ");
	console.log(dictionary(tempArr));
	rl.close();
})
