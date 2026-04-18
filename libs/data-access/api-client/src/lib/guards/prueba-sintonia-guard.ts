/* import { CanActivateFn } from '@angular/router';
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
 */
