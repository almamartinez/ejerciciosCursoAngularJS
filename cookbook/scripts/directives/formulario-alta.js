
angular.module("cookbook").directive("formularioAlta", function () {

    return {
        // Con 'restrict' indicamos cómo vamos a usar la directiva.
        // Con 'A' la usamos como atributo de un elemento html.
        // Con 'E' la usamos como elemento html.
        restrict: "EA",

        // Con 'template' o 'templateUrl' indicamos la jerarquía de componentes
        // que el navegador va a renderizar como vista de la directiva.
        templateUrl: "views/formulario-alta.html",

        // Con 'scope' definimos la interfaz de comunicación entre la
        // directiva y el scope padre (controlador / componentes).
        scope: {
            // Con '&' notificamos eventos al controlador padre.
            alHacerClick: "&"
        },

        // Con 'link' establecemos la lógica de la  directiva y además
        // podemos hacer manipulación del DOM de la vista.
        link: function (scope) {

            // Creo un nuevo objeto receta:
            scope.receta = {
                nombre: "",
                ingredientes:[]
            };
            
            //Añadimos el ingrediente procedente del componente
            // a la colección que cuelga de la receta.
            scope.agregarIngrediente = function (ingrediente) {
                scope.receta.ingredientes.push(ingrediente);
            };

            //Eliminamos el ingrediente que está en la posición indicada por le parámetro índice
            scope.eliminarIngrediente = function (indice) {
                scope.receta.ingredientes.splice(indice, 1);
            };

            // Manejador del botón 'Aceptar'
            scope.notificarTexto = function () {

                // Notificar al scope padre que se ha hecho click
                scope.alHacerClick({ receta: scope.receta });
            };

            //Validador de la vista. Comprobamos que el formulario tiene los datos
            // necesarios para gurardar la receta
            scope.puedoGuardar = function () {

                return scope.receta.nombre && scope.receta.ingredientes.length > 0;
            }
        }
    };
});
