
//Desafios finais
//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Boas vindas');


//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log
//  para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = 'Glória';
console.log(`Olá, ${nome}!`);

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o 
// alert para exibir a mensagem "Olá, [seu nome]!" .
alert(`Olá, ${nome}!`);

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. 
// Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagemProgramacao = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(`A linguagem de programação que eu mais gosto é ${linguagemProgramacao}.`);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores
//  numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o 
// resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar
//  a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 17;
let valor2 = 27;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);


//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas 
// valores numéricos de sua escolha. Em seguida, realize a subtração desses dois 
// valores e armazene o resultado em uma terceira variável chamada "resultado". 
// Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e 
// [valor2] é igual a [resultado]." no console.
valor1 = 57;
valor2 = 7;
resultado = valor1-valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);


//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, 
// utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt('Qual sua idade?');
while (isNaN(idade)) {
    alert('Você não digitou uma idade válida, por favor digite novamente.');
    idade = prompt('Digite sua Idade : ');
}

if (idade >= 18) {
    mensagem ="Você é maior de idade.";
  } else {
    mensagem="Você é menor de idade.";
  }
console.log(mensagem);


//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, 
// negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt('Digite um número :');
// usar do enquanto para garantir que o usuário digite um número
do {
    if (isNaN(numero)) {
        alert('Você não digitou um número, por favor digite novamente.');
        numero = prompt('Digite um número : ');
    }
    } while (isNaN(numero));
    
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

function mensagemTela(mensagem) {
    alert(mensagem);
}
mensagemTela(mensagem);


//Use um loop while para imprimir os números de 1 a 10 no console.
let contador = 1;
while(contador < 11){
    console.log(contador);
    contador++;
}


//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para 
// determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 7;
mensagem = nota >= 7  ? 'aprovado'  :  'reprovado';
alert(`Você foi ${mensagem}!`);

//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numAleatorio = Math.random();
console.log(numAleatorio);
console.log(Math.random());


//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numInteiro = parseInt(Math.random() * 10 + 1);
console.log(numInteiro);
console.log(parseInt(Math.random() * 10 + 1));


//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
numInteiro = parseInt(Math.random() * 1000 + 1);
console.log(numInteiro);
console.log(parseInt(Math.random() * 1000 + 1));