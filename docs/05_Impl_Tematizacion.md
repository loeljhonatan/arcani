## Centralización del Estado en core-reactive-engine

1. Preparación (Instalación)
Primero, asegúrate de tener la librería de señales de NgRx en tu workspace:

```bash

npm install @ngrx/signals --legacy-peer-deps


```


2. Estructura de archivos
Dentro de tu librería libs/core/reactive-engine, crea la siguiente estructura de carpetas (si no la tienes) y el archivo:
text
libs/core/reactive-engine/src/
  lib/
    store/
      sintonia.store.ts  <-- Crear este archivo
    services/
      sintonia.service.ts



3. Código Base (Copia y Pega)
Abre el archivo sintonia.store.ts y pega esta estructura base adaptada a tu proyecto ARCANI:
typescript

```bash
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { computed } from '@angular/core';

// Definimos el estado basado en tu Estrategia ARCANI
export interface SintoniaState {
  aura: string;      // 7% de acción
  destello: string;  // 3% de acento
  fondo: string;    // 90% atmósfera
  radius: number;    // Geometría
  blur: number;      // Glassmorphism
  isBazar: boolean;  // Estado místico
}

const initialState: SintoniaState = {
  aura: '#00F0FF', 
  destello: '#FFF000',
  fondo: '#000000',
  radius: 12,
  blur: 10,
  isBazar: false
};

export const SintoniaStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((state) => ({
    // Mapeo automático a variables CSS para Tailwind 4 y PrimeNG 21
    styles: computed(() => ({
      '--aura-nicho': state.aura(),
      '--destello-nicho': state.destello(),
      '--bg-nicho': state.fondo(),
      '--radius-nicho': `${state.radius()}px`,
      '--blur-nicho': `blur(${state.blur()}px)`,
      '--p-primary-color': state.aura(), // Token de PrimeNG 21
    }))
  })),
  withMethods((store) => ({
    updateSintonia(config: Partial<SintoniaState>) {
      patchState(store, config);
    },
    setBazarMode() {
       // Activa la sintonía mística que definimos en el Módulo 0
       patchState(store, { isBazar: true, aura: '#00F0FF', fondo: '#050505', blur: 20 });
    }
  }))
);


```


4. Exportar la Frecuencia
No olvides añadir la exportación en libs/core/reactive-engine/src/index.ts:


```bash
export * from './lib/store/sintonia.store';

```

3. Aplicación Global
Para que la tematización sea reactiva en toda la web, ve a tu componente principal en la app del cliente (apps/client-web/src/app/app.component.ts) e inyecta el store:

```bash

import { Component, effect, inject } from '@angular/core';
import { SintoniaStore } from '@arcani/core-reactive-engine';

@Component({ ... })
export class AppComponent {
  readonly store = inject(SintoniaStore);

  constructor() {
    // Este efecto reacciona a CUALQUIER cambio en el Store y actualiza el CSS
    effect(() => {
      const cssVars = this.store.styles();
      Object.entries(cssVars).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value as string);
      });
    });
  }
}


```

🚀 ¿Qué logramos con esto?
Ahora, cuando cambies un valor en el Dashboard (Admin), el backend enviará la nueva configuración, tú actualizarás el Store con updateSintonia() y Tailwind 4 junto a PrimeNG se repintarán al instante sin recargar la página.




#### --------------------------------------------------------------------------------------


### Aquí tienes los pasos para implementar la base del servidor:


¿Quieres que pasemos a configurar el Backend en NestJS para que entregue los datos de los Nichos hacia este Store?

Para que el Backend (NestJS) sea el motor que alimente tus Angular Signals, vamos a construir la arquitectura en la app api-gateway. Necesitamos un servicio que no solo entregue datos, sino que resuelva la jerarquía de prioridades que definimos (Campaña > Evento > Nicho > Bazar).



1. Definir el Modelo de Datos (DTO)

Primero, en tu librería libs/shared/domain, crea una interfaz para que tanto el Backend como el Frontend hablen el mismo idioma.


```bash

// libs/shared/domain/src/lib/models/tema/sintonia.model.ts
export interface ConfiguracionVisual {
  id: string;
  aura: string;
  destello: string;
  fondo: string;
  radius: number;
  blur: number;
  css_animacion_fondo?: string;
  trama_preset: string;
}


```


2. Crear el Módulo de Sintonía en NestJS
Ejecuta este comando para generar el recurso en tu app de NestJS:

```bash

npx nx g @nx/nest:resource apps/api-gateway/src/app/sintonizador/sintonizador --type=rest


```

# MENSAJE
 NX  Generating @nx/nest:resource

? What transport layer do you use? ... 
rest
graphql-code-first
graphql-schema-first
microservice
ws

