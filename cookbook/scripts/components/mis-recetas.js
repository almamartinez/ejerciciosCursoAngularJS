
/* el nombre del componente tiene que ir con lower CamelCase*/
angular.module("cookbook").component("misRecetas",{
    // Con 'template'/'templateUrl' establecemos la vista del componente
    templateUrl: "views/mis-recetas.html",

    // en 'controller' establecemos la lógica del componente
    //Pasamos el servicio por inyección de dependencias.
    controller: ["ServicioRecetas",function (ServicioRecetas) {

        //Si usamos this en la función interna, nos referimos al contexto de esa función, necesitamos
        //el contexto de esta función.
        var self = this;

        //Podemos engancharnos al hook '$onInit', que se dispara cuando el componente se inicia
        self.$onInit = function () {
            // Como 'obtenerRecetas()' retorna una promesa, tengo que
            // pasar un manejador a su propiedad then
            ServicioRecetas.obtenerRecetas().then(function (response) {

                //En la propiedad 'data' de la respuesta HTTP tenemos el cuerpo dcd..e la misma.
                self.recetas = response.data;
            });
        }

    }]
});