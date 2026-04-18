🛡️ ARCANI: Registro de Sincronización y Arquitectura
🌌 Capa 0: Infraestructura y Oráculo (Backend)
Motor de Datos: MySQL 8.0 en Docker (Puerto 3306) con SnakeNamingStrategy (01.pdf p. 1).
Identificación Dual: Implementada. Uso de BINARY(16) para UUIDs externos (Rendimiento + Anti-enumeración) y BIGINT para relaciones internas (Resumen Ej... p. 3).
Blindaje ESM: Monorepo configurado con "type": "module". Uso estricto de import/export para Tree Shaking quirúrgico (Resumen Ej... p. 1).
Transformación de Datos: UUIDBinaryTransformer operativo para conversión automática String ↔ Binary en NestJS (01.pdf p. 1).
Serialización: ClassSerializerInterceptor activo con estrategia excludeAll para evitar fugas de IDs técnicos (Resumen Ej... p. 2).
🔐 Capa 1: Identidad y Sintonía (Auth RBAC)
Autenticación Híbrida: Firebase Auth (Google) integrada con persistencia en MySQL (02.pdf p. 1).
Gobernanza RBAC: Sistema de niveles (Strategic, Tactical, Operative) y Roles sincronizados (02.pdf p. 2).
Ofuscación de Capacidades: permission-mapper.ts operativo para transformar niveles técnicos en etiquetas de capacidad para el frontend (02.pdf p. 2).
Blindaje de Rutas: FirebaseAuthGuard activo y decorador @Public() para acceso libre al catálogo (02.pdf p. 1).
🎨 Capa 2: El Portal (Frontend Angular 21)
Motor de Sintonía: AppStateService basado en Signals. Inyección dinámica de variables HSL (90/7/3) en Tailwind 4 (02.pdf p. 2).
Zoneless Architecture: Configurado con provideZonelessChangeDetection() para máximo rendimiento.
Comunicación Segura: auth.interceptor.ts inyecta automáticamente el JWT de Firebase en cada petición (02.pdf p. 1).
UI Atómica: Bundle ArcaniUI actualizado con componentes de PrimeNG 21 (Popover, Select, DatePicker, Drawer) (Resumen Ej... p. 2). 
GitHub
GitHub
🧪 Estado de los Módulos Críticos
Módulo	Estado	Observaciones
Oráculo (Gateway)	✅ OPERATIVO	Prefijo /api y Swagger configurado.
Sincronizador Auth	✅ OPERATIVO	Mapeo MySQL-Firebase funcional.
Motor de Sintonía	✅ OPERATIVO	Reactividad por Signals e HSL.
Bazar de los Mundos	🏗️ EN PROCESO	Pendiente integración de Galería y Stock.
ARCANI Studio	📅 PENDIENTE	Fase de personalización avanzada.
🚀 Próximos Pasos (Roadmap Inmediato)
Validación de Sintonía: Verificar el endpoint GET /api/sintonia/resolver con usuarios logueados.
Entidades del Bazar: Crear la entidad Product extendiendo de ArcaniExternalIdEntity para mantener el estándar de Identificación Dual (Resumen Ej... p. 3).
Lógica de Penumbra: Implementar el algoritmo que activa la "Nebulosa Mística" cuando el stock baja de 25 SKUs (Resumen Ej... p. 9).
Nota para el Desarrollador: Recuerda que al estar en un entorno ESM estricto, cualquier script de Node.js o migración manual podría requerir la extensión .js en los imports locales (Resumen Ej... p. 2).
