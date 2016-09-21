angular.module('alurapic')
	.controller('FotoController', ['$scope', 'recursoFoto', '$routeParams', 'cadastroDeFotos', function($scope, recursoFoto, $routeParams, cadastroDeFotos) {
    
		$scope.foto = {};
		$scope.mensagem = '';
    
        if($routeParams.fotoId){
            recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
                $scope.foto = foto;
            }, function(erro){
                console.log(erro);
                $scope.mensagem = 'Não foi possível obter a foto'
            });
            /*$http.get('/v1/fotos/' + $routeParams.fotoId)
            .success(function(foto) {
                $scope.foto = foto;
            })
            .error(function(erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível obter a foto';
            });*/
        }

		$scope.submeter = function() {

            // executa a lógica de adicionar a foto apenas se o formulario estiver válido
			if ($scope.formulario.$valid) {
                cadastroDeFotos.cadastrar($scope.foto)
                .then(function(dados) {
                    $scope.mensagem = dados.mensagem;
                    if (dados.inclusao) $scope.foto = {};
                })
                .catch(function(erro) {
                    $scope.mensagem = erro.mensagem;
                })
			}
		};
	}]);