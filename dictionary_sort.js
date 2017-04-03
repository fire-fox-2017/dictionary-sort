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
  if(aksi.length==0){
     rl.close();
  }else{
    let temp=aksi.toLowerCase();
    tempArr.push(temp);
    rl.setPrompt("Type another word : ");
    rl.prompt();
  }
})
function dictionary(arrIn){
    for(var i = 1; i < arrIn.length; i++) {
    for(var j = 0; j < i; j++) {
      if(arrIn[i].toLowerCase() < arrIn[j].toLowerCase()) {
        let temp = arrIn[i];
        arrIn[i] = arrIn[j];
        arrIn[j] = temp;
      }
    }
  }
    return arrIn;
	}

rl.on('close', () => {
	console.log("");
	console.log("Congratulations! Your dictionary has "+tempArr.length+" words : ");
	console.log(dictionary(tempArr));
})
