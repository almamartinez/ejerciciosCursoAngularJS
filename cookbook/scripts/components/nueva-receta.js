
angular.module("cookbook").component("nuevaReceta",{

   // Con 'bindings' establecemos la interfaz de comunicación del componente.
   // Solicitamos el enlace de '$router', que lo hace automáticamente AngularJS en el ng-outlet.
   bindings:{ //Hay que indicar el binding con el router para poder usarlo en el controller (self).
      $router:"<" //enlace unidireccional. Nunca podría ser bidireccional, siempre "<" e indica de fuera hacia adentro.
   },
   templateUrl:"views/nueva-receta.html",
   //Inyección de dependencias del servicio
   controller: function (ServicioRecetas) {
      // Guardamos la referencia del componente
      var self = this;
      // Guardamos la receta.
      self.guardarUnaReceta = function (receta) {

         ServicioRecetas.guardarReceta(receta).then(function(response) {

            // Se guarda bien la receta, vamos a verla a la lista de recetas.
            //Hay que navegar manualmente.

            // $router tiene los datos relacionados con la ruta que se está navegando.
            // Puedo ejecutar su función 'navigate()' para hacer una redirección.
            self.$router.navigate(["MisRecetas"]);
            
         });
      };
   }
});