# RESPUESTA Para el proyecto ARCANI, la opción correcta es REST.

# MENSAJE ? Would you like to generate CRUD entry points? (y/N)
# Respuesta: y (Sí).


3. Implementar la Lógica del "Sintonizador" (Service)
En apps/api-gateway/src/app/sintonizador/sintonizador.service.ts, vamos a crear el método que decide qué tema enviar.



```bash
import { Injectable } from '@nestjs/common';
import { ConfiguracionVisual } from '@arcani/shared-domain';

@Injectable()
export class SintonizadorService {
  
  // Este método simula la base de datos por ahora
  async resolverSintonia(slug: string, stock: number): Promise<ConfiguracionVisual> {
    
    // 1. Lógica del Bazar (Regla < 25 SKUs)
    if (stock < 25) {
      return this.getBazarTheme();
    }

    // 2. Aquí iría la lógica de buscar en DB por el Slug del nicho
    // Si slug === 'anime', buscamos su ConfiguraciónVisual asociada
    return {
      id: 'uuid-maestro',
      aura: slug === 'anime' ? '#ff4500' : '#00F0FF',
      destello: '#FFF000',
      fondo: '#0a0a0a',
      radius: 12,
      blur: 15,
      trama_preset: 'manga'
    };
  }

  private getBazarTheme(): ConfiguracionVisual {
    return {
      id: 'bazar-id',
      aura: '#00F0FF', // Base Arcani
      destello: '#FFF000',
      fondo: '#050505',
      radius: 4,
      blur: 25,
      trama_preset: 'nebulosa'
    };
  }
}


```


4. Crear el Endpoint (Controller)
En apps/api-gateway/src/app/sintonizador/sintonizador.controller.ts:


```bash

import { Controller, Get, Query } from '@nestjs/common';
import { SintonizadorService } from './sintonizador.service';

@Controller('sintonia')
export class SintonizadorController {
  constructor(private readonly sintonizadorService: SintonizadorService) {}

  @Get('resolver')
  async getSintonia(
    @Query('slug') slug: string,
    @Query('stock') stock: number
  ) {
    return this.sintonizadorService.resolverSintonia(slug, stock);
  }
}


```
#### --------------------------------------------------------------------------------------









5. Conexión con Angular Signals
Ahora, en tu client-web, crearás un efecto que escame la URL y llame a este endpoint:

```bash

// En un Service de Angular o en el AppComponent
effect(() => {
  const currentSlug = this.routeSlug(); // Obtenido del Router
  this.http.get<ConfiguracionVisual>(`/api/sintonia/resolver?slug=${currentSlug}`)
    .subscribe(config => {
      this.sintoniaStore.updateSintonia(config); // ¡Se actualizan todos los CSS!
    });
});



```

Siguiendo las buenas prácticas de Nx y la arquitectura que has definido para ARCANI, el lugar correcto para crear el servicio que se comunica con el Backend es dentro de la librería:
libs/data-access/api-client/
¿Por qué aquí?
Reutilización: Al estar en libs, este servicio podrá ser usado tanto por client-web, client-mobile como por admin-dashboard sin duplicar código.
Responsabilidad Única: La carpeta data-access está diseñada exclusivamente para peticiones HTTP y manejo de datos crudos de la API.
Desacoplamiento: Tu aplicación (client-web) solo consume el servicio, no le importa cómo se hace la petición técnica.


5. Crear la librería data-access (si no existe) apiClient
Si aún no has creado la base de esa librería, ejecuta este comando primero:

```bash

npx nx g @nx/angular:lib --name=data-access-api-client --directory=libs/data-access/api-client --unitTestRunner=vitest-analog --linter=eslint --standalone

```

6. Comando para generar el servicio:
Ubícate en la raíz y ejecuta:

```bash

npx nx g @nx/angular:service services/sintonia --project=data-access-api-client


```

7. Implementación del Servicio (sintonia.service.ts):
Este servicio llamará al endpoint de NestJS que acabamos de crear y actualizará el SignalStore del motor reactivo.

```bash

// libs/data-access/api-client/src/lib/services/sintonia.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SintoniaStore } from '@arcani/core-reactive-engine';
import { ConfiguracionVisual } from '@arcani/shared-domain';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SintoniaApiService {
  private http = inject(HttpClient);
  private store = inject(SintoniaStore);
  private readonly API_URL = 'http://localhost:3000/api/sintonia';

  // Obtiene la configuración del backend y actualiza el Store automáticamente
  cargarSintoniaPorSlug(slug: string, stock = 100) {
    return this.http.get<ConfiguracionVisual>(`${this.API_URL}/resolver`, {
      params: { slug, stock }
    }).pipe(
      tap(config => this.store.updateSintonia(config))
    );
  }
}


```


