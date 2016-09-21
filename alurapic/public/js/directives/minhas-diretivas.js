angular.module('minhasDiretivas', ['meusServicos'])
	.directive('meuPainel', function() {

		var ddo = {};

        // restringe a diretiva para ser usada apenas como: "E" - elemento ou "A" - atributo
		ddo.restrict = "AE";
    
        // ativa a transclusão nos elementos filhos da diretiva
        ddo.transclude = true;

		ddo.scope = {
            /* se o nome do parâmetro for igual, podemos omitir ele e deixar
            apenas o @ que significa que o elemento será armazenado como string */
            titulo: '@'
        };

        // local onde está a "partial" que define a diretiva
        ddo.templateUrl = 'js/directives/meu-painel.html';

		return ddo;
	})
    .directive('minhaFoto', function() {

        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        // outra forma de configurar o template que será carregado na diretiva
        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';
        
        return ddo;
    })
    .directive('meuBotaoPerigo', function() {
        var ddo = {};
        ddo.restrict = "E";
        ddo.scope = {
            nome: '@',
            acao: '&'
        }
        ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>'
        
        return ddo;
    })
    .directive('meuFocus', function() {
        var ddo = {};
        ddo.restrict = 'A'
        ddo.link = function(scope, element) {
            scope.$on('fotoCadastrada', function() {
                element[0].focus();
            });
        }
    
        return ddo;
    })
    .directive('meusTitulos', function() {
        var ddo = {};
        ddo.restrict = 'E';
        ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
        ddo.controller = function($scope, recursoFoto) {
            recursoFoto.query(function(fotos) {
                $scope.titulos = fotos.map(function(foto) {
                    return foto.titulo;
                })
            })
        }
    
        return ddo;
    });