import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// --- ARCANI CORE & UI ---
import { ArcaniUI } from '@arcani/shared-ui';

import { AuthService } from '@arcani/shared-auth';



import { Popover } from 'primeng/popover';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, ArcaniUI,Popover],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {

   // Inyectamos el servicio para acceder al Signal y los métodos
  protected auth = inject(AuthService);

  login() {
    this.auth.loginWithGoogle();
  }

  logout() {
    this.auth.logout();
  }
}
