
angular.module("cookbook").service("ServicioRecetas",function ($http) {
    
    //Toda funcionalidad que quieras exponer hacia afuera,
    //tiene que estar publicada en this.

    //Obtener la colección de recetas
    this.obtenerRecetas = function () {
        return $http.get("http://localhost:8000/api/recetas");       
        
    };

    //Guardar la receta
    this.guardarReceta = function (receta, imagen) {

        var promesa;
        // La imagen viene:
        if(imagen){

            // Montamos un 'FormData' con la imagen (para transferir objetos).
            var datos = new FormData();
            datos.append("img",imagen)

            // Configuramos el content-type de la petición. Hay que indicarlo cmo 'undefined'
            // para que Angular jD infiera el tipo.
            var configuracion = {
                "headers": {
                    "Content-Type":undefined
                }
            };

            // Subimos la imagen al servidor

            promesa = $http
                .post("http://localhost:8000/upload", datos, configuracion)
                .then(function (respuesta){
                    //En ´path´me viene dada la ruta rela tiva de la imagen subida
                    var ruta = respuesta.data.path;

                    // Establecemos la ruta de la imagen en
                    // el objeto receta antes de guardarla
                    receta.rutaImagen = ruta;

                    return $http.post("http://localhost:8000/api/recetas",receta);

            });

        }// En caso de no tener imagen
        else{
            promesa = $http.post("http://localhost:8000/api/recetas",receta);
        }

        return promesa;
    };

    //Montamos la ruta absoluta a la imagen idicada
    this.obtenerRutaImagenAbsoluta = function (rutaRelativa) {
        return rutaRelativa ? ("http://localhost:8000/" + rutaRelativa): undefined;
    };
});
