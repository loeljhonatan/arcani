
import { NicheEntity } from '@arcani/data-access-db-entities';
import { NicheTheme } from '@arcani/shared-domain';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ThemingService {
  private readonly logger = new Logger(ThemingService.name);

  constructor(
    @InjectRepository(NicheEntity)
    private readonly nicheRepo: Repository<NicheEntity>,
  ) {}

  async resolveSintonia(slug: string): Promise<NicheTheme> {
    try {
      // 1. Orquestación de Joins: Traemos Identidad (niche), ADN (theme) y Pulso (stock)
      const niche = await this.nicheRepo.findOne({
        where: { slug: slug.toLowerCase(), isActive: true },
        relations: ['theme', 'stock'], // Gracias a tus IDs compartidos, esto es instantáneo
      });

      // 2. Fallback de Seguridad: Si el nicho no existe o no tiene ADN configurado
      if (!niche || !niche.theme) {
        this.logger.warn(`[SINTONIZADOR] Portal "${slug}" no encontrado o sin ADN. Aplicando ADN Maestro.`);
        return this.getMasterTheme();
      }

      // 3. Lógica del Bazar (Stock Dinámico)
      // Comparamos el pulso actual (current_sku_count) contra el umbral del ADN (bazar_threshold)
      const currentStock = niche.stock?.currentSkuCount ?? 0;
      const threshold = niche.theme.bazarThreshold ?? 25;
      const isBazar = currentStock < threshold;

      // 4. Construcción de la Frecuencia (Contrato 90/7/3)
      return {
        colorPrimary: niche.theme.colorPrimary, // Aura (7%)
        colorAccent: niche.theme.colorAccent,   // Destello (3%)
        colorLight: niche.theme.colorLight || '#ffffff',
        colorDark: niche.theme.colorDark || '#0a0a0a',
        isBazar: isBazar,

        // Geometría Dinámica (Configurada por el Admin en el Dashboard)
        borderRadius: niche.theme.customConfig?.borderRadius || '12px',
        glassBlur: niche.theme.customConfig?.glassBlur || '10px'
      };

    } catch (error:any) {
      this.logger.error(`[CRÍTICO] Fallo en el motor de sintonía: ${error.message}`);
      return this.getMasterTheme();
    }
  }

  /**
   * ADN Maestro de ARCANI (Default System Theme)
   */
  private getMasterTheme(): NicheTheme {
    return {
      colorPrimary: '180 100% 50%', // Cian Core
      colorAccent: '56 100% 50%',   // Amarillo Volt
      colorLight: '#ffffff',
      colorDark: '#0a0a0a',
      isBazar: false,
      borderRadius: '12px',
      glassBlur: '10px'
    };
  }
}
