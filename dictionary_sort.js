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
    if (answer !== ""){
      arr.unshift(answer);
      console.log(`Kata ${answer} sudah dimasukkan ke kamus`);
      rl.prompt();
    } else {
      console.log(`Selamat kamus telah memiliki ${arr.length} kata`);
      let sortir = arr.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      });
      //src = http://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-in-javascript
      for (let i = 0; i < sortir.length; i++){
        console.log(sortir[i]);
      }
      rl.prompt();
    }
  });


//module.exports = Dictionary
