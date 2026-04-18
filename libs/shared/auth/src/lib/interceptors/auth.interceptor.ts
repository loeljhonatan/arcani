import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { switchMap, take } from 'rxjs';

/**
 * INTERCEPTOR DE IDENTIDAD (FRONTEND)
 * Recupera el token de Firebase y lo inyecta como Bearer Token
 * para que el Oráculo reconozca al explorador.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  // 1. Obtenemos el token del Signal/Observable de Firebase
  // Usamos pipe para esperar a que el token esté listo
  return authService.token$.pipe(
    take(1),
    switchMap((token) => {
      // 2. Si hay token, clonamos la petición con la cabecera de seguridad
      if (token) {
        const authReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
        return next(authReq);
      }

      // 3. Si no hay token (usuario anónimo), la petición sigue su curso normal
      return next(req);
    })
  );
};
