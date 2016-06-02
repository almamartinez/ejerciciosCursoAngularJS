var controlador = function ($scope,ServicioRecetas) {

    // Como 'obtenerRecetas()' retorna una promesa, tengo que
    // pasar un manejador a su propiedad then
    ServicioRecetas.obtenerRecetas().then(function (response) {

        //En la propiedad 'data' de la respuesta HTTP tenemos el cuerpo de la misma.
        $scope.recetas = response.data;
    });

    // Guardamos la receta.
    $scope.guardarUnaReceta = function () {
        
        var receta = { nombre: $scope.nombreReceta };

        ServicioRecetas.guardarReceta(receta).then(function(response) {

            $scope.recetas.push(response.data);

        });
    };
};

controlador.$inject = ["$scope","ServicioRecetas"];
angular.module("cookbook").controller("ListaRecetas", controlador);

