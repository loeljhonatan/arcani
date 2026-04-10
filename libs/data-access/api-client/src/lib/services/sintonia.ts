// libs/data-access/api-client/src/lib/services/sintonia.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SintoniaStore } from '@arcani/core-reactive-engine';
import { ConfiguracionVisual } from '@arcani/shared-domain';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class SintoniaApiService {
  private http = inject(HttpClient);
  private store = inject(SintoniaStore);
  private readonly API_URL = 'http://localhost:3000/api/sintonia';

  // Obtiene la configuración del backend y actualiza el Store automáticamente
  cargarSintoniaPorSlug(slug: string, stock = 100) {
  return this.http.get<ConfiguracionVisual>(`${this.API_URL}/resolver`, {
    params: { slug, stock }
  }).pipe(
    tap(config => {
      console.log('Sintonía aplicada:', config);
      this.store.updateSintonia(config);
    })
  );
  }

}
