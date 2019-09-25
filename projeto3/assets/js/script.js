
function avançar() {
	var slideAtivo = document.querySelector('.slide.ativo');
	var proximo = slideAtivo.nextElementSibling;
	if (proximo!=null) {
		slideAtivo.classList.remove("ativo");
		proximo.classList.add("ativo");
	}
}

function retroceder() {
	var slideAtivo = document.querySelector('.slide.ativo');
	var proximo = slideAtivo.previousElementSibling;
	if (proximo!=null) {
		slideAtivo.classList.remove("ativo");
		proximo.classList.add("ativo");
	}
	
}

setInterval (function(){
	var slideAtivo = document.querySelector('.slide.ativo');
	var proximo = slideAtivo.nextElementSibling;
	if (proximo==null) {
		proximo=document.querySelector('.slide');
	}
	slideAtivo.classList.remove("ativo");
	proximo.classList.add("ativo");


},3000);