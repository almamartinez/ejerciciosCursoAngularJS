
angular.module("cookbook").component("nuevaReceta",{
   templateUrl:"views/nueva-receta.html",
   //Inyección de dependencias del servicio
   controller: function (ServicioRecetas) {
      // Guardamos la referencia del componente
      var self = this;
      // Guardamos la receta.
      self.guardarUnaReceta = function (texto) {

         var receta = { nombre: texto };

         ServicioRecetas.guardarReceta(receta).then(function(response) {

            // $scope.recetas.push(response.data);

         });
      };
   }
});
