/* var select=document.getElementById('personagem');
select.addEventListener('change', function() {
	console.log(this.value);
}); */

/* $('#personagem').on('change', function() {
	console.log(this.value);
}); */



function chamarPersonagem(numero){
	$.ajax({
		url: `https://swapi.co/api/people/${numero}/`,
		method: "GET",
		beforeSend: function(){
			$('#cartao').html('Guenta aí que tá carregando...');
		},
		success: function(resposta) {
			$('#cartao').html(`<h2>${resposta.name}</h2><p>Altura: ${resposta.height}</p><p>Peso: ${resposta.mass}</p>`);
		},
		error: function(deuRuim) {
			console.log(deuRuim);
		}
	});
}

var personagem = $('#personagem').value;

$('#personagem').on('change', function() {
	chamarPersonagem(this.value);
});