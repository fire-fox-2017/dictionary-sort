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
      let tukar_1 = [];
      for(let i = 1, tukar = 0; i < arr.length ;i++){
        if(arr[i - 1] > arr[i]){
          tukar_1 = arr[i - 1] ;
          arr[i - 1] = arr[i] ;
          arr[i] = tukar_1;
          tukar = tukar + 1;
        }
      }
      //while(tukar > 0 );
      //return arr;
      console.log(arr);
    }

      //}
      rl.prompt();
  });


//module.exports = Dictionary
