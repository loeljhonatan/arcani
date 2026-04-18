import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { API_ROUTES, ARCANI_API_URL, Niche } from '@arcani/shared-domain'; // ✅ Solo importamos el contrato
import { lastValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NicheApiService {
  private http = inject(HttpClient);
  private baseUrl = inject(ARCANI_API_URL);


  // --- ESTADO REACTIVO (Signals) ---
  // Mantenemos una señal privada con la lista de nichos
  #nichos = signal<Niche[]>([]);

  // Exponemos la señal como solo lectura para los componentes
  public nichos = this.#nichos.asReadonly();



  async getAllNiches(): Promise<Niche[]> {
    const url = `${this.baseUrl}/${API_ROUTES.NICHOS.BASE}`;
    return await lastValueFrom(this.http.get<Niche[]>(url));
  }


   /**
   * Obtiene un nicho específico por su UUID público
   */
  getById(uuid: string) {
    const url = `${this.baseUrl}/${API_ROUTES.NICHOS.BY_ID(uuid)}`;
    return this.http.get<Niche>(url);
  }

  /**
   * Obtiene la configuración de sintonía HSL para un nicho
   */
  getTheme(uuid: string) {
    const url = `${this.baseUrl}/${API_ROUTES.NICHOS.THEME(uuid)}`;
    return this.http.get(url);
  }



}
