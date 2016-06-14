System.register(["@angular/core", "@angular/router-deprecated", "./mis-recetas.component", "./nueva-receta.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, mis_recetas_component_1, nueva_receta_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (mis_recetas_component_1_1) {
                mis_recetas_component_1 = mis_recetas_component_1_1;
            },
            function (nueva_receta_component_1_1) {
                nueva_receta_component_1 = nueva_receta_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        //Con el metadato 'selector' establecemos el elemento HTML que instanciará este componente
                        selector: "app",
                        // <!--Con el acento ` se utiliza multilinea.-->
                        template: "  \n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"twelve columns\">\n                <header>\n                  <h1>My Cook-i-Book ng2</h1>\n                </header>\n            </div>\n        </div>\n         <!--Barra de navegaci\u00F3n-->\n    \n        <div class=\"row\">\n            <div class=\"twelve columns\">\n                <nav class=\"barra-navegacion\">\n                    <ul>\n                        <li>\n                            <!--Con la directiva [routerLink] establecemos el nombre de ruta a navegar-->\n                            <a [routerLink]=\"['MisRecetas']\">Mis Recetas</a>\n                        </li>\n                        <li>\n                            <!--Con la directiva [routerLink] establecemos el nombre de ruta a navegar-->\n                            <a [routerLink]=\"['NuevaReceta']\">Nueva Receta</a>\n                        </li>\n                    </ul>\n                </nav>\n            </div>\n        </div>\n    \n         <!--Zona din\u00E1mica. Directiva que est\u00E1 en ROUTER_DIRECTIVES-->\n        <router-outlet></router-outlet>\n    </div>\n    ",
                        //
                        styles: [
                            "\n    .barra-navegacion ul{\n    border-bottom: 1px solid #1EAEDB;\n    height: 42px;\n    }\n    .barra-navegacion li {\n        display: inline-block;\n        padding-top: 8px;\n        padding-left: 20px;\n        padding-right: 20px;\n    \n        height: 33px;\n    \n    }\n    .barra-navegacion li.seleccionada{\n        border-top: 1px solid #1EAEDB;\n        border-right: 1px solid #1EAEDB;\n        border-left: 1px solid #1EAEDB;\n        border-bottom: 1px solid #FFFFFF;\n    }\n    \n    .barra-navegacion a {\n        text-decoration: none;\n    }\n"
                        ],
                        // Con el metadato 'directives' indicamos a Angular2 cómo instanciar las directivas
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        // Con el metadato 'providers' indicamos a Angular2 cómo inyectar las dependencias
                        providers: [router_deprecated_1.ROUTER_PROVIDERS]
                    }),
                    router_deprecated_1.RouteConfig([
                        {
                            name: "MisRecetas",
                            path: "/mis-recetas",
                            component: mis_recetas_component_1.MisRecetasComponent,
                            useAsDefault: true
                        },
                        {
                            name: "NuevaReceta",
                            path: "/nueva-recetas",
                            component: nueva_receta_component_1.NuevaRecetaComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map