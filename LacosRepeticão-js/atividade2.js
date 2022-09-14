const prompt = require('prompt-sync')();

let qtd = 0
let qtd2 = 0
for(let x = 1; x <= 10; x++){
    nString = prompt('Diga um numero: ')
    n = Number(nString)

        if(n % 2 == 0){
            qtd = qtd + 1
            console.log(`Quantidade de numeros pares ${qtd}`)
        }else if(n % 2 == 1){
            qtd2 = qtd2 + 1
            console.log(`Quantidade de numeros impares ${qtd2}`)
        }

}