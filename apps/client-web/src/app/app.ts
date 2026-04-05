import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';

import { ThemeService } from '@arcani/core-reactive-engine';
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


