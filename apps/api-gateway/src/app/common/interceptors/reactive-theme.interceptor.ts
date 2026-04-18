import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import {   mergeMap, Observable} from 'rxjs';
import { ThemingService } from '../../modules/core-engine/theming/services/theming.service';

/**
 * INTERCEPTOR DE SINTONÍA REACTIVA
 * Este componente actúa como un "pincel automático" que detecta si la respuesta
 * del servidor pertenece a un portal y le inyecta su ADN visual (Regla 90/7/3).
 */
@Injectable()
export class ReactiveThemeInterceptor implements NestInterceptor {
  // Inyectamos el servicio que orquestra la consulta a las 3 tablas (Nicho, Theme, Stock)
  constructor(private readonly themingService: ThemingService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // next.handle() permite que el controlador termine su trabajo y nos entregue la data
    return next.handle().pipe(
      // mergeMap nos permite manejar la respuesta de forma asíncrona (esperar a la DB)
      mergeMap(async (data) => {

        /**
         * PASO 1: Validación de Identidad
         * Si la respuesta no es un objeto o no contiene un 'slug',
         * significa que no es una entidad sintonizable. Retornamos la data intacta.
         */
        if (!data || typeof data !== 'object' || !data.slug) {
          return data;
        }

        try {
          /**
           * PASO 2: Resolución de Sintonía
           * Consultamos al Oráculo (ThemingService) para obtener los colores,
           * geometría y estado de Bazar (Nebulosa) basados en el slug.
           */
          const theme = await this.themingService.resolveSintonia(data.slug);

          /**
           * PASO 3: Fusión de ADN
           * Retornamos los datos originales del controlador y adjuntamos
           * la propiedad '_theme' que el Frontend usará para pintar la interfaz.
           */
          return {
            ...data,
            _theme: theme,
          };
        } catch (error) {
          /**
           * PASO 4: Fallback de Emergencia
           * Si la base de datos falla, devolvemos la data original para que
           * el portal siga funcionando, aunque sea con el ADN Maestro por defecto.
           */
          return data;
        }
      })
    );
  }
}
