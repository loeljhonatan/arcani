import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// --- ARCANI UI ---
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';// <-- Para la foto de perfil

// --- ARCANI CORE ---
import { AuthService } from '@arcani/shared-auth';// <-- Importa tu nuevo servicio
import { ThemeEngineService } from '@arcani/core-reactive-engine';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [ RouterModule,CommonModule,ButtonModule,AvatarModule],
  templateUrl: './app.html',
  styles: ``,
})
export class App {

  protected title = 'client-web';

// Inyección de servicios maestros
  public authService = inject(AuthService);
  public themeEngine = inject(ThemeEngineService);

  /**
   * PROPIEDADES PROTEGIDAS (Para el HTML)
   */
  protected user = this.authService.user;         // Signal de Identidad
  protected activeTheme = this.themeEngine.activeTheme; // Signal de Sintonía actual

  /**
   * NOTA SOBRE EL EFECTO DE ESTILOS:
   * Ya no es necesario el 'effect()' aquí.
   * El 'ThemeEngineService' se encarga de inyectar las variables
   * en el 'document.documentElement' internamente.
   */
}
