alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    // convertendo o chute para um número inteiro
    chute = parseInt(prompt(`Escolha um número entre 1 e ${numeroMaximo}`));

    // validação do chute - garantir que o usuário insira um número válido
    while (isNaN(chute) || chute < 1 || chute > numeroMaximo) {
        chute = parseInt(prompt(`Por favor, escolha um número válido entre 1 e ${numeroMaximo}`));
    }
    
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        // Não precisa do 'break' aqui porque o loop while principal já vai parar
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }
