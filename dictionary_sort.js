const readline = require('readline');
rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> Type a word: '
});
// redline intuk keluaran dan input di deklare dengan rl
rl.prompt();
//menampilkan rl dengan fungsi prompt (setealh kita membuat readline kita jalankan rl nya)
let userInput = [];
//kita deklare sebuah array untuk menampung data dari proses readline
let dictionarySort = (dataInput) => { //kita buat sebuah fungsi yang berguna untuk menambahkan data array pada userInput
  for(let i = 1; i < userInput.length; i++) { //declare sepanjang variable userInput
    for(let j = 0; j < i; j++) { // declare kembali untuk membuat array 2 d
      //
      if(userInput[i].toLowerCase() < userInput[j].toLowerCase()) {
        let bawah = userInput[i];
        userInput[i] = userInput[j];
        userInput[j] = bawah;
      }
    }
  }
// declare looping untuk membuat keluaran
  for(let i = 0; i < userInput.length; i++) {
    console.log(`> ${userInput[i]}`);
  }

}

let masukkanData = () => {

  rl.on('line', (dataInput) => {
    var testNumber = /\d/g.test(dataInput);
    var testWhiteSpace= /\s/g.test(dataInput);

    if(testNumber || testWhiteSpace) {
      console.log('Error. Jangan masukan angka, spasi dan karekater lain selain huruf.');
      rl.prompt();
    } else if (dataInput.length === 0) { //kita bandingkan jika nilai panjangnya 0 maka keluar
      rl.close();
    } else {
      console.log(`${dataInput} bertambah!`)
      rl.setPrompt('> Type other text (or press enter to exit): ');
      rl.prompt();
      userInput.push(dataInput);
    }

  }).on('close', () => {
    console.log(`> Congratulations! Your dictionary has ${userInput.length} words:`)
    dictionarySort(userInput);
  });
}


masukkanData();

module.exports = dictionarySort
