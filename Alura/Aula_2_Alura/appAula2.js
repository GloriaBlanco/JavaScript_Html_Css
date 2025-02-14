alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Você errou! Tente novamente');
}

alert('JOGUE novamente!!!')
let chute2 = prompt('Escolha um número entre 1 e 10')

let numeroSecreto2 = 4

console.log(chute2 == numeroSecreto2)

if (chute2 == numeroSecreto2) {
    alert('Acertou')
} else {
    alert('O número secreto era ' + numeroSecreto2)
}
