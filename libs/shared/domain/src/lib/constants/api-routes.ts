/**
 * DICCIONARIO DE RUTAS ESTRATÉGICAS - ARCANI
 * Centraliza todos los endpoints del Oráculo (NestJS) para evitar strings mágicos.
 */
export const API_ROUTES = {
  // --- MÓDULO DE IDENTIDAD ---
  AUTH: {
    SESSION: 'auth/session',
    LOGIN: 'auth/login',
    LOGOUT: 'auth/logout',
    REFRESH: 'auth/refresh-token',
    ME: 'auth/profile',
  },

  // --- MÓDULO DE NICHOS (FANDOMS) ---
  NICHOS: {
    BASE: 'nichos',
    BY_ID: (uuid: string) => `nichos/${uuid}`,
    THEME: (uuid: string) => `nichos/${uuid}/theme`, // Para el Motor de Sintonía
  },

  // --- MÓDULO DE SINTONIZADOR ---
  SINTONIZADOR: {
    RESOLVER: 'sintonia/resolver', // Calcula paletas HSL 90/7/3
    PREVIEW: 'sintonia/preview',
  },

  // --- MÓDULO DEL BAZAR (TIENDA) ---
  BAZAR: {
    PRODUCTS: 'bazar/products',
    PRODUCT_DETAIL: (uuid: string) => `bazar/products/${uuid}`,
    STOCK_STATUS: (uuid: string) => `bazar/products/${uuid}/stock`, // Verifica Penumbra/Veto
  },

  // --- MÓDULO DE ADMINISTRACIÓN ---
  ADMIN: {
    DASHBOARD_STATS: 'admin/stats',
    SYSTEM_LOGS: 'admin/logs',
    KILL_SWITCH: 'admin/emergency/reset-aesthetics', // Protocolo Reset Neutro
  }
} as const;

/**
 * TIPADO DE RUTAS
 * Permite que TypeScript nos ayude a navegar por el diccionario.
 */
export type ApiRoutes = typeof API_ROUTES;
