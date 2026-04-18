import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';

// --- ARCANI CORE & DOMAIN ---
import { UserIdentity, API_ROUTES, ARCANI_API_URL } from '@arcani/shared-domain';
import { firebaseConfig } from './firebase.config';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // --- INFRAESTRUCTURA ---
  private readonly http = inject(HttpClient);
  private readonly apiUrl = inject(ARCANI_API_URL);

  private readonly app = initializeApp(firebaseConfig);
  private readonly auth = getAuth(this.app);
  private readonly provider = new GoogleAuthProvider();

  /**
   * 1. SIGNAL TIPADO (Solución al error 'never')
   * Es vital pasar el tipo entre < > para que TS sepa qué propiedades tendrá.
   */
  public user = signal<UserIdentity | null>(null);

  constructor() {
    onAuthStateChanged(this.auth, (fbUser) => {
      if (fbUser) {
        this.syncWithOracle().subscribe({
          next: (dbUser:any) => this.user.set(dbUser),
          error: () => this.user.set(null)
        });
      } else {
        this.user.set(null);
      }
    });
  }

  /**
   * VERIFICADOR DE CAPACIDADES
   */
  public hasPermission(permission: string): boolean {
    const currentUser = this.user();

    // Type Guard: Si currentUser es null, esta rama no se ejecuta
    if (!currentUser) return false;

    // Ahora TS reconoce 'permissions' porque sabe que currentUser es 'UserIdentity'
    return currentUser.permissions.includes(permission);
  }

  /**
   * SINCRONIZACIÓN CON EL ORÁCULO
   * Definimos explícitamente el retorno como Observable
   */
  private syncWithOracle(): Observable<UserIdentity | null> {

    const url = `${this.apiUrl}/${API_ROUTES.AUTH.SESSION}`;
    return this.http.get<UserIdentity>(url).pipe(
    catchError((err) => {
      console.error('⚠️ El Oráculo no responde:', err.message);
      return of(null);
    })
  );

    }
  // --- MÉTODOS DE SESIÓN ---
  async loginWithGoogle(): Promise<void> {
    try {
      await signInWithPopup(this.auth, this.provider);
    } catch (error) {
      console.error('❌ Error de identidad:', error);
    }
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
    this.user.set(null);
  }

  public get token$(): Observable<string | null> {
    return from(this.auth.currentUser?.getIdToken() || Promise.resolve(null));
  }
}
