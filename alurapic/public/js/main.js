// O primeiro parâmetro é o nome do módulo, o segundo é um array de dependências do módulo
// minhasDiretivas = nome do módulo onde está configurado as diretivas utilizadas nesse projeto
angular.module('alurapic', ['minhasDiretivas','ngAnimate', 'ngRoute', 'meusServicos'])
	.config(function($routeProvider, $locationProvider) {

        // habilita o modo html5 para deixar a url mais amigável
		$locationProvider.html5Mode(true);

        /* Configurações de rotas. quando o endereço for "/fotos" o template que será carregado
        no ng-view é 'partials/principal.html' e o controller dele 'FotosController' */
		$routeProvider.when('/fotos', {
			templateUrl: 'partials/principal.html',
			controller: 'FotosController'
		});

		$routeProvider.when('/fotos/new', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		});
    
        $routeProvider.when('/fotos/edit/:fotoId', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        // Rota para quando o endereço solicitado for diferentes das rotas configuradas acima
		$routeProvider.otherwise({redirectTo: '/fotos'});

	});