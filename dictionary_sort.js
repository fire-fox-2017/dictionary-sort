const readline = require('readline');
// your code here to initialize the program and take user input
let arrayString = [];

function dicTionary(sentences)
{
  let totalKata = sentences.length;
  let i=0;
  let j;
  let tampungString="";
  let arrDictionary=[];
  let indexHurufnya;

  do {
    tampungString=sentences[i];
    for(j=0;j<sentences.length;j++)
    {
      if(tampungString.toLowerCase()>sentences[j].toLowerCase())
      {
        tampungString=sentences[j];
        indexHurufnya=j;

      }

      else if(tampungString.toLowerCase()==sentences[j].toLowerCase())
      {
        tampungString=sentences[j];
        indexHurufnya=j;
      }
    }
    arrDictionary.push(tampungString);
    sentences.splice(indexHurufnya,1);
  } while(i<sentences.length)

  return arrDictionary;
}

const rl = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout,
    prompt: " Masukin Kata? "
  });

  rl.prompt();

  rl.on('line', (user_input) => {
    if(user_input==='')
    {
      let arr = dicTionary(arrayString);
      let panjangKata=arr.length;
      for(let i=0;i<panjangKata;i++)
      {
        console.log(arr[i]);
      }
      rl.close();
    }
    else
    {
      arrayString.push(user_input)
      rl.prompt();
    }
  });

  rl.on('close', ()=> {

  });

// let kalimat=['x', 'aaa','aa','alo','a' ];
// console.log(dicTionary(kalimat));
