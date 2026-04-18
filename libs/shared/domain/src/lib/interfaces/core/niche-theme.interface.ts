/**
 * ADN Visual de la Sintonía de Frecuencia (Regla 90/7/3)
 */
export interface NicheTheme {
  // Aura (7%): Color principal del nicho en formato HSL crudo "H S% L%"
  colorPrimary: string;

  // Destello (3%): Color de acento para CTAs y recompensas
  colorAccent: string;

  // Fondo Luz: Color base para la Frecuencia Estelar
  colorLight: string;

  // Fondo Sombra: Color base para la Frecuencia Carbón
  colorDark: string;

  // Flag de Escasez: Activa la Nebulosa Mística si el stock es bajo
  isBazar: boolean;

  // Configuración Wildcard: Inyección de estilos disruptivos (opcional)
  customConfig?: Record<string, any>;

  // --- Atributos de Geometría ARCANI ---
  borderRadius: string; // ej: "20px" o "0.5rem"
  glassBlur: string;    // ej: "12px" o "4px"
}


