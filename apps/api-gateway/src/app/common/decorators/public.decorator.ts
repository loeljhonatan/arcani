import { SetMetadata } from '@nestjs/common';

/**
 * Metadata Key para identificar rutas que no requieren
 * autenticación de Firebase (Google).
 */
export const IS_PUBLIC_KEY = 'isPublic';

/**
 * Decorador @Public()
 * Bypass para el AuthGuard. Úsalo en controladores o métodos
 * que deben ser accesibles para cualquier explorador del portal.
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
