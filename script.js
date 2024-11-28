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