8. Exportación en el index.ts de la librería:
Asegúrate de que el servicio sea visible para tus aplicaciones:


```bash

// libs/data-access/api-client/src/index.ts
export * from './lib/services/sintonia.service';


```

Ahora en tu componente o en un Guard de ruta, simplemente inyectas este servicio. Gracias a los Signals, en cuanto el servicio reciba la respuesta, toda la interfaz de la web cambiará de colores automáticamente.

¿Te gustaría que definamos el Guard de Angular para que la sintonía cambie automáticamente cada vez que el usuario navega a un nuevo Slug de nicho? Es la forma más limpia de automatizar la tematización.

#### --------------------------------------------------------------------------------------

# Functional Guard
Para que la Sintonía de Frecuencia sea automática y transparente para el fan, implementaremos un Functional Guard. Este Guard interceptará la navegación, extraerá el slug de la URL y disparará la carga de la tematización antes de que el componente se renderice.
Aquí tienes la implementación profesional paso a paso:


1. Crear el Guard en la librería de Data Access
Ejecuta el siguiente comando (ajusta el nombre del proyecto si es necesario):


```bash

npx nx g @nx/angular:guard guards/sintonia --project=data-access-api-client


```

# mensaje 
 NX  Generating @nx/angular:guard

? Which type of guard would you like to create? ... 
√ CanActivate
√ CanActivateChild
√ CanDeactivate
√ CanMatch

# RESPUESTA √ CanActivate


2. Lógica del Guard (sintonia.guard.ts)
Este Guard detecta el parámetro :nichoSlug y llama al servicio que actualiza el Signal Store.

```bash
import { CanActivateFn } from '@angular/router';
import { SintoniaApiService } from '../services/sintonia';
import { inject } from '@angular/core';

export const sintoniaGuard: CanActivateFn = (route, state) => {

  const sintoniaApi = inject(SintoniaApiService);

  // Extraemos el slug del nicho de la URL (ej: /anime)
  const slug = route.paramMap.get('nichoSlug');

  if (slug) {
    // Disparamos la carga. Como el servicio actualiza el Store
    // con un 'tap', no necesitamos esperar la respuesta para dejar pasar al usuario.
    sintoniaApi.cargarSintoniaPorSlug(slug).subscribe();
  }

  return true; // Permitimos la navegación
};


```

3. Exportación en el index.ts
No olvides exponer el Guard:


```bash

// libs/data-access/api-client/src/index.ts
export * from './lib/services/sintonia-api.service';
export * from './lib/guards/sintonia.guard';


```


3. Generar los componentes con Nx
Ejecuta estos comandos para crear la estructura de carpetas y los archivos necesarios dentro de apps/client-web:


```bash

# Para el Nicho View
npx nx g @nx/angular:component apps/client-web/src/app/features/nicho-view/nicho-view --standalone

# Para el Product Detail
npx nx g @nx/angular:component apps/client-web/src/app/features/product-detail/product-detail --standalone



```


4. Configurar las Rutas en client-web
Ahora aplicamos el Guard en tus rutas de Angular 21 para que proteja todas las secciones de nicho.



```bash
import { Routes } from '@angular/router';
import { sintoniaGuard } from '@arcani/data-access-api-client';

export const routes: Routes = [
  {
    // Esta ruta captura el nombre del nicho
    path: ':nichoSlug',
    canActivate: [sintoniaGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./features/nicho-view/nicho-view.component').then(m => m.NichoViewComponent)
      },
      {
        path: ':productSlug',
        loadComponent: () => import('./features/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home', // O el slug de tu nicho por defecto
    pathMatch: 'full'
  }
];



```



5. Habilita el HttpClient en apps/client-web/src/app/app.config.ts
Como tu servicio SintoniaApiService usa HttpClient, debes asegurarte de que Angular lo tenga disponible:


```bash

import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()), // Importante para recibir slugs en los componentes
    provideHttpClient(),
    // ... otros providers como PrimeNG
  ]
};


```

3. El Efecto Visual en apps/client-web/src/app/app.component.ts
Finalmente, inyectamos el Store en el componente raíz para que las variables CSS se inyecten en el HTML global cada vez que el Guard actualice los Signals.


#### --------------------------------------------------------------------------------------

```bash

import { Component, effect, inject } from '@angular/core';
import { SintoniaStore } from '@arcani/core-reactive-engine';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  private readonly store = inject(SintoniaStore);

  constructor() {
    // REACCIVIDAD TOTAL: 
    // Cuando el Guard llama al API y el API actualiza el Store, este efecto se dispara.
    effect(() => {
      const styles = this.store.styles(); // Obtenemos las variables CSS del Store
      const root = document.documentElement;

      Object.entries(styles).forEach(([key, value]) => {
        root.style.setProperty(key, value as string);
      });
      
      console.log('Frecuencia Sintonizada:', styles['--aura-nicho']);
    });
  }
}



```

