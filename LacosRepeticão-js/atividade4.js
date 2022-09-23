const prompt = require('prompt-sync')();

let i = 0;
let qtdCalmas = 0
let qtdMNervosas = 0
let qtdHAgressivos = 0
let qtdOCalmos = 0
let qtdNervosos40 = 0
let qtdCalmos28 = 0

while(i < 3 ){
    const idadeText = prompt('Digite sua idade: ')
    const idade = Number(idadeText)
        console.log('Escolha o sexo entre:\n\n')
        console.log('1 - homem\n ')
        console.log('2 - mulher\n ')
        console.log('3 - outros\n ')
    const sexoText = prompt ('Escolha a opção do sexo:\n')
        console.log('Escolha um humor entre: \n\n')
        console.log('1 - Calmo\n ')
        console.log('2 - Nervoso\n ')
        console.log('3 - Agressivo\n ')
    const humorText = prompt('Escolha o seu humor: \n\n')
    const humor = Number(humorText)

    if(humor = 1 ){
        qtdCalmas++;
   }if(sexo== 2 && humor==2){
        qdMNervosas++
    }if(sexo== 1 && humor==1){
        qdOcalmos++;
    }if (humor==3 && sexo ==1){
        qdHAgressivos++
    }if (humor==2 && idade>40){
        qdNervosos40++
    }if(humor==1 && idade <18){
        qdCalmos18++
    }

    i++;
}
console.log(`\nO total de pessoas calmas é ${qdCalmas}`);
console.log(`\nO total de mulheres nervosas é ${qdMNervosas}`);
console.log(`\nO total de OUTROS calmes é ${qdOcalmos}`);
console.log(`\nO total de homens agressivos é ${qdCalmas}`);
console.log(`\nO total de pessoas nervosas acima dos 40 anos é ${qdNervosos40}`);
console.log(`\nO total de pessoas calmas acima dos 18 é ${qdCalmos18}`);
