const prompt = require('prompt-sync')();

let qtd = 0
do{
const nString = prompt('Diga um numero: ')
const n = Number(nString)
console.log('Para sair digite "0" ')
    qtd = qtd + 1

}while(n == 0);
    console.log(`Media dos multiplos de 3: ${media}`)
    