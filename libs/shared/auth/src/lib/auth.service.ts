import { Injectable, signal, inject } from '@angular/core';
import { initializeApp } from 'firebase/app';

import { getAuth, signInWithPopup, GoogleAuthProvider, User, signOut, onAuthStateChanged } from 'firebase/auth';
import { firebaseConfig } from './firebase.config';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Inicializamos Firebase
  private app = initializeApp(firebaseConfig);
  private auth = getAuth(this.app);
  private provider = new GoogleAuthProvider();

  // Signal para el usuario (identidad reactiva)
  user = signal<User | null>(null);

  constructor() {
    // Escuchamos si el usuario ya estaba logueado
    onAuthStateChanged(this.auth, (user) => {
      this.user.set(user);
    });
  }

  async loginWithGoogle() {
    try {
      const result = await signInWithPopup(this.auth, this.provider);
      this.user.set(result.user);
    } catch (error) {
      console.error('Error en la sintonía de identidad:', error);
    }
  }

  async logout() {
    await signOut(this.auth);
    this.user.set(null);
  }
}
