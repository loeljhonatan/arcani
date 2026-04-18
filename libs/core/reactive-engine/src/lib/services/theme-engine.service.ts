import { Injectable, signal, effect } from '@angular/core';
import { NicheTheme } from '@arcani/shared-domain';


@Injectable({ providedIn: 'root' })
export class ThemeEngineService {
  /**
   * Signal de estado: Almacena la sintonía actual (Frecuencia activa)
   * Se inicia en null hasta que el Oráculo envíe la primera sintonía
   */
  private readonly _activeTheme = signal<NicheTheme | null>(null);

  // Exposición pública de solo lectura para componentes
  readonly activeTheme = this._activeTheme.asReadonly();

  constructor() {
    /**
     * EFECTO REACTIVO: El "Sintonizador"
     * Cada vez que el valor de _activeTheme cambia, este bloque se ejecuta
     * automáticamente, inyectando los colores en el ADN del navegador (DOM).
     */
    effect(() => {
      const theme = this._activeTheme();
      if (theme) {
        this.propagateToDom(theme);
      }
    });
  }

  /**
   * Método Maestro: Sintoniza una nueva frecuencia (Nicho o Evento)
   */
  tune(theme: NicheTheme): void {
    this._activeTheme.set(theme);
  }

  /**
   * Inyecta las variables HSL crudas en el Document Object Model
   */
  private propagateToDom(theme: NicheTheme): void {
    const root = document.documentElement;

    // Sintonía 90/7/3: Inyección de variables RAW para Tailwind 4
    root.style.setProperty('--niche-primary-raw', theme.colorPrimary); // Aura (7%)
    root.style.setProperty('--niche-accent-raw', theme.colorAccent);   // Destello (3%)

    // Geometría Dinámica configurada por el Admin
    root.style.setProperty('--niche-radius', theme.borderRadius);
    root.style.setProperty('--niche-blur', theme.glassBlur);

    // Gestión Lumínica (Frecuencias Carbón y Estelar)
    root.style.setProperty('--niche-bg-light', theme.colorLight);
    root.style.setProperty('--niche-bg-dark', theme.colorDark);

    // Protocolo de Inmersión Bazar (Nebulosa Mística)
    if (theme.isBazar) {
      root.setAttribute('data-arcani-state', 'bazar');
    } else {
      root.removeAttribute('data-arcani-state');
    }

   //  console.log(`[ARCANI ENGINE] Sintonizando frecuencia...`);
  }
}
