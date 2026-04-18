import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

// --- ARCANI CORE ---
import { appRoutes } from './app.routes';
import { environment } from '../environments/environment';
import { ARCANI_API_URL } from '@arcani/shared-domain';
import { sintoniaInterceptor } from '@arcani/core-reactive-engine';
import { authInterceptor } from '@arcani/shared-auth';

export const appConfig: ApplicationConfig = {
  providers: [
    // 1. Rendimiento: Coalescencia de eventos para Angular moderno
    provideZoneChangeDetection({ eventCoalescing: true }),



    // 2. Navegación: Conexión de parámetros (slugs) directamente a los inputs de componentes
    provideRouter(appRoutes, withComponentInputBinding()),

    // 3. Estética: Animaciones nativas para PrimeNG
    provideAnimations(),

    // 4. Comunicación: Cliente HTTP con Fetch y el Motor de Sintonía inyectado
    provideHttpClient(
      withFetch(),
      withInterceptors([
        authInterceptor,    // 🛡️ Primero inyectamos la identidad
        sintoniaInterceptor // 🎨 Luego procesamos la sintonía visual
      ]) // <--- El Motor de ARCANI ahora escucha aquí
    ),

    // 5. Oráculo: Configuración de la URL base de la API
    { provide: ARCANI_API_URL, useValue: environment.apiUrl },

    // 6. UI: Configuración de PrimeNG con el Preset Aura y capas de Tailwind 4
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: 'system', // O '.dark' según prefieras
          cssLayer: {
            name: 'primeng',
            order: 'primeng, tailwind-base, tailwind-utilities'
          }
        }
      }
    }),

   //  rovideBrowserGlobalErrorListeners(), // 🛡️ Escudo global de errores del navegador // luego entralizar esto en un ErrorHandler personalizado más adelante
  ],
};
function rovideBrowserGlobalErrorListeners(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

