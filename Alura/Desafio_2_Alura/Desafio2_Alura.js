/*Desafios
1)Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
Caso contrário, mostre "Boa semana!".
*/


let diaSemana = prompt('Qual dia da semana: segunda, terça, quarta, quinta, sexta, sábado, domingo ? ');


if (diaSemana == "sábado" || diaSemana == "domingo") {
    mensagem ="Bom fim de semana!";
} else {
    if (diaSemana == "segunda" || diaSemana == "terça" || diaSemana == "quarta" || diaSemana == "quinta" || diaSemana == "sexta") {
        mensagem ="Boa semana!";
    } else {
        mensagem = "Dia da semana não existe";
       
    }
}

mensagemTela(mensagem);
function mensagemTela(mensagem) {
    alert(mensagem);
}




//2)Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.


let numero = prompt('Digite um número : ');

// pedir para digitar um numero enquanto não fr um numero, se for string pede para digitar novamente
while (isNaN(numero)) {
        alert('Você não digitou um número, por favor digite novamente.');
        numero = prompt('Digite um número : ');
}

   
if (numero == 0) {
    mensagem = `O número é zero.`;
    } else {
        if (numero > 0) {
            mensagem=`O número ${numero} é positivo.`;
            } else {
                if (numero < 0) {
                    mensagem = `O número ${numero} é negativo.`;
                }
        }
}
    
mensagemTela(mensagem);


/*
3)Crie um sistema de pontuação para um jogo. 
Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".
Caso contrário, mostre "Tente novamente para ganhar.".
*/
let pontuacao = prompt('Digite sua pontuação no jogo : ');

while (isNaN(pontuacao)) {
    alert('Você não digitou um número, por favor, digite novamente.');
    pontuaca = prompt('Digite sua pontuação no jogo : ');
}

if (pontuacao >= 100) {
    mensagem = `Parabéns, você venceu !  com ${pontuacao} pontos!`;
    } else {
        if (pontuacao < 100) {
            mensagem = `Tente novamente para ganhar.`;
        }
}
mensagemTela(mensagem);




/* 
4)Crie uma mensagem que informa o usuário sobre o saldo da conta, 
usando uma template string para incluir o valor do saldo.
Peça ao usuário para inserir seu nome usando prompt. 
Em seguida, mostre um alerta de boas-vindas usando esse nome.
*/
let nome = prompt('Por favor, digite seu nome : ');

let saldo = 70000;

saldo = saldo.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

mensagem = `${nome}, seja bem vindo! O seu saldo é de R$ ${saldo}.`;

alert(mensagem);




