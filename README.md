# Videoclub
## Ejercicio 1
### Ejercicio 1.1
Se ha creado el proyecto `Videoclub` e Ionic ha creado diferentes caspetas y ficheros:
- `src`: código fuente pinricpal de nuestra aplicación
    - `app`, `assets`, `enviroment`, `theme`
        - sobre `app` en particular tenemos las distintas pantallas de la aplicación en forma de carpeta (colo lo acabamos de crear solo tiene `home`). Dentro de ésta estan los archivos `app.[...]`
            - `app.component.ts`: componente principal
            - `app.component.html`: plantilla del componente principal
            - `app.component.scss`: hoja de estilo del componente principal
            - `app.module.ts`: módulo principal de la aplicación
            - `app-routing.module.ts`: fichero de rutas

    - `index.html`: archivo principal que iniciará nuestra aplicación
    - `main.ts`: archivo que lanza el navegador que cargará nuestra aplicación
    - otros
- `node_modules`: modulos y dependencias instaladas de Ionic
- `.gitignore` (contiene todos los archivos temporales así como `node_modules`)

`intex.html` es la página incluida por defecto, carga con la etiqueta `<app-root>` que coge la primera ruta del archivo `app-routing.module.ts`.
```ts
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }, ...
```
### Ejercicio 1.2
```zsh
ionic generate page <nombre_page>
```

## Ejercicio 3
### Ejercicio 3.2
He probado a entrar y salir de la página de `autor` y me ha salido en este orden:
```bash
[Log] AutorPage ngOnInit (src_app_autor_autor_module_ts.js, line 68)
[Log] ionViewWillEnter AutorPage (src_app_autor_autor_module_ts.js, line 71)
[Log] ionViewDidEnter AutorPage (src_app_autor_autor_module_ts.js, line 74)
[Log] ionViewWillLeave AutorPage (src_app_autor_autor_module_ts.js, line 78)
[Log] ionViewDidLeave AutorPage (src_app_autor_autor_module_ts.js, line 81)
[Log] ionViewWillEnter AutorPage (src_app_autor_autor_module_ts.js, line 71)
[Log] ionViewDidEnter AutorPage (src_app_autor_autor_module_ts.js, line 74)
[Log] ionViewWillLeave AutorPage (src_app_autor_autor_module_ts.js, line 78)
[Log] ionViewDidLeave AutorPage (src_app_autor_autor_module_ts.js, line 81)
[Log] AutorPage ngOnDestroy (src_app_autor_autor_module_ts.js, line 84)
```