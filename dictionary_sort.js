const readline = require('readline');
// your code here to initialize the program and take user input
const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout,
  prompt:"Type a Word:\n"
});
rl.prompt();
var arr=[];
rl.on('line',(input)=>{
  if(input === ""){
    console.log("Congratulations! Your dictionary has "+arr.length+" words");
    Dictionary();
    rl.close();
  }else{
  arr.push(input);
  console.log("Type another word (or press enter to finish):");
  }
});

function Dictionary(){
  var sorting = Sort(arr);
  for (let i = 0; i < sorting.length; i++) {
    console.log(sorting[i]);
  }
}

const Sort = arr =>{
  for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[j].toLowerCase() < arr[i].toLowerCase()){
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

//module.exports = Dictionary
