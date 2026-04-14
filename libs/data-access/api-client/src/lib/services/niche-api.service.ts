import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Niche } from '@arcani/shared-domain'; // ✅ Solo importamos el contrato
import { lastValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NicheApiService {
  private http = inject(HttpClient);
  private readonly API_URL = 'http://localhost:3000/api/niche';

  async getAllNiches(): Promise<Niche[]> {
    return await lastValueFrom(this.http.get<Niche[]>(this.API_URL));
  }
}
