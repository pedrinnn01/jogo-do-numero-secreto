//FORMA REPETITIVA (linha 2 e 3)
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'JOGO DOS NÚMEROS SECRETOS';

//FORMA REPETITIVA (linha 6 e 7) 
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10:';

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//FORMA CURTA (linha 12 a 18)
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'JOGO DO NÚMERO SECRETO');
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 10:');  
}

exibirMensagemInicial();

exibirTextoNaTela('h1', 'JOGO DO NÚMERO SECRETO');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10:');

// atribuir vallor: = 
//comparar: ==
function verificarChute () {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1' , 'Muito bem ,você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' ;
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p' , 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p' , 'O número secreto é maior');
        }
        tentativas++;;
        limparCampo();
    }
}

//parseInt (faz com que o número fique inteiro. ex: 1 - 2 - 3...)
//Math.random (gera números aleatorios porém quebrados. ex: 0,123 - 1,234)
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if (quantidadeDeElementosNaLista == numeroLimite )  {
    listaDeNumerosSorteados = [];
}

   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
       return gerarNumeroAleatorio();
     } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
     }
   }

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}