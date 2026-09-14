# hola-app · Parte 2: componentes y rutas hijas

Solución del ejercicio de la **Parte 2** de la guía de la clase 1 del ramo
IIP323W · Tecnologías y Aplicaciones Web y Móviles (UDD).

Continúa donde termina **hola-app-parte-1**: la misma app, ahora sin repetición
y con una ruta anidada.

## Qué cambia respecto de la parte 1

- **El encabezado ya no está copiado.** Vivía dos veces, en `home` y en `acerca`.
  Ahora es un solo componente, `<app-encabezado>`, y cada página le pasa su
  título. El botón atrás aparece solo cuando la página entrega `volverA`, así que
  sale en `acerca` y no en `home`. Prueba a cambiar el color del toolbar en
  `encabezado.component.html`: cambia en las dos páginas de una vez.
- **`/home/consejo` es una ruta hija.** Vive en el bloque `children` de `home` y
  se pinta en su `<router-outlet>`, así que la tarjeta del consejo aparece
  **dentro** de home, sin salir de la página. Fíjate en la URL.

## Los dos mecanismos del ejercicio

| Paso | Qué se practica | Dónde mirarlo |
| --- | --- | --- |
| 3 | Un componente reutilizable que recibe datos del padre con `@Input()` | `src/app/encabezado/` |
| 4 | Rutas hijas con `children` y el `<router-outlet>` de la página padre | `src/app/app.routes.ts`, `src/app/home/consejo/` |

## Correrlo

```bash
npm install
ionic serve
```

Queda en <http://localhost:8100>. Entra a <http://localhost:8100/home/consejo>
para ver la ruta hija directo por URL.

## Nota sobre la versión

Creado con `ionic start hola-app blank --type=angular-standalone`, que hoy genera
**Ionic 9 + Angular 22**. En esa versión `IonicModule` ya no se exporta desde
`@ionic/angular`: cada página importa los componentes que usa uno a uno.
