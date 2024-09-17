
const calcular = window.document.getElementById('calcular');


calcular.addEventListener('click', imc);

function imc(){
    const nome = window.document.getElementById('nome').value;
    const altura = window.document.getElementById('altura').value;
    const peso = window.document.getElementById('peso').value;
    const resultado = window.document.getElementById('resultado');

    //value é para input do tipo texto, para o valor do que esta dentro da caixa de texto, enquanto textContent é o conteudo dentro da div nesse caso

    if(nome != '' && altura != '' && peso != ''){
        const valorImc = (peso/(altura * altura).toFixed(1))
       
        resultado.textContent = valorImc

        let classificacao = '';

        if(valorImc < 18.5){
            classificação = 'abaixo do peso'
        } else if(valorImc < 25){
            classificacao = 'com peso ideal'
        }else if(valorImc <30){
            classificação = 'levemente acima do peso'
        } else if(valorImc < 35){
            classificacao= 'com obesidade grau 1'
        } else if(valorImc < 40){
            classificacao= 'com obesidade grau 2'
        } else {
            classificação= 'com obesidade grau 3. Cuidado!'
        }
        resultado.textContent = `${nome}, seu IMC é ${valorImc} e você esta ${classificacao}.`

        }
    }


