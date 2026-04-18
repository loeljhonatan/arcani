#### --------------------------------------------------------------------------------------

# ¡Siguiente Paso: Las "Llaves" del ADN de ARCANI! 🔑

Para que tus Apps de Angular y tu API de NestJS reconozcan a los usuarios, necesitamos el objeto de configuración de Firebase.
En la consola de Firebase, haz clic en el icono de Web (</>) para registrar una app.
Ponle de nombre: arcani-fandom-web.
Copia el objeto firebaseConfig que te aparecerá (el que tiene apiKey, authDomain, etc.).
¿Ya tienes ese objeto copiado? Si es así, lo pegaremos en un archivo de configuración en tu librería shared-auth para que todas tus Apps lo usen.
¿Creamos ahora la librería libs/shared/auth para manejar el login de Google? Es el último "módulo maestro" que nos falta.


1. Ve a la Consola de Firebase.

https://console.firebase.google.com/?pli=1


2. Haz clic en "Agregar proyecto" y ponle de nombre arcani-fandom

   - Habilitar Gemini: Para la asistencia durante la programación de los módulos de Angular y NestJS.
   - Desactiva Google Analytics por ahora (para ir más rápido) y dale a "Crear proyecto".
    
            1. ¿Por qué desactivarlo ahora?
            Velocidad: Te ahorras unos 3-5 minutos de configuración manual en la consola de Firebase.
            Limpieza de Desarrollo: Durante las pruebas locales (localhost), Google Analytics registrará tus propios clics y visitas como si fueran de fans reales, "ensuciando" tus estadísticas iniciales con datos de prueba.

            2. ¿Cuándo es el momento ideal para activarlo?
            El mejor momento es justo antes de subir la web a producción (a tu dominio ://arcani.com). En ese punto:
            Vas a la Consola de Firebase.
            Entras en Project Settings > Integrations.
            Haces clic en Google Analytics > Enable.
            Vinculas tu cuenta de marca y ¡listo!

            3. ¿Afecta al Login de Google?
            No. El sistema de Authentication (que es lo que necesitamos para el login) funciona perfectamente con o sin Analytics. Son módulos independientes.

   - crear proyecto
   - Una vez creado, en el menú lateral ve a Build > Authentication y dale a "Get Started".
   - En la pestaña Sign-in method, elige Google y actívalo.

3. Desactiva Google Analytics por ahora (para ir más rápido) y dale a "Crear proyecto".

4. Una vez creado, en el menú lateral ve a Build > Authentication y dale a "Get Started".
                                           compilacion > Autentificacion 

5. DESDE AQUI REVISA LA DOCUMENTACION WORD "creacion de Autentificacion FireBase.docx"

6. ¿Ya tienes el proyecto de Firebase creado y el método de Google activado? Avísame para darte el código del AuthService que usaremos en tu librería compartida para que el Admin y la Web empiecen a reconocer a los usuarios.
¿Configuramos las API Keys ahora?

#### --------------------------------------------------------------------------------------

¡Perfecto! Ya tenemos las "llaves del reino" de ARCANI. Ahora vamos a integrarlas de forma profesional en tu monorepo usando Angular 21 y Signals

1. instalado @angular/fire y firebase

¡Momento de la Verdad! 🚀
Una vez que le diste a Guardar, ya tienes el "permiso" de Google para que tus fans inicien sesión. Ahora necesitamos inyectar esto en el código de tu monorepo.
¿Ya tienes instalado @angular/fire y firebase en tu terminal?
Si no, ejecútalo ahora:

```bash

npm install firebase @angular/fire --force

```

2. Generar la Librería Auth (El contenedor)

Ejecuta este comando en tu terminal para crear físicamente las carpetas:

```bash

npx nx g @nx/angular:lib --name=shared-auth --directory=libs/shared/auth --unitTestRunner=vitest-analog --linter=eslint --standalone

```


3. Guardar la Configuración
Ve a tu librería libs/shared/auth/src/lib/ y crea el archivo firebase.config.ts:


```bash

// libs/shared/auth/src/lib/firebase.config.ts
export const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

```

4. Crear el AuthService con Signals
En la misma carpeta (libs/shared/auth/src/lib/), crea el archivo auth.service.ts. 
Este servicio usará el motor de Firebase para el login de Google: 

```bash

import { Injectable, signal, inject } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, User, signOut, onAuthStateChanged } from 'firebase/auth';
import { firebaseConfig } from './firebase.config';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Inicializamos Firebase
  private app = initializeApp(firebaseConfig);
  private auth = getAuth(this.app);
  private provider = new GoogleAuthProvider();

  // Signal para el usuario (identidad reactiva)
  user = signal<User | null>(null);

  constructor() {
    // Escuchamos si el usuario ya estaba logueado
    onAuthStateChanged(this.auth, (user) => {
      this.user.set(user);
    });
  }

  async loginWithGoogle() {
    try {
      const result = await signInWithPopup(this.auth, this.provider);
      this.user.set(result.user);
    } catch (error) {
      console.error('Error en la sintonía de identidad:', error);
    }
  }

  async logout() {
    await signOut(this.auth);
    this.user.set(null);
  }
}


```

5. Asegúrate de que en libs/shared/auth/src/index.ts diga:

```bash

export * from './lib/auth.service';
export * from './lib/firebase.config';


```


6. ¿Cómo probarlo en la Web?
En tu app.component.ts de la web, inyecta el AuthService y pon un botón en el HTML que diga:

```bash

<p-button label="Iniciar Enlace" (onClick)="authService.loginWithGoogle()"></p-button>

```

¿Quieres que te pase el código para que al loguearse, la web de ARCANI muestre la foto de perfil de Google del fan con el color de su nicho favorito?


#### --------------------------------------------------------------------------------------


#### --------------------------------------------------------------------------------------

## IMPLEMENTAR LA AUTENTIFICACION EL LA WEB

¡Excelente! Vamos a hacer que la interfaz de ARCANI reconozca al fan de inmediato. Usaremos los Signals de tu AuthService y del ThemeService para que el avatar brille con el color del nicho activo.
Sigue estos pasos en tu web-arcani:

1. Actualizar app.component.ts
Modifica tu componente principal para inyectar el servicio de autenticación que creamos en la librería:


```bash

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '@arcani/core-reactive-engine';
import { AuthService } from '@arcani/shared-auth'; // <-- Importa tu nuevo servicio
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar'; // <-- Para la foto de perfil

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ButtonModule, AvatarModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public themeService = inject(ThemeService);
  public authService = inject(AuthService); // <-- Inyectamos el ADN de Identidad

  // Signals para el HTML
  activeNiche = this.themeService.activeNiche;
  user = this.authService.user; // Este Signal tiene la info de Google

  changeNiche(id: string) {
    this.themeService.setNiche(id);
  }
}


```


2.  Maquetar el Perfil en app.component.html
Añadiremos una cabecera (Header) reactiva que cambie según si el usuario está logueado o no:


```bash
<div class="min-h-screen bg-aura transition-colors duration-700 flex flex-col items-center">
  
  <!-- Header de Identidad -->
  <header class="w-full p-6 flex justify-between items-center bg-black/20 backdrop-blur-md border-b border-white/10">
    <div class="text-white font-black text-2xl tracking-tighter">ARCANI</div>

    <div class="flex items-center gap-4">
      @if (user()) {
        <!-- Perfil del Fan Logueado -->
        <div class="flex items-center gap-3 p-2 pr-4 bg-white/10 rounded-full border border-destello/50">
          <p-avatar [image]="user()?.photoURL!" 
                    shape="circle" 
                    size="large"
                    class="border-2 border-destello shadow-[0_0_15px_var(--arcani-destello)]">
          </p-avatar>
          <div class="flex flex-col">
            <span class="text-white text-xs font-bold leading-none">{{ user()?.displayName }}</span>
            <span class="text-destello text-[10px] uppercase font-black tracking-widest">Rango: Fan Arcani</span>
          </div>
          <button (click)="authService.logout()" class="text-white/50 hover:text-white text-xs ml-2">Salir</button>
        </div>
      } @else {
        <!-- Botón de Iniciar Enlace -->
        <p-button label="Iniciar Enlace con Google" 
                  icon="pi pi-google" 
                  (onClick)="authService.loginWithGoogle()"
                  severity="secondary"
                  [raised]="true">
        </p-button>
      }
    </div>
  </header>

  <!-- Cuerpo de la Tienda (Lo que ya tenías) -->
  <main class="flex-1 flex flex-col items-center justify-center space-y-8">
     @if (activeNiche()) {
        <h1 class="text-white text-6xl font-black drop-shadow-2xl">
          {{ activeNiche()?.label }}
        </h1>
     }
     <!-- ... tus botones de nichos aquí ... -->
  </main>
</div>


```
#### --------------------------------------------------------------------------------------


#### --------------------------------------------------------------------------------------

## 

```bash


```
#### --------------------------------------------------------------------------------------



#### --------------------------------------------------------------------------------------

## 

```bash


```
#### --------------------------------------------------------------------------------------


#### --------------------------------------------------------------------------------------

## 

```bash


```
#### --------------------------------------------------------------------------------------




#### --------------------------------------------------------------------------------------

## 

```bash


```
#### --------------------------------------------------------------------------------------


#### --------------------------------------------------------------------------------------

## 

```bash


```
#### --------------------------------------------------------------------------------------




#### --------------------------------------------------------------------------------------

## 

```bash


```
#### --------------------------------------------------------------------------------------


#### --------------------------------------------------------------------------------------

## 

```bash


```
#### --------------------------------------------------------------------------------------




#### --------------------------------------------------------------------------------------

## 

```bash


```
#### --------------------------------------------------------------------------------------


#### --------------------------------------------------------------------------------------

## 

```bash


```
#### --------------------------------------------------------------------------------------