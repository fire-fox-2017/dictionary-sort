
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Ketikkan Sebuah Kata/Kalimat : "
});
// your code here to initialize the program and take user input

let arr = [];
rl.prompt();

rl.on("line", input => {
  if (input == "") {
    let sorted = Dictionary(arr);
    console.log(`Selamat!! Kamus anda mempunyai  ${sorted.length} kalimat`);
    for (let i = 0; i < sorted.length; i++) {
      console.log(sorted[i]);
    }
    rl.close();
  } else {
    arr.push(input);
    rl.setPrompt("Ketikkan Sebuah Kata/Kalimat :  ");
    rl.prompt();
  }
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});

const Dictionary = arr => {
  for (let i = 0; i < arr.length ; i++) { //arr.length - 1
    for (let j = i + 1; j < arr.length; j++){
      if (arr[j] < arr[i] ) {                              //.toLowerCase()
        let hasil = arr[j];
        arr[j] = arr[i];
        arr[i] = hasil;
      }
    }
  }
  return arr;
}

module.exports = Dictionary
