import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs';
import { ThemeEngineService } from '../services/theme-engine.service';
import { NicheTheme } from '@arcani/shared-domain';


/**
 * Definimos una estructura local para que TypeScript
 * reconozca el campo inyectado por el Oráculo.
 */
interface ArcaniResponse {
  _theme?: NicheTheme;
  [key: string]: any; // Permite cualquier otra propiedad (slug, portal, etc.)
}

/**
 * INTERCEPTOR DE SINTONÍA (FRONTEND)
 * Escucha las respuestas de la API. Si detecta un campo '_theme',
 * sincroniza automáticamente la interfaz con esa frecuencia.
 */
export const sintoniaInterceptor: HttpInterceptorFn = (req, next) => {
  const themeEngine = inject(ThemeEngineService);

   return next(req).pipe(
    tap((event) => {
      // 1. Validamos que sea una respuesta HTTP con cuerpo
      if (event instanceof HttpResponse && event.body) {

        // 2. Casteamos el body a nuestra interfaz de respuesta ARCANI
        const body = event.body as ArcaniResponse;

        // 3. Ahora TypeScript ya no se queja: '_theme' es reconocido
        if (body._theme) {
          themeEngine.tune(body._theme);
        }
      }
    })
  );
};
