// Con 'import' hacemos importación de clases.
//import { todo lo que queramos importar, separado por comas } from "@angular/paquete"
import { Component } from "@angular/core";
//importo sendos arrays de objetos de Router para poder pasarlo en los metadatas.
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "@angular/router-deprecated";
import { MisRecetasComponent } from "./mis-recetas.component";
import { NuevaRecetaComponent } from "./nueva-receta.component";


@Component({ //Un component es un decorador y da comportamiento a una clase.

    //Con el metadato 'selector' establecemos el elemento HTML que instanciará este componente
    selector: "app",
    // <!--Con el acento ` se utiliza multilinea.-->
    template: `  
    <div class="container">
        <div class="row">
            <div class="twelve columns">
                <header>
                  <h1>My Cook-i-Book ng2</h1>
                </header>
            </div>
        </div>
         <!--Barra de navegación-->
    
        <div class="row">
            <div class="twelve columns">
                <nav class="barra-navegacion">
                    <ul>
                        <li>
                            <!--Con la directiva [routerLink] establecemos el nombre de ruta a navegar-->
                            <a [routerLink]="['MisRecetas']">Mis Recetas</a>
                        </li>
                        <li>
                            <!--Con la directiva [routerLink] establecemos el nombre de ruta a navegar-->
                            <a [routerLink]="['NuevaReceta']">Nueva Receta</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    
         <!--Zona dinámica. Directiva que está en ROUTER_DIRECTIVES-->
        <router-outlet></router-outlet>
    </div>
    `,
    //
    styles: [
        `
    .barra-navegacion ul{
    border-bottom: 1px solid #1EAEDB;
    height: 42px;
    }
    .barra-navegacion li {
        display: inline-block;
        padding-top: 8px;
        padding-left: 20px;
        padding-right: 20px;
    
        height: 33px;
    
    }
    .barra-navegacion li.seleccionada{
        border-top: 1px solid #1EAEDB;
        border-right: 1px solid #1EAEDB;
        border-left: 1px solid #1EAEDB;
        border-bottom: 1px solid #FFFFFF;
    }
    
    .barra-navegacion a {
        text-decoration: none;
    }
`
    ],
    // Con el metadato 'directives' indicamos a Angular2 cómo instanciar las directivas
    directives: [ROUTER_DIRECTIVES],
    // Con el metadato 'providers' indicamos a Angular2 cómo inyectar las dependencias
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        name: "MisRecetas",
        path: "/mis-recetas",
        component: MisRecetasComponent,
        useAsDefault: true
    },
    {
        name: "NuevaReceta",
        path: "/nueva-recetas",
        component: NuevaRecetaComponent
    }
])

export class AppComponent { }
