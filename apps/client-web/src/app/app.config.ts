import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
//import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations'; // Importación actualizada
//import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';

//import Aura from '@primeuix/themes/aura'; // El preset moderno
import Aura from '@primeng/themes/aura';
import { provideHttpClient, withFetch } from '@angular/common/http';



export const appConfig: ApplicationConfig = {
  providers: [

    provideBrowserGlobalErrorListeners(),

    //provideRouter(appRoutes),

    provideRouter(appRoutes, withComponentInputBinding()), // Importante para recibir slugs en los componentes

    provideZoneChangeDetection({ eventCoalescing: true }),
    //provideAnimationsAsync(),

    //provideAnimationsAsync(),
     provideAnimations(),


    provideHttpClient(withFetch()), // <-- Activa el cliente HTTP moderno

    providePrimeNG({
        theme: {
            preset: Aura,
            options: {
               // darkModeSelector: '.dark-mode', // Para el ADN Geek oscuro
                cssLayer: {
                    name: 'primeng',
                    order: 'primeng, tailwind-base,tailwind-utilities'
                }
            }
        }
    }),



    provideZoneChangeDetection({ eventCoalescing: true }),

  ],
};
