import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SintoniaStore } from '@arcani/core-reactive-engine';

@Component({
  selector: 'app-nicho-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nicho-view.html',
  styleUrl: './nicho-view.css',
})
export class NichoView {


// Inyectamos el store para usar los datos en la vista si es necesario
  readonly store = inject(SintoniaStore);

}
