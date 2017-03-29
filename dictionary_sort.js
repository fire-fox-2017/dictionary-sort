const readline = require('readline');
// your code here to initialize the program and take user input

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> Masukkan Input Kata, tekan Enter pada line baru untuk melihat hasil sort : '
});

rl.prompt();

let hasil_kata = [];

rl.on('line', (line) => {
    let regex_huruf = /\d/gi;
    let regex_spasi = /\s/gi;

    if (regex_huruf.test(line.trim()) || regex_spasi.test(line.trim())) {
        console.log('Masukkkan Kata');
    } else if (line.trim().length === 0) {
        rl.close();
    } else {
        dictionary_sort(line.trim());
    }
    rl.prompt();

}).on('close', () => {
    console.log('Hasil Dictionary Sort :')
    for (var i = 0; i < hasil_kata.length; i++) {
        console.log(hasil_kata[i]);
    }
    process.exit(0);
});

function dictionary_sort(kata) {
    hasil_kata.push(kata);
    hasil_kata.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    })
    return hasil_kata;
}


// module.exports = Dictionary