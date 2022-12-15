
const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resltado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC  = (peso/(altura^2)).toFixed(1);

let classificacao  = '';

if (valorIMC <18.5){
    classificacao  = "abaixo do peso.";
}else if (valorIMC < 25){
    classificacao = 'com peso ideal. Parabens!!!';
}else if (valorIMC < 30){
    classificacao = "levemente acima do peso";
}else if (valorIMC < 35){
    classificacao = "obesidade grau 1";
}else if (valorIMC < 45){
    classificacao = "obesidade grau 2";
}else if (valorIMC < 50){
    classificacao = "obesidade grau 3, cuidado!!!";
}

        resultado.textContent`${nome} seu IMC é ${valorIMC} e você esta ${classificacao}` ;

    }else {
        resultado.textContent("Preencha todos os campos!!!");
    }
}

calcular.addEventListener('click', imc);
