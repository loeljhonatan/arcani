// apps/client-web/src/app/layout/components/header/niche-selector.ts
import { Component, inject, signal, viewChild } from '@angular/core';
import { PopoverModule, Popover } from 'primeng/popover';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AppStateService } from '../../../core/services';

@Component({
  selector: 'app-niche-selector',
  standalone: true,
  imports: [PopoverModule, ButtonModule, RippleModule],
  template: `
    <!-- Gatillo con Estilo ARCANI -->
     <!-- Gatillo: Ya es accesible al ser un <button> nativo -->
    <button pRipple (click)="op.toggle($event)" ...>
       <!-- ... -->
    </button>

    <p-popover #op ...>
      <div class="grid grid-cols-4 gap-3 p-2 w-[350px]" role="menu">
        @for (niche of niches(); track niche.uuid) {
          <div (click)="changeNiche(niche); op.hide()"
               (keydown.enter)="changeNiche(niche); op.hide()"
               (keydown.space)="changeNiche(niche); op.hide()"
               tabindex="0"
               role="menuitem"
               pRipple
               class="relative flex flex-col items-center ... focus:ring-2 focus:ring-destello focus:outline-none"
               [attr.aria-label]="'Sintonizar mundo ' + niche.name">

            <i [class]="niche.icon" aria-hidden="true"></i>
            <span class="text-[9px] font-maestra uppercase">{{ niche.name }}</span>

            @if (currentNicheId() === niche.uuid) {
              <div class="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-destello" aria-hidden="true"></div>
            }
          </div>
        }
      </div>
    </p-popover>
  `
})
export class NicheSelectorComponent {
  private state = inject(AppStateService);

  // viewChild para control programático si fuera necesario
  op = viewChild.required<Popover>('op');

  niches = signal([
    { uuid: '1', name: 'Anime', icon: 'pi pi-bolt', aura: '350 100% 50%' },
    { uuid: '2', name: 'Cyber', icon: 'pi pi-microchip', aura: '180 100% 50%' }
  ]);

  currentNicheId = signal('2');

  changeNiche(niche: any) {
    this.currentNicheId.set(niche.uuid);
    this.state.updateTheme({ aura: niche.aura });
  }
}