🚀 ¿Qué probar ahora?
Inicia tu backend de NestJS (nx serve api-gateway).
Inicia tu web de Angular (nx serve client-web).
En el navegador, cambia la URL a localhost:4200/anime y luego a localhost:4200/gaming.



#### --------------------------------------------------------------------------------------





## 

```bash



```
#### --------------------------------------------------------------------------------------



```bash



```
#### --------------------------------------------------------------------------------------

```bash



```
#### --------------------------------------------------------------------------------------


## 

```bash



```
#### --------------------------------------------------------------------------------------



```bash



```
#### --------------------------------------------------------------------------------------

```bash



```
#### --------------------------------------------------------------------------------------


## 

```bash



```
#### --------------------------------------------------------------------------------------



```bash



```
#### --------------------------------------------------------------------------------------

```bash



```
#### --------------------------------------------------------------------------------------


## 

```bash



```
#### --------------------------------------------------------------------------------------



```bash



```
#### --------------------------------------------------------------------------------------

```bash



```
#### --------------------------------------------------------------------------------------


## 

```bash



```
#### --------------------------------------------------------------------------------------



```bash



```
#### --------------------------------------------------------------------------------------

```bash



```
#### --------------------------------------------------------------------------------------


## 

```bash



```
#### --------------------------------------------------------------------------------------



```bash



```
#### --------------------------------------------------------------------------------------

```bash



```
#### --------------------------------------------------------------------------------------


## 

```bash



```
#### --------------------------------------------------------------------------------------



```bash



```
#### --------------------------------------------------------------------------------------

```bash



```
#### --------------------------------------------------------------------------------------








Dado que ya creaste la librería libs/core/reactive-engine, este debe ser el único lugar donde resida el SignalStore que maneja la tematización.
Implementación Sugerida: Utiliza la librería NgRx SignalStore (que es el estándar moderno para Angular 21) para crear un store que gestione la sintonía. 
YouTube
YouTube
typescript
// libs/core/reactive-engine/src/lib/store/sintonia.store.ts
import { signalStore, withState, withComputed, withMethods } from '@ngrx/signals';
import { computed } from '@angular/core';

export const SintoniaStore = signalStore(
  { providedIn: 'root' },
  withState({
    aura: '#00F0FF',
    destello: '#FFF000',
    tema: 'dark' as 'light' | 'dark',
    radius: 12
  }),
  withComputed(({ aura, radius }) => ({
    // Variables CSS que Tailwind 4 y PrimeNG leerán automáticamente
    cssVariables: computed(() => ({
      '--aura-nicho': aura(),
      '--radius-nicho': `${radius()}px`,
      '--p-primary-color': aura(), // Sincronización directa con PrimeNG 21
    }))
  }))
);
Usa el código con precaución.

2. Integración de Tailwind v4 y PrimeNG 21.1
En Nx con Tailwind v4, la configuración ha cambiado. Ya no necesitas un tailwind.config.js complejo; ahora Tailwind escanea todo el workspace desde la raíz. 
Nx
Nx
Tip para PrimeNG: Para que Tailwind v4 no sea bloqueado por la especificidad de PrimeNG, configura el CSS Layer en tu app.config.ts:
typescript
providePrimeNG({
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: 'primeng',
        order: 'theme, base, primeng, utilities' // Tailwind entra en utilities
      }
    }
  }
})
Usa el código con precaución.

 
PrimeNG
PrimeNG
3. Sincronización con el Backend (NestJS)
En tu app api-gateway, debes crear un servicio que resuelva la Jerarquía de Prioridades (Campaña > Evento > Nicho) que definimos en el Modelo Relacional.
Estrategia: El backend no envía solo el producto, sino el objeto configuracion_visual calculado.
En Angular: Al navegar, un effect() en tu AppComponent detecta el cambio de ruta (slug), pide la sintonía al backend y actualiza el SintoniaStore.
4. Estructura de Librerías Recomendada
Basado en las mejores prácticas de Nx para empresas: 
JavaScript in Plain English
JavaScript in Plain English
libs/shared/domain: Solo interfaces e enums (compartido entre Angular y NestJS).
libs/shared/ui: Componentes de PrimeNG ya "pre-sintonizados" con Tailwind v4.
libs/shared/auth: Lógica de Firebase + Google Auth. 
Digital and Software Solutions
Digital and Software Solutions
 +1
Siguiente paso crítico
Ya tienes el esqueleto en GitHub. ¿Te gustaría que desarrollemos el "SintoniaInterceptor" en NestJS? Este se encargaría de inyectar automáticamente los colores del nicho en cada respuesta de producto basándose en el stock y las fechas de campaña.