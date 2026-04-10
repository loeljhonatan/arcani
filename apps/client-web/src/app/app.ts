import { Component, effect, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';

import { SintoniaStore, ThemeService } from '@arcani/core-reactive-engine';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { AuthService } from '@arcani/shared-auth'; // <-- Importa tu nuevo servicio
import { AvatarModule } from 'primeng/avatar'; // <-- Para la foto de perfil


@Component({

  imports: [NxWelcome, RouterModule,CommonModule,ButtonModule,AvatarModule],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styles: ``,
})
export class App {

  protected title = 'client-web';


  readonly store = inject(SintoniaStore);

  constructor() {
      // REACCIVIDAD TOTAL:
    // Cuando el Guard llama al API y el API actualiza el Store, este efecto se dispara.
    effect(() => {
      const styles = this.store.styles(); // Obtenemos las variables CSS del Store
      const root = document.documentElement;

      const aura = this.store.aura();

      // Aplicamos un pequeño destello al cambiar de nicho
     document.body.animate([
    { filter: 'brightness(1)' },
    { filter: 'brightness(1.4) saturate(1.2)' },
    { filter: 'brightness(1)' }
      ], { duration: 600, easing: 'ease-out' });

      Object.entries(styles).forEach(([key, value]) => {
        root.style.setProperty(key, value as string);
      });

      console.log('Frecuencia Sintonizada:', styles['--aura-nicho']);
    });
    }













  public authService = inject(AuthService); // <-- Inyectamos el ADN de Identidad
  private themeService = inject(ThemeService);



  // Accedemos al Signal del nicho activo
  niches = this.themeService.niches;
  // Creamos una referencia pública para el HTML
  activeNiche = this.themeService.activeNiche;
   // Signals para el HTML
  user = this.authService.user; // Este Signal tiene la info de Google

  changeNiche(id: string) {
  this.themeService.setNiche(id);

  }

/*


  // Creamos una referencia pública para el HTML
  activeNiche = this.themeService.activeNiche;

  changeNiche(id: string) {
    this.themeService.setNiche(id);
  }
 */

}


