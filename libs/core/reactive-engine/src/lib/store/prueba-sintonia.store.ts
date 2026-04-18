import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { computed } from '@angular/core';

// Definimos el estado basado en tu Estrategia ARCANI
export interface PruebaSintoniaState {
  id: string;          // <--- Añadir esto
  aura: string;      // 7% de acción
  destello: string;  // 3% de acento
  fondo: string;    // 90% atmósfera
  radius: number;    // Geometría
  blur: number;      // Glassmorphism
  trama_preset: string; // <--- DEBE ESTAR AQUÍ
  isBazar: boolean;  // Estado místico
}

const initialState: PruebaSintoniaState = {
  id: '',          // <--- Inicializar
  aura: '#00F0FF',
  destello: '#FFF000',
  fondo: '#000000',
  radius: 12,
  blur: 10,
  trama_preset: 'ninguna', // <--- DEBE TENER UN VALOR INICIAL AQUÍ
  isBazar: false
};

export const PuebaSintoniaStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((state) => ({
    // Mapeo automático a variables CSS para Tailwind 4 y PrimeNG 21
    styles: computed(() => ({
      '--aura-nicho': state.aura(),
      '--destello-nicho': state.destello(),
      '--bg-nicho': state.fondo(),
      '--radius-nicho': `${state.radius()}px`,
      '--blur-nicho': `blur(${state.blur()}px)`,
      '--p-primary-color': state.aura(), // Token de PrimeNG 21
    }))
  })),
  withMethods((store) => ({
    updateSintonia(config: any) {
      // Este mapeo manual evita el error de "unknown state slice"
      patchState(store, {
        aura: config.aura,
        destello: config.destello,
        fondo: config.fondo,
        radius: config.radius,
        blur: config.blur,
        trama_preset: config.trama_preset
      });
    },

    resetToArcani() {
      patchState(store, initialState);
    }
  }))

);



