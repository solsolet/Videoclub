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