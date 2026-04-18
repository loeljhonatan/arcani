import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { ThemingService } from '../services/theming.service';
import { Public } from '../../../../common/decorators/public.decorator';
import { ThemingResponseDto } from '@arcani/shared-domain';

@Controller('theming')
export class ThemingController {
    constructor(private readonly themingService: ThemingService) {}

  /**
   * Punto de Sintonía: Resuelve la identidad visual de un portal.
   * Marcado como @Public para permitir navegación sin login.
   */
  @Public()
  @Get('tune')
  getSintonia(@Query('slug') slug: string): ThemingResponseDto {
    // 1. Validación de seguridad para evitar peticiones vacías
    if (!slug) {
      throw new BadRequestException('Falla de Portal: Se requiere un slug.');
    }

    /**
     * 2. Retornamos instancia de DTO para que el ClassSerializer
     * no borre los datos al aplicar la estrategia 'excludeAll'.
     * El ReactiveThemeInterceptor detectará este 'slug' y le inyectará el '_theme'.
     */
    return new ThemingResponseDto({
      slug: slug.toLowerCase().trim()
    });
  }
}
