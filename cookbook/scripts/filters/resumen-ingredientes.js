
angular.module("cookbook").filter("ResumenIngredientes",
        function () {//se puede hacer inyección de dependencias aquí

            return function (ingredientes) {

                //inicializa ingredientes si no existiese.
                ingredientes = ingredientes || [];
                // Recorremos la colección e ingredientes para obtener de cada uno de ellos
                // una cadena de texto que indique "ingrediente (cantidad gr.)"
                var coleccion = ingredientes.reduce(function (acumulado, ingrediente) {

                    var texto = ingrediente.nombre + " (" + ingrediente.cantidad +" gr.)"

                    acumulado.push(texto);

                    return acumulado;

                }, []);

                return coleccion.join(", ");
            }
});
