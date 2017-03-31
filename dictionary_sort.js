const readline = require('readline');
// your code here to initialize the program and take user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Masukkan input "
});

  let arr = [];
  rl.prompt();
  rl.on("line", (answer) => {
    if (answer !== "") {
      console.log(`Kata ${answer} sudah dimasukkan ke kamus`);
      arr.unshift(answer);
      rl.prompt();
    } else {
      console.log(`Selamat kamus telah memiliki ${arr.length} kata`);
      let tukar_1;
      for(let i = 1 ; i < arr.length ;i++){
        for(let j = 0 ; j < i; j++){
          if(arr[i].toLowerCase() < arr[j].toLowerCase()){
            let tukar_1 = arr[i];
            arr[i] = arr[j];
            arr[j] = tukar_1;
          }
        }
      }
      for (let k = 0; k < arr.length; k++){
      console.log(arr[k]);  
      }
      }
      rl.prompt();
    });




//module.exports = Dictionary
