// libs/core/reactive-engine/src/lib/theme.service.ts
import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { NicheApiService } from '@arcani/data-access-api-client';



import { Niche } from '@arcani/shared-domain'; // Nx hará este alias

@Injectable({ providedIn: 'root' })
export class ThemeService {


 private nicheApi = inject(NicheApiService);

  // --- Signals de Estado ---
  // ADN del Ecosistema: Lista de nichos
  niches = signal<Niche[]>([]);

  // Frecuencia Activa: El nicho que domina la interfaz actualmente
  activeNiche = signal<Niche | null>(null);

  // Signal computada: Detecta automáticamente si activar la "Nebulosa Mística"
  isBazarMode = computed(() => {
    const current = this.activeNiche();
    return current ? current.current_sku_count <= current.bazar_threshold : false;
  });

  constructor() {
    /**
     * EFECTO REACTIVO MAESTRO
     * Se dispara cada vez que activeNiche cambia, inyectando la sintonía en el DOM.
     */
    effect(() => {
      const current = this.activeNiche();

      if (current) {
        this.applySintonia(current);
      } else {
        this.resetToMaestro();
      }
    });

    // Inicializamos la carga de datos desde el Oráculo (NestJS)
    this.initEcosistema();
  }

  /**
   * Carga inicial: Conecta con la API y sintoniza el primer nicho por defecto.
   */
  private async initEcosistema() {
    try {
      const data = await this.nicheApi.getAllNiches();
      this.niches.set(data);

      if (data.length > 0) {
        this.activeNiche.set(data[0]);
      }
    } catch (error) {
      console.error('❌ Error al sintonizar el ecosistema:', error);
      this.resetToMaestro();
    }
  }

  /**
   * Inyecta variables HSL y Micro-diseño en el DOM para Tailwind 4.
   */
  private applySintonia(niche: Niche) {
    const root = document.documentElement;

    // 1. Inyección de Colores HSL (Regla 90/7/3)
    root.style.setProperty('--niche-primary-raw', niche.color_primary);
    root.style.setProperty('--niche-accent-raw', niche.color_accent);
    root.style.setProperty('--niche-bg-light', niche.color_light);
    root.style.setProperty('--niche-bg-dark', niche.color_dark);

    // 2. Inyección de Micro-diseño (JSON custom_config)
    const config = niche.custom_config;
    root.style.setProperty('--niche-radius', config?.border_radius || '0.75rem');
    root.style.setProperty('--niche-font', config?.font_family || 'Rajdhani');

    // 3. Control de la Nebulosa Mística (Bazar)
    if (this.isBazarMode()) {
      root.classList.add('mode-bazar');
      console.warn(`🌌 Bazar activo: ${niche.name}`);
    } else {
      root.classList.remove('mode-bazar');
    }

    console.log(`✨ Sintonía establecida: ${niche.name}`);
  }

  /**
   * Protocolo de Emergencia: Vuelve a la Base Neutra de ARCANI.
   */
  public resetToMaestro() {
    const root = document.documentElement;
    root.style.setProperty('--niche-primary-raw', '190 100% 50%'); // Cian Maestro
    root.style.setProperty('--niche-accent-raw', '60 100% 50%');  // Amarillo Volt
    root.classList.remove('mode-bazar');
  }

  /**
   * Navegación por Slug: Cambia la frecuencia de forma SEO-Friendly.
   */
  public setNicheBySlug(slug: string) {
    const found = this.niches().find((n) => n.slug === slug);
    if (found) {
      this.activeNiche.set(found);
    }
  }

}
