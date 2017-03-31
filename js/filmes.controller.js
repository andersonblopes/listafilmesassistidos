angular.module("Filmes").controller("FilmesController", function($scope){
	$scope.titulo = "Filmes que já assisti";
	$scope.autor = "Anderson Lopes";

	$scope.filmes = [
		{
			id: "1",
			titulo: "GLADIADOR",
			ano: 2000,
			produtora: "Universal filmes",
			sinopse: "Nos dias finais do reinado de Marcus Aurelius (Richard Harris), o imperador desperta a ira de seu filho Commodus (Joaquin Phoenix) ao tornar pública sua predileção em deixar o trono para Maximus (Russell Crowe), o comandante do exército romano. Sedento pelo poder, Commodus mata seu pai, assume a coroa e ordena a morte de Maximus, que consegue fugir antes de ser pego e passa a se esconder sob a identidade de um escravo e gladiador do Império Romano.",
			cartaz: "http://www.zeronave.com/attachments/43a3829ed8f8403db9db7beb8fecce8e7e429fb5/store/b218c2810d1a2d7e7dd22d42a54e45d0c3e00e3c986e62934018d8294ded/poster_image.jpg"
		},
		{
			id: "2",
			titulo: "COMO EU ERA ANTES DE VOCÊ",
			ano: 2016,
			produtora: "New Line Cinema",
			sinopse: "Will (Sam Claflin) é um garoto rico e bem-sucedido, até sofrer um grave acidente que o deixa preso a uma cadeira de rodas. Ele está profundamente depressivo e contrata uma garota (Emilia Clarke) do campo para cuidar dele. Ela sempre levou uma vida modesta, com dificuldades financeiras e problemas no trabalho, mas está disposta a provar para Will que ainda existem razões para viver.",
			cartaz: "http://www.zeronave.com/attachments/d0b12a96fef0d47c8e7fd7ccad0a7a3936ca2c11/store/23770e4004d12da93aa12e283d44e2b9485d021c9e401c22af590e2b9286/poster_image.jpg"
		}
		
	];

	$scope.novoFilme = {};

	$scope.removerFilme = function(id) {
		angular.forEach($scope.filmes, function(filme, i){
			if(filme.id == id){
				$scope.filmes.splice(i, 1);
			}
		});
	}

	$scope.adicionarFilme = function(){
		var filme = angular.copy($scope.novoFilme);
		filme.id = Date.now();
		$scope.filmes.push(filme);

		$scope.novoFilme = {};
	}
});