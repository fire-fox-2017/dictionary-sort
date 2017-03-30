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
		return true;
}else if(s1lower < s2lower){
		return false;
}else{
		return false;
}
}

function sorts(arr){
  let tmp='';
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < (arr.length - i - 1); j++){
      if(nonSensitive(arr[j],arr[j+1])){
        tmp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=tmp;
      }
    }
  }
  return arr;
}


rl.prompt();

rl.on('line', (line) => {
  switch(line.trim()) {
    case '':
      console.log('angka kosong');
      break;
    default:


data.push(line);
console.log(sorts(data));

      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});

//module.exports = Dictionary
