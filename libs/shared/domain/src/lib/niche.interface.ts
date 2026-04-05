// libs/shared/domain/src/lib/niche.interface.ts
export interface ArcaniNiche {
  id: string;          // Ej: 'anime'
  label: string;       // Ej: 'Anime & Manga'
  energy: string;      // Ej: 'ÉPICA'
  auraColor: string;   // Hex: Para el fondo (Tailwind)
  destelloColor: string; // Hex: Para acentos (PrimeNG)
  ctaText: string;     // Ej: '¡RECLAMAR TESORO!'
}
