

let porcentagemDesconto = 0;
let quantidadeMilhas= prompt('Qual sua quantidade de milhas ');

if(quantidadeMilhas >= 30000){
    porcentagemDesconto = porcentagemDesconto + 20;
} else {
    if(quantidadeMilhas > 5000) {
        porcentagemDesconto = porcentagemDesconto + 10;
       
    }
}
alert("O desconto foi de: " + porcentagemDesconto + "%");

