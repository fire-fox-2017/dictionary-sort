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
  arrHuruf=["","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  arrTemp=[];
	for(var i=0;i<arrIn.length;i++){
		var temp=arrIn[i];
        temp=temp.charAt(0);
		for(var j=0;j<arrHuruf.length;j++){
			if(temp==arrHuruf[j]){
				arrTemp.push(j+100);
			}else if(temp.toUpperCase()==arrHuruf[j]){
				arrTemp.push(j);
            }
		}
	}
    for(var k= 1;k<arrIn.length;k++){
      for(var l=k;l>0;l--){
        if(arrTemp[l]< arrTemp[l-1]){
          var temp1 = arrTemp[l];
            var temp2 = arrIn[l];
          arrTemp[l] = arrTemp[l-1];
          arrTemp[l-1] = temp1;
            arrIn[l] = arrIn[l-1];
            arrIn[l-1] = temp2;
		      }
        }
	}
  return arrIn;
}
rl.on('close', () => {
	console.log("");
	console.log("Congratulations! Your dictionary has "+tempArr.length+" words : ");
	console.log(dictionary(tempArr));
	rl.close();
})
