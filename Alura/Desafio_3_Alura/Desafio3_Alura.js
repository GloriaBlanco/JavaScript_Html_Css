/*Desafios
Crie um contador que comece em 1 e vá até 10 usando um loop while. 
Mostre cada número.
*/

// declara a variavel numeroContador = valor 1
let numeroContador = 1;

while (numeroContador <= 10) {    
    console.log(numeroContador);
    alert(`numero contador = ${numeroContador}`);
    numeroContador = numeroContador + 1;
}


/*Desafios
Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
*/

numeroContador = 10;

while (numeroContador > 0) {
    console.log(numeroContador);
    alert(`numero contador = ${numeroContador}`);
    numeroContador = numeroContador - 1;
}



/*Desafios
Crie um programa de contagem regressiva. 
Peça um número e conte deste número até 0, usando um loop while no console do navegador.
*/

// pede o número para o usuário
numeroContador = parseInt(prompt("Digite um número para eu fazer uma contagem regressiva: "));

// while enquanto o numeroContador digitado for string e nao um numero valido
while (isNaN(numeroContador)) {
    alert('Por favor, digite novamente, você não digitou um número válidoo.');
    numeroContador = parseInt(prompt("Digite um número para eu fazer uma contagem regressiva: "));
}

// while faz a contagem regressiva do numero digitado até 0
while (numeroContador > 0) {
    
    console.log(numeroContador);
    alert(`Contagem regressiva .....  ${numeroContador}`);
    numeroContador = numeroContador - 1;
}


/*Desafios
Crie um programa de contagem progressiva. 
Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
*/

// pede o número para o usuário
numeroContador = parseInt(prompt("Digite um número para eu fazer uma contagem progressiva: "))

// while enquanto o numeroContador digitado for string e nao um numero valido
while (isNaN(numeroContador)) {
    alert('Por favor, digite novamente, você não digitou um número válidoo.');
    numeroContador = parseInt(prompt("Digite um número para eu fazer uma contagem progressiva: "))
}

let contando = 0

// while faz a contagem regressiva do numero digitado até 0
while (contando <= numeroContador) {    
    console.log(contando);
    alert(`Contagem progressiva ...... = ${contando}`);
    contando = contando + 1;
}

