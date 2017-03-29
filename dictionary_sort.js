const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI> '
});

let data=[];



function nonSensitive(s1, s2) {
  var s1lower = s1.toLowerCase();
  var s2lower = s2.toLowerCase();

	if (s1lower > s2lower){
		return 1;
}else if(s1lower < s2lower){
		return -1;
}else{
		return 0;
}
}


rl.prompt();

rl.on('line', (line) => {
  switch(line.trim()) {
    case '':
      console.log('angka kosong');
      break;
    default:


data.push(line);
console.log(data.sort(nonSensitive));

      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});

//module.exports = Dictionary
