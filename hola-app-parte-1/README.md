# hola-app · Parte 1: input y navegación

Solución del ejercicio de la **Parte 1** de la guía de la clase 1 del ramo
IIP323W · Tecnologías y Aplicaciones Web y Móviles (UDD).

## Qué hace

Una app con dos pantallas:

- **Saludador (`/home`)** — un campo para el nombre y un botón que muestra el
  saludo en la misma pantalla. Si el campo está vacío, pregunta el nombre en vez
  de saludar, y antes de apretar el botón no se muestra nada.
- **Acerca de (`/acerca`)** — la segunda página, a la que se llega con un botón
  desde `home` y de la que se vuelve con el botón atrás de la barra.

## Los dos mecanismos del ejercicio

| Paso | Qué se practica | Dónde mirarlo |
| --- | --- | --- |
| 1 | Un input enlazado con `[(ngModel)]`, una acción con `(click)` y `@if` para mostrar el resultado | `src/app/home/` |
| 2 | Rutas con `loadComponent`, navegar con `routerLink` y volver con `ion-back-button` | `src/app/app.routes.ts`, `src/app/acerca/` |

## Correrlo

```bash
npm install
ionic serve
```

Queda en <http://localhost:8100>.

## Nota sobre la versión

Creado con `ionic start hola-app blank --type=angular-standalone`, que hoy genera
**Ionic 9 + Angular 22**. En esa versión `IonicModule` ya no se exporta desde
`@ionic/angular`: cada página importa los componentes que usa uno a uno
(`IonHeader`, `IonContent`, `IonButton`…). Es lo que verás en los `imports` de
cada componente.

La continuación de este ejercicio está en **hola-app-parte-2**.
