
angular.module("cookbook").service("ServicioRecetas",function ($http) {
    
    //Toda funcionalidad que quieras exponer hacia afuera,
    //tiene que estar publicada en this.

    //Obtener la colección de recetas
    this.obtenerRecetas = function () {
        return $http.get("http://localhost:8000/api/recetas");       
        
    };

    //Guardar la receta
    this.guardarReceta = function (receta) {
        return $http.post("http://localhost:8000/api/recetas",receta);
    };
});
