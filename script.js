function alterarValor(id, incremento){
    const elemento = document.getElementById(id);
    let valorAtual = parseInt(elemento.textContent, 10);
    valorAtual += incremento;
    elemento.textContent = valorAtual < 0 ? 0 : valorAtual;
}

function calcularMedia(){
    const v1 = +document.getElementById("item-1").value;
    const v2 = +document.getElementById("item-2").value;
    const v3 = +document.getElementById("item-3").value;
    const media = document.getElementById("media-resultado");
    const resultado = document.getElementById("media-analise");

    valor = ((v1+v2+v3)/3).toFixed(2);

    if (valor <= 40){
        conceito = "E";
    } else if (valor <=60){
        conceito = "D";
    } else if (valor <=60){
        conceito = "C";
    } else if (valor <=60){
        conceito = "B";
    } else{
        conceito = "A";
    };

    media.textContent = `A média é: ${valor}`;
    resultado.textContent = `Conceito Obtido: ${conceito}`;

}

let rodada = 1;
let pontuacaojogo = 0;
function craps(){
    let dado1 = document.getElementById("dado1");
    let dado2 = document.getElementById("dado2");
    let resultado = document.getElementById("resultado");
    let pontuacao = document.getElementById("pontuacao");
    let inicio = document.getElementById("inicio");

    const aleatorio1 = Math.floor(Math.random() * 6) + 1;
    const aleatorio2 = Math.floor(Math.random() * 6) + 1;
    var soma = aleatorio1 + aleatorio2;

    if (rodada === 1){
        resultado.textContent = `Resultado: `;
        inicio.textContent = `Clique para Jogar`;
        if (soma === 7 || soma === 11){
            resultado.textContent = `Você ganhou!! Sua soma foi ${soma}`;
            verificador = 2;
        } else if (soma === 2 || soma === 3 || soma === 12){
            resultado.textContent = `Craps! Você perdeu!! Sua soma foi ${soma}. Jogue novamente`;
            verificador = 2;
        } else {
            resultado.textContent = `Pontuação Obtida Jogue Novamente!!`;
            pontuacaojogo = soma;
            pontuacao.textContent = `Sua pontuação é ${pontuacaojogo}`;
            verificador = 1;
        }
    };

    if (rodada != 1){
        inicio.textContent = ``;
        resultado.textContent = ``;
        if (soma === pontuacaojogo){
            resultado.textContent = `Você ganhou!! Sua soma foi ${soma}`;
            verificador = 2;
        } else if (soma === 7){
            resultado.textContent = `Você perdeu!! Sua soma foi ${soma}. Recomeçe!`;
            verificador = 2;
        } else {
            rodada += 1;
        }
    };

    if (verificador === 1){
        rodada = rodada + 1;
        verificador = 0;
    };
    if (verificador === 2){
        inicio.textContent = `Clique no botão para jogar novamente`;
        pontuacao.textContent = ``
        pontuacaojogo = 0;
        rodada = 1;
        verificador = 0;
    };

    dado1.textContent = `Dado 1: ${aleatorio1}`;
    dado2.textContent = `Dado 2: ${aleatorio2}`;
}
