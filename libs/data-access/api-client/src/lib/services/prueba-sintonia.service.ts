import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, Observable } from 'rxjs';

// Definimos la interfaz según los Módulos 2 y 3 del PDF
export interface SintoniaConfig {
  aura: string;          // El 7% de energía (Cian Core o color nicho)
  destello: string;      // El 3% de acento (Amarillo Volt o color nicho)
  fondo: string;         // El 90% del entorno (Light o Dark)
  trama: string;         // Textura (Malla, Puntos, etc.)
  radius: string;        // Geometría de bordes
}

@Injectable({
  providedIn: 'root'
})
export class SintoniaApiService {
  private http = inject(HttpClient);

  // Usamos un Signal para que toda la app reaccione al cambio de nicho
  currentSintonia = signal<SintoniaConfig | null>(null);

  cargarSintoniaPorSlug(slug: string): Observable<SintoniaConfig> {
    // La URL debe apuntar a tu API que devuelva la configuración del Módulo 2
    return this.http.get<SintoniaConfig>(`/api/nichos/${slug}`).pipe(
      tap(config => {
        this.currentSintonia.set(config);
        this.aplicarVariablesCSS(config);
      })
    );
  }

  private aplicarVariablesCSS(config: SintoniaConfig) {
    const root = document.documentElement;

    // Aplicamos las variables raíz definidas en la documentación ARCANI
    root.style.setProperty('--aura-nicho', config.aura);
    root.style.setProperty('--destello-nicho', config.destello);
    root.style.setProperty('--bg-nicho', config.fondo);
    root.style.setProperty('--border-radius-nicho', config.radius);

    console.log(`📡 Sintonía sintonizada: ${config.aura}`);
  }
}
