angular.module("cookbook").component("ingredientes", {
    bindings: {
        coleccion: "<",  // enlace unidireccional, desde fuera hacia dentro (le pasan una colección pero los
        //cambios en ella, no salen hacia afuera. Salen hacia afuera x los eventos.
        nuevoIngrediente: "&", //Evento. Está definido con  "&"
        ingredienteEliminado: "&"
    },
    templateUrl: "views/ingredientes.html",
    controller: function () {
        
        var self = this;


        self.$onInit = function () {
            //Objeto nuevo ingrediente
            self.ingrediente = {
                nombre:"",
                cantidad: 1
            };

        };
        
        self.teclaPulsada = function(evento){
            // Obtengo la tecla pulsada
            var tecla = evento.which || evento.keyCode;

            // Si la tecla que se ha pulsado es el intro, el ingrediente tiene un nombre y éste no existe en
            // la lista, se da de alta
            
            if (tecla === 13 &&
                self.ingrediente.nombre &&
                !ingredienteExiste(self.ingrediente.nombre)){

                // Notificamos el nuevo ingrediente:
                self.nuevoIngrediente({"ingrediente": self.ingrediente});

                //Reseteo el ingrediente.
                self.ingrediente = {
                    nombre:"",
                    cantidad: 1
                }
            }
        };

        //Notificamos que se ha pulsado el botón eliminar sobre un ingrediente
        self.eliminar = function (indice) {
            // Notificamos el índice del ingrediente
            self.ingredienteEliminado ({"indice": indice});
        };

        // Comprobamos si existe o no el ingrediente indicado
        function ingredienteExiste(nombreIngrediente) {



            var coincidencias = self.coleccion.filter(function(ingrediente){
                return ingrediente.nombre.toLowerCase() === nombreIngrediente.toLowerCase();
            });

            return coincidencias.length > 0;
        }
    }
});
