
function calculaIMC (peso, altura) {
  return (parseFloat(peso)/(parseFloat(altura)*parseFloat(altura))).toFixed(2);
}

var altura = document.getElementById('altura');
var peso = document.getElementById('peso');
var botao = document.querySelector('#botao');
var titulo = document.querySelector('.titulo');

botao.addEventListener ('click', function() {
	titulo.innerHTML = "Seu IMC é " + calculaIMC (peso.value, altura.value);
})