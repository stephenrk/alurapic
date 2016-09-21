        // chamamos o módulo principal "alurapic" e logo após definimos o controller
        angular.module('alurapic').controller('FotosController', function($scope, recursoFoto) {

            $scope.fotos = [];
            $scope.filtro = '';
            $scope.mensagem = '';

            recursoFoto.query(function(fotos) {
                $scope.fotos = fotos;
            }, function(erro) {
                console.log(erro);
            });

        /*  $http.get('/v1/fotos')
            // executado quando é retornado com sucesso
            .success(function(retorno) {
                console.log(retorno);
                $scope.fotos = retorno; // não precisa fazer retorno.data
            })
            // se algo der errado, vem pra cá
            .error(function(erro) {
                console.log(erro);
            });*/

            $scope.remover = function(foto) {


                recursoFoto.delete({fotoId: foto._id}, function() {
                    var indiceDaFoto = $scope.fotos.indexOf(foto);
                    $scope.fotos.splice(indiceDaFoto, 1);
                    $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
                }, function(erro) {
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
                });
                /*$http.delete('v1/fotos/' + foto._id)
                .success(function() {
                    var indiceDaFoto = $scope.fotos.indexOf(foto);
                    $scope.fotos.splice(indiceDaFoto, 1);
                    $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso';
                })
                .error(function(erro) {
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
                });*/

            };

        });