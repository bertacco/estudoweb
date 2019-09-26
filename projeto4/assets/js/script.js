
var formulario=document.querySelector('#formulario'),
		titulo=document.querySelector('#titulo'),
		listagem=document.querySelector('#listagem'),
		valor=document.querySelector('#valor'),
		totalizador=0;


formulario.addEventListener('submit', function(event){
	event.preventDefault();

	if (titulo.value !='' && valor.value !='') {

		var linha = document.createElement('tr');
		var colunaTitulo = document.createElement('td');
		var colunaValor = document.createElement('td');

		colunaTitulo.innerHTML = titulo.value;
		colunaValor.innerHTML = valor.value;

		linha.appendChild(colunaTitulo);
		linha.appendChild(colunaValor);
		listagem.appendChild(linha);

		totalizador+=parseFloat(valor.value);
		titulo.value = '';
		valor.value = '';

		document.querySelector('.total').innerHTML = totalizador;

	} else {
		alert('Preencha todos os campos, seu animal');
	}	

})

