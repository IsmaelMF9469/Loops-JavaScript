const prompt = require('prompt-sync')();

let cont = 0
let cont2 = 0

let idade

do{
    let idadeSpring = prompt('Diga a sua idade: ')

        if(idade < 21){
            cont ++

        }else if(idade > 50){
            cont2 ++
    }
}while(idade =-99)

    console.log(`Quantidade de pessoas com menos de 21: ${cont}, e a quantidade de pessoas com mais de 50: ${cont2}`)