let calcular = document.querySelector("#calcular");

function imc() {
  let nome = document.querySelector("#nome").value;
  let altura = document.querySelector("#altura").value;
  let peso = document.querySelector("#peso").value;
  let resultado = document.querySelector("#resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    const valorIMC = (peso / (altura * altura)).toFixed(2);// toFixed determina quantas casas terá depois da virgula ou ponto

    let classificacao = '';

    if(valorIMC < 18.5){
        classificacao = "abaixo do peso."
    }else if(valorIMC < 25){
        classificacao = "no peso ideal. Parabéns!!!"
    }else if(valorIMC < 30){
        classificacao = "levemente acima do peso."
    }else if(valorIMC < 35){
        classificacao = "com obesidade grau I."
    }else if(valorIMC < 40){
        classificacao = "com obesidade grau II."
    }else{
        classificacao = "com obesidade grau III. Cuidado!!"
    }

    resultado.textContent =`${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
  } else {
    resultado.textContent = "Preencha todos os campos!";
  }
}

calcular.addEventListener("click", imc);
