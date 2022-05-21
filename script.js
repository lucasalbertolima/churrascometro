// Carne - 400g por pessoa    + de 6 horas - 650g
// Refrigerante - 1200ml por pessoa     + de 6 horas - 2000ml
// Suco/água - 800ml por pessoas       + 6 horas - 1200ml
// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdCarne = carneEmGramas(duracao) * adultos + (carneEmGramas(duracao)/2 * criancas);
    let qtdRefri = refriEmMl(duracao) * adultos;
    let qtdSucoAgua = sucoEmMl(duracao) * adultos + (sucoEmMl(duracao)/2 * criancas);
    
    resultado.innerHTML = `<p>Você precisará para o seu Churrasco de:</p>`
    resultado.innerHTML += `<p>${qtdCarne / 1000}kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdRefri / 1000)}L de Refrigerante (crianças não inclusas em refrigerantes)</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdSucoAgua / 1000)}L de Suco e Água</p>`
}

function carneEmGramas(duracao){
    if (duracao >= 6){
        return 650;
    } else {
        return 400;
    }
}

function refriEmMl(duracao){
    if (duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function sucoEmMl(duracao){
    if (duracao >= 6){
        return 1200;
    } else {
        return 800;
    }
}