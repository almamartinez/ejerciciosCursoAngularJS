angular.module("cookbook").component("ingredientes", {
    bindings: {
        coleccion: "<",
        nuevoIngrediente: "&",
        ingredienteEliminado: "&"
    },
    templateUrl: "views/ingredientes.html",
    controller: function () {
        
        var self = this;


        self.$onInit = function () {
            //Objeto nuevo ingrediente
            self.nuevoIngrediente = {
                nombre:"",
                cantidad: 1
            };

            //Colección de ingredientes
            self.coleccion = [];
        };
        
        self.teclaPulsada = function(evento){
            // Obtengo la tecla pulsada
            var tecla = evento.which || evento.keyCode;

            // Si la tecla que se ha pulsado es el intro
            if (tecla === 13 && self.nuevoIngrediente.nombre){

                // Añado el ingrediente a la colección
                self.coleccion.push(self.nuevoIngrediente);

                //Reseteo el ingrediente.
                self.nuevoIngrediente = {
                    nombre:"",
                    cantidad: 1
                }
            }
        };
    }
});
