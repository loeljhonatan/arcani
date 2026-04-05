// libs/core/reactive-engine/src/lib/theme.service.ts
import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArcaniNiche } from '@arcani/shared-domain'; // Nx hará este alias

@Injectable({ providedIn: 'root' })
export class ThemeService {

  private http = inject(HttpClient);
  private readonly API_URL = 'http://localhost:3000/api/niches';

  // Signals de estado
  niches = signal<ArcaniNiche[]>([]);
  activeNiche = signal<ArcaniNiche | null>(null);

  constructor() {
    // 1. IMPORTANTE: Llamar a la carga de datos al iniciar el servicio
    this.loadNiches();

    // 2. Efecto para inyectar los colores en Tailwind 4
    effect(() => {
      const current = this.activeNiche();
      if (current) {
        document.documentElement.style.setProperty('--arcani-aura', current.auraColor);
        document.documentElement.style.setProperty('--arcani-destello', current.destelloColor);
      }
    });
  }

  private loadNiches() {
    this.http.get<ArcaniNiche[]>(this.API_URL).subscribe({
      next: (data) => {
        console.log('✅ ADN Recibido de MySQL:', data);
        this.niches.set(data);
        if (data.length > 0) this.activeNiche.set(data[0]);
      },
      error: (err) => {
        console.error('❌ Error de conexión con la API de ARCANI:', err);
      }
    });
  }

  public setNiche(id: string) {
    // Usamos niches() como función porque es un Signal
    const found = this.niches().find(n => n.id === id);
    if (found) {
      this.activeNiche.set(found);
    }
  }

}
