// --- BASE ---
export * from './lib/base.entity.js';
export * from './lib/base-internal.entity.js';
export * from './lib/base-external.entity.js';

// --- CORE / SISTEMA ---
export * from './lib/core/role-level.entity.js';
export * from './lib/core/role.entity.js';
export * from './lib/core/niche.entity.js';
export * from './lib/core/niche-theme.entity.js';
export * from './lib/core/niche-identity.entity.js';
export * from './lib/core/niche-stock.entity.js';
export * from './lib/core/event.entity.js';
export * from './lib/core/niche-event.entity.js';

// --- STORE / COMERCIAL ---
export * from './lib/store/product.entity.js';
export * from './lib/store/product-niche.entity.js';
export * from './lib/store/product-image.entity.js';
export * from './lib/store/product-variant.entity.js';
export * from './lib/store/variant-image.entity.js';

// --- OPERATIONS / LOGÍSTICA ---
export * from './lib/operations/stock-lot.entity.js';

// --- USERS / IDENTIDAD ---
export * from './lib/users/user.entity.js';

// --- TRANSFORMERS ---
export * from './lib/transformers/uuid-binary.transformer.js';

// --- PRUEBAS ---
export * from './lib/core/prueba-niche-speed.entity.js';
export * from './lib/core/prueba-niche-color.entity.js';
