const readline = require('readline');
rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Silahkan Masukan Data =>'
});

rl.prompt();

var tampungInputan = [];
function dictionarySort(input){
  for(var i = 1; i < tampungInputan.length; i++) {
    for(var j = 0; j < i; j++) {
      if(tampungInputan[i].toLowerCase() < tampungInputan[j].toLowerCase()) {
        var lower = tampungInputan[i];
        tampungInputan[i] = tampungInputan[j];
        tampungInputan[j] = lower;
      }
    }
  }
  for(var i = 0; i < tampungInputan.length; i++) {
    console.log(` ${tampungInputan[i]}`);
  }
}

function tampil(){
  rl.on('line', (input) => {
 if (input.length === 0) {
      rl.close();
    }

    else if (input===" ") {
      console.log(`Tidak Boleh Memasukan Spasi!`);
      rl.setPrompt('> Masukan Kata Lagi (atau tekan entar untuk mengakhiri): ');
      rl.prompt();
    }else {
      console.log(`${input} Ditambahkan!`)
      rl.setPrompt('> Masukan Kata Lagi (atau tekan entar untuk mengakhiri): ');
      rl.prompt();
      tampungInputan.push(input);
    }

  }).on('close', () => {
    console.log(`> Selamat! Kamusmu Mempunyai ${tampungInputan.length} Kata:`)
    dictionarySort(tampungInputan);
  });
}
tampil();

module.exports = dictionarySort
