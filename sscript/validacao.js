
function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute;
    console.log(numero);
       
    
    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido</div>`;

        return;
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`;
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você Acertou!</h2>
        <h3>O número secreto era: ${numeroSecreto}</h3>

        <button id="reiniciar" class= "btn-reiniciar">Reiniciar</button>
        `;
    } else if(numero > numeroSecreto){
       elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`;
    }else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}


document.body.addEventListener('click', e =>{
    if(e.target.id === 'reiniciar'){
        window.location.reload();
    }
})