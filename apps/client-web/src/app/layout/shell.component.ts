import { Component } from '@angular/core';

// --- PIEZAS DEL LAYOUT ---
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './shell.component.html',
  styles: ``,
})
export class ShellComponent {

}
