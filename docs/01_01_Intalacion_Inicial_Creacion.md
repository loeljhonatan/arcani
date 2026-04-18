

# INSTALACION INICIAL MONOREPO ARCANI
____________________________________________________________________________________________________

## Paso 1: Creación del Workspace (Cerebro del Proyecto) (MONOREPO VACIO)
Ejecuta este comando en tu terminal. Este comando creará la "caja" donde vivirán todas tus piezas:
En este Caso estamos Asignado el nombre arcani al protecto
```bash
npx create-nx-workspace@latest arcani --preset=apps
```
----------------------------------------------------------------------------------------------------

> #### MENSAJE
NX Let's create a new workspace [https://nx.dev/getting-started/intro]? Speed up your CI with Nx Cloud? ... YesSkip for nowNo, don't ask again.
NX ¿Creamos un nuevo espacio de trabajo [https://nx.dev/getting-started/intro]? ¿Acelerar tu CI con Nx Cloud? ... SíOmitir por ahoraNo, no volver a preguntar

> #### RESPUESTA --> Selecciona "Skip for now" (Omitir por ahora).
¿Por qué?
Como estamos en la fase inicial de desarrollo de ARCANI, no necesitamos configurar la nube todavía. Queremos centrar toda la potencia en estructurar los 16 nichos, el inventariado y la app móvil en tu máquina local. Podrás activar Nx Cloud más adelante con un solo comando si el proyecto crece mucho.
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
> #### Mensaje 
HELP IMPROVE NX BY SHARING YOU USAGE DATA?

> #### RESPUESTA --> Selecciona No.
¿Por qué?
Privacidad: Evitas que se envíen datos de telemetría de tu estructura de carpetas o comandos a los servidores de Nx.
Rendimiento: Aunque el impacto es mínimo, el CLI no perderá tiempo en procesos de envío de datos en segundo plano.
Enfoque: Queremos un entorno de desarrollo lo más limpio y "privado" posible para el manejo de tu lógica de negocio (los 16 nichos y el inventariado).
____________________________________________________________________________________________________
____________________________________________________________________________________________________

## Paso 2: Nos Posicionamos en el Proyecto
```bash
cd arcani
```
____________________________________________________________________________________________________
____________________________________________________________________________________________________

## Paso 3: Instala los plugins de generación de Angular y NestJS
Nx cambió la estructura de sus paquetes hace un tiempo. El plugin oficial para NestJS ahora se llama simplemente @nx/nest
```bash
npm install --save-dev @nx/angular @nx/nest
```
____________________________________________________________________________________________________
____________________________________________________________________________________________________

## Paso 4: Genera el Backend (El Corazón de ARCANI en NestJS):
Este manejará la base de datos PostgreSQL, Firebase Auth y la lógica de negocio.

Este manejará la base de datos de los 16 nichos y el inventario.
```bash

npx nx g @nx/nest:app --name=api-gateway --directory=apps/api-gateway --linter=eslint --unitTestRunner=jest

```
----------------------------------------------------------------------------------------------------
> ##### MENSAJE 
 NX  Generating @nx/nest:application


 NX   Schema does not support positional arguments. Argument 'apps/api-gateway' found

> #### RESPUESTA --> TERMINA DE CREAR LA API CREA 2 PAQUETES api-gateway y api-gateway-e2e

Es completamente normal. Cuando generas una aplicación con Nx, por defecto te crea dos proyectos:
api-gateway: Es el código real de tu servidor (NestJS), donde programarás la lógica de los nichos, productos y usuarios.
api-gateway-e2e: Significa End-to-End (de extremo a extremo). Es una carpeta separada para realizar pruebas automatizadas que simulan el comportamiento de un usuario real o un cliente consumiendo tu API de principio a fin.
____________________________________________________________________________________________________
____________________________________________________________________________________________________

## Paso 5: La Web del Cliente (Angular) - La Tienda Reactiva.
Aquí usaremos Signals, Tailwind y PrimeNG.

```bash
npx nx g @nx/angular:app apps/client-web --routing --style=css --standalone --inlineStyle --inlineTemplate=false
```
----------------------------------------------------------------------------------------------------
> #### MENSAJE

 NX   Install Nx's official editor extension to:

- Enable your AI assistant to do more by understanding your workspace
- Add IntelliSense for Nx configuration files
- Explore your workspace visually

? Install Nx Console? (you can uninstall anytime) (Y/n) » true

> #### RESPUESTA --> Selecciona Y (Yes).
¿Por qué instalar Nx Console?
Para un proyecto con múltiples aplicaciones (Web, API, Admin, App) y librerías compartidas, Nx Console es tu mejor aliado por tres razones:
Generadores Visuales: En lugar de recordar comandos largos de terminal (como el de angular:app), tendrás una interfaz en VS Code donde solo llenas formularios para crear componentes, servicios o módulos.
Visualización del Grafo: Podrás ver cómo tu API se conecta con tus Librerías y cómo estas alimentan a la Web. Es vital para no romper el "ADN" del proyecto.
Ejecución de Tareas: Te permite correr serve, build o test con un solo clic desde la barra lateral.

----------------------------------------------------------------------------------------------------

> #### MENSAJE

√ Install Nx Console? (you can uninstall anytime) (Y/n) · true

 NX   Successfully installed Nx Console!


 NX  Generating @nx/angular:application

? Which unit test runner would you like to use? ... 
vitest-angular
vitest-analog
jest
none

> #### RESPUESTA --> Selecciona vitest-angular.
¿Por qué elegir Vitest en 2026 para ARCANI?
Velocidad Extrema: Es mucho más rápido que Jest, lo que agradecerás cuando tu monorepo crezca con las 3 aplicaciones y múltiples librerías.
Integración con Vite: Angular 21 utiliza internamente Vite para el desarrollo, y Vitest comparte esa misma configuración. Esto hace que las pruebas sean idénticas al entorno real.
Modernidad: Es el estándar actual para proyectos de alto rendimiento.

----------------------------------------------------------------------------------------------------
> #### MENSAJE 
√ Install Nx Console? (you can uninstall anytime) (Y/n) · true

 NX   Successfully installed Nx Console!


 NX  Generating @nx/angular:application

√ Which unit test runner would you like to use? · vitest-angular
? Which E2E test runner would you like to use? ... 
playwright
cypress
none

> #### RESPUESTA --> Selecciona playwright.

Velocidad y Modernidad: Es más rápido y ligero que Cypress, ideal para el ecosistema de Angular 21.
Pruebas Móviles: Como planeas hacer una App, Playwright permite emular dispositivos móviles (iOS/Android) de forma nativa desde el navegador, lo cual es vital para probar el "ADN Reactivo" en pantallas pequeñas.
Traza de Errores: Tiene herramientas visuales increíbles para ver exactamente qué falló en tu flujo de compra o en ARCANI Studio.

----------------------------------------------------------------------------------------------------
> #### MENSAJE 
 NX   Successfully installed Nx Console!


 NX  Generating @nx/angular:application

√ Which unit test runner would you like to use? · vitest-angular
√ Which E2E test runner would you like to use? · playwright
? Which bundler do you want to use to build the application? ... 
esbuild
rspack
webpack

> #### RESPUESTA --> esbuild.

¿Por qué elegir esbuild para ARCANI?
Velocidad de Rayo: Es el motor por defecto en Angular 21. Reduce el tiempo de compilación de minutos a segundos, lo que acelera tu flujo de trabajo enormemente [1].
Soporte Nativo para Signals: Está optimizado para las nuevas funciones reactivas de Angular, asegurando que el cambio de colores en los 16 nichos sea instantáneo [2].
Modernidad: webpack está quedando atrás para aplicaciones nuevas; esbuild es el estándar para el alto rendimiento que buscas en tu "ADN Geek" [1].

----------------------------------------------------------------------------------------------------
> #### MENSAJE 
√ Install Nx Console? (you can uninstall anytime) (Y/n) · true

 NX   Successfully installed Nx Console!


 NX  Generating @nx/angular:application

√ Which unit test runner would you like to use? · vitest-angular
√ Which E2E test runner would you like to use? · playwright
√ Which bundler do you want to use to build the application? · esbuild
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? (y/N) » false

> #### RESPUESTA --> Seleccionar N (No) es la decisión más inteligente para la etapa actual de ARCANI.
Seleccionar N (No) es la decisión más inteligente para la etapa actual de ARCANI.
¿Por qué omitir SSR/SSG ahora?
Complejidad Innecesaria: El SSR (Server-Side Rendering) añade una capa de complejidad al manejo de Signals y al acceso al DOM (como cuando cambiamos las variables de CSS para los colores de los nichos).
Enfoque en la App: Como planeas hacer una App móvil, necesitas una SPA (Single Page Application) pura que funcione igual en la web que dentro de Capacitor/Ionic.
Velocidad de Desarrollo: Sin SSR, tu ciclo de "guardar y ver cambios" será instantáneo con esbuild.

Nota: Si en el futuro necesitas SEO extremo para los productos de colección, Angular permite añadir SSR más adelante con un solo comando.

____________________________________________________________________________________________________
____________________________________________________________________________________________________

## Paso 6: El Panel de Inventariado (Angular) - Control Total
Separamos el Admin de la tienda por seguridad y para que cargue más rápido para el cliente.

```bash
npx nx g @nx/angular:app apps/admin-dashboard --routing --style=css --standalone

```
----------------------------------------------------------------------------------------------------
> #### MENSAJE 
 NX  Generating @nx/angular:application

? Which bundler do you want to use to build the application? ... 
esbuild
rspack
webpack

> #### RESPUESTA --> Selecciona esbuild.
¿Por qué elegir esbuild para el Admin Dashboard?
Consistencia: Al usar el mismo motor que en la web-arcani, garantizas que los componentes de PrimeNG y los estilos de Tailwind se comporten exactamente igual en ambas aplicaciones.
Rendimiento en el Panel: El dashboard de inventariado suele manejar tablas grandes y muchos datos. esbuild optimiza el empaquetado para que la carga inicial sea ultrarrápida.
Preparado para el Futuro: Es el estándar de Angular 21 y el que mejor soporte tiene para Signals, lo que te permitirá ver cambios de stock o estados de "ARCANI Studio" en tiempo real sin recargas pesadas.
----------------------------------------------------------------------------------------------------

> #### MENSAJE 
 NX  Generating @nx/angular:application

√ Which bundler do you want to use to build the application? · esbuild
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? (y/N) » false

> #### RESPUESTA --> Selecciona N (No)

Selecciona N (No). Para un panel de administración (Admin Dashboard), el SSR no tiene sentido porque no necesitas indexar el inventario en buscadores como Google, sino que necesitas una aplicación ultra rápida y privada.
¡Estructura de Aplicaciones Completada! 🚀
Ahora que Nx ha terminado de generar las tres piezas fundamentales, tu monorepo ARCANI se ve así en VS Code:
apps/api-gateway: El "Cerebro" (NestJS).
apps/web-arcani: La "Tienda del Fan" (Angular 21 + Signals).

____________________________________________________________________________________________________
____________________________________________________________________________________________________

## Paso 7: Instalar Tailwind V4.

```bash
npm install -D tailwindcss postcss autoprefixer

```

```bash
npm install tailwindcss@next @tailwindcss/postcss@next

```

### Configuración en la Web (clien-web) (web-arcani)
Ve a tu archivo de estilos principal en apps/client-web/src/styles.css. En la v4, las variables de tu "ADN Geek" se definen así:

```bash
@import "tailwindcss";

```

### Habilitar PostCSS en Angular

Como la v4 depende de PostCSS, asegúrate de que en la raíz de tu app (apps/client-web/) exista un archivo postcss.config.js con esto:
si no esxiste se crea

es el que genera Nx por defecto al crear aplicaciones Angular
.postcssrc.json
```bash


module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

```
La Opción Recomendada: Borrar y Cambiar

Tailwind v4 prefiere archivos de configuración de JavaScript (.mjs o .js) porque el nuevo plugin @tailwindcss/postcss funciona mejor con la lógica de módulos moderna de Angular 21.
Borra el archivo .postcssrc.json en apps/web-arcani/.
Crea en su lugar apps/web-arcani/postcss.config.mjs con este contenido

```bash

export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```
____________________________________________________________________________________________________
____________________________________________________________________________________________________

## Paso 8: Instalar PrimeNG

```bash

# 1. Instalas la lógica de componentes e iconos
npm install primeng primeicons

# 2. Instalas el motor de temas moderno (para que sea reactivo)
npm install @primeuix/themes


npm install @primeng/themes --save


```
____________________________________________________________________________________________________
____________________________________________________________________________________________________

## Paso 9: creamos core-reactive-engine

#### LIBRERIA PARA LA REACVIVACION
¿Por qué crear libs/shared/reactive-engine ahora?
Sintonía Total: Si mañana decides que el "ADN de Anime" ya no es naranja sino rojo, lo cambias en la librería y automáticamente se actualiza en la Web, en el Panel Admin y en la App Móvil.
Signals Compartidos: El ThemeService que usa Angular 21 Signals vivirá aquí. Las tres aplicaciones lo importarán para reaccionar al cambio de nicho.
Preparación para la App: Cuando generemos la App con Ionic/Capacitor, solo tendremos que decirle: "Usa el motor de la librería compartida", y tu App nacerá ya con todos los colores y lógica de ARCANI.

```bash

npx nx g @nx/angular:lib --name=core-reactive-engine --directory=libs/core/reactive-engine --unitTestRunner=vitest-analog --linter=eslint --standalone


```
____________________________________________________________________________________________________
____________________________________________________________________________________________________

## Paso 10: LIBRERIA PARA LOS MODELOS  (INTERFACES, ENTIDADES)(DATA MODELS)
Este es el paso más importante. Crearemos una librería donde definiremos qué es un "Nicho", un "Producto" y un "Usuario". Esto permitirá que NestJS y Angular usen exactamente las mismas interfaces.

```bash

npx nx g @nx/js:lib --name=shared-domain --directory=libs/shared/domain --projectNameAndRootFormat=as-provided --bundler=tsc


```
----------------------------------------------------------------------------------------------------
> #### MENSAJE 
 NX  Generating @nx/js:library

? Which linter would you like to use? ... 
eslint
none

> #### RESPUESTA --> Selecciona eslint.

¿Por qué elegir ESLint para ARCANI?
Código Limpio: Como esta librería (shared-domain) será el "diccionario" que usarán tanto NestJS como Angular 21, necesitas que las interfaces y tipos sigan reglas estrictas. ESLint evitará errores comunes de tipado.
Consistencia en el Monorepo: Nx ya configuró eslint para tus aplicaciones (api-arcani, web-arcani). Al usarlo también en las librerías, aseguras que todo el proyecto se sienta como una sola pieza.
Detección de Errores en Tiempo Real: Si intentas usar un "Nicho" que no existe o una propiedad mal escrita, ESLint te avisará antes de que intentes compilar.

----------------------------------------------------------------------------------------------------
> #### MENSAJE 
 NX  Generating @nx/js:library

√ Which linter would you like to use? · eslint
? Which unit test runner would you like to use? ... 
jest
vitest
none
> #### RESPUESTA --> Selecciona vitest.

¿Por qué Vitest para la librería de Dominio?
Velocidad: Al ser una librería compartida (shared-domain) que importarás en NestJS y Angular, necesitas que las pruebas corran al instante cada vez que cambies una interfaz de los 16 nichos.
Consistencia: Ya configuramos Vitest para tu aplicación web. Usar el mismo motor en las librerías evita conflictos de configuración en el monorepo y hace que el comando nx test sea uniforme.
Modernidad: Vitest es nativo de ESM (ECMAScript Modules), lo cual encaja perfecto con Angular 21 y Tailwind 4.


____________________________________________________________________________________________________
____________________________________________________________________________________________________

## ¡El Workspace está listo! 🚀
Ahora que Nx terminó de generar la estructura

____________________________________________________________________________________________________
____________________________________________________________________________________________________
____________________________________________________________________________________________________





