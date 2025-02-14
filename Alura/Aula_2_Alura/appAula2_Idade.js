

let idade;
do {
    idade = prompt("Digite sua idade:");
    if (isNaN(idade)) {
        alert("Por favor, insira um número válido.");
    }
} while (isNaN(idade));

idade = parseInt(idade);
/*
console.log("Iniciando verificação de idade");
*/
if (idade >= 18) {
  alert("Você é maior de idade.");
} else {
  alert("Você é menor de idade.");
}

/*
console.log("Iniciando verificação de idade");
let idade2;
do {
    idade2 = prompt("Digite sua idade:");
    console.log("Idade digitada no prompt: " + idade2);
    if (isNaN(idade2)) {
        alert("Por favor, insira um número válido.");
    }
} while (isNaN(idade2));

idade2 = parseInt(idade2);
console.log("Idade após conversão: " + idade2);

if (idade2 >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
*/
  