let idade = 25;
let possuiCarteira = true;

console.log("Idade:", idade, "Possui Carteira:", possuiCarteira);

// se idade é maior que 18 e possui carteira…
if (idade > 18 && possuiCarteira) {
  mensagem ="Pode dirigir!";

} else {
  mensagem="Não pode dirigir.";
}



setTimeout(function(mensagem) {
  console.log(mensagem);
}, 2000); // pausa 2000 milissegundos = 2 segundos



let temMaca = false;
let temBanana = true;

console.log("Tem Maçã:", temMaca, "Tem Banana:", temBanana);

// se tem maça ou tem banana…
if (temMaca || temBanana) {
  console.log("Você tem frutas!");
} else {
  console.log("Não tem frutas.");
}

console.log()

/*
Outros tipos de operadores lógicos
Operador	Nome	Exemplo	Resultado
==	Igual	A == B	Verdadeiro se A for igual a B
!=	Diferente	A != B	Verdadeiro se A não for igual a B
<	Menor que	A < B	Verdadeiro se A for menor que B
>	Maior que	A > B	Verdadeiro se A for maior que B
<=	Menor ou igual	A <= B	Verdadeiro se A for menor ou igual a B.
>=	Maior ou igual	A >= B	Verdadeiro se A for maior ou igual a B.
Operadores Lógicos

Operador	Nome	Exemplo	Resultado
&&	E / AND	(A > B) && (B == C)	Verdadeiro se A fo maior que B E B for igual a C
ǀǀ	OU / OR	(A > B) ǀǀ (B == C)	Verdadeiro se A for maior que B OU B for igual a C
!	NEGAÇÃO	!(A == B)	Verdadeiro se A NÃO for igual a B
*/