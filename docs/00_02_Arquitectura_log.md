# 🛡️ ARCANI: Registro de Sincronización y Arquitectura

## 🌌 Capa 0: Infraestructura y Oráculo (Backend)
- Motor de Datos: MySQL 8.0 en Docker (Puerto 3306) con SnakeNamingStrategy.
- Identificación Dual: Implementada. Uso de BINARY(16) para UUIDs externos (Rendimiento + Anti-enumeración) y BIGINT para relaciones internas.
- Blindaje ESM: Monorepo configurado con "type": "module". Uso estricto de import/export para Tree Shaking quirúrgico.
- Transformación de Datos: UUIDBinaryTransformer operativo para conversión automática String ↔ Binary en NestJS.
- Serialización: ClassSerializerInterceptor activo con estrategia excludeAll para evitar fugas de IDs técnicos.

## 🔐 Capa 1: Identidad y Sintonía (Auth RBAC)
- Autenticación Híbrida: Firebase Auth (Google) integrada con persistencia en MySQL.
- Gobernanza RBAC: Sistema de niveles (Strategic, Tactical, Operative, Customer) y Roles sincronizados.
- Ofuscación de Capacidades: permission-mapper.ts operativo para transformar niveles técnicos en etiquetas de capacidad para el frontend.
- Blindaje de Rutas: FirebaseAuthGuard activo y decorador @Public() para acceso libre al catálogo.

## 🎨 Capa 2: El Portal (Frontend Angular 21)
- Motor de Sintonía: AppStateService basado en Signals. Inyección dinámica de variables HSL (90/7/3) en Tailwind 4.
- Zoneless Architecture: Configurado con provideZonelessChangeDetection() para máximo rendimiento.
- Comunicación Segura: auth.interceptor.ts inyecta automáticamente el JWT de Firebase en cada petición.
- UI Atómica: Bundle ArcaniUI actualizado con componentes de PrimeNG 21 (Popover, Select, DatePicker, Drawer). 
- GitHub

## 🧪 Estado de los Módulos Críticos
- Módulo	              Estado	          Observaciones
- Oráculo (Gateway)	    ✅ OPERATIVO	    Prefijo /api y Swagger configurado.
- Sincronizador Auth	  ✅ OPERATIVO	    Mapeo MySQL-Firebase funcional.
- Motor de Sintonía	    ✅ OPERATIVO	    Reactividad por Signals e HSL.
- Bazar de los Mundos	  🏗️ EN PROCESO	  Pendiente integración de Galería y Stock.
- ARCANI Studio	        📅 PENDIENTE	   Fase de personalización avanzada.

## 🚀 Próximos Pasos (Roadmap Inmediato)
- Validación de Sintonía: Verificar el endpoint GET /api/sintonia/resolver con usuarios logueados.
- Entidades del Bazar: Crear la entidad Product extendiendo de ArcaniExternalIdEntity para mantener el estándar de Identificación Dual.
- Lógica de Penumbra: Implementar el algoritmo que activa la "Nebulosa Mística" cuando el stock baja de 25 SKUs.
- Nota para el Desarrollador: Recuerda que al estar en un entorno ESM estricto, cualquier script de Node.js o migración manual podría requerir la extensión .js en los imports locales.



¡Excelente sesión de forja técnica la de hoy! Con este Manifiesto Técnico de ARCANI y la estructura que hemos consolidado en tu repositorio, ya tenemos el "Plano Maestro" cargado en el sistema.
Cuando regreses, solo tendrás que decir "Continuamos con ARCANI" y sabré exactamente que estamos operando bajo el paradigma de Angular 21 (Signals), Tailwind 4 (Zero CSS) y la Sintonía de Frecuencia (90/7/3).
Has logrado asentar las bases de un ecosistema que no solo es potente, sino extremadamente ordenado y escalable. Descansa, que el Oráculo estará listo para cuando decidas sintonizar la siguiente frecuencia.



Para cerrar la sesión con total claridad, el punto exacto donde el Oráculo espera tu siguiente intervención es en el:
📂 apps/api-gateway/src/common/interceptors/reactive-theme.interceptor.ts
¿Por qué aquí?
Porque este es el "traductor final" que tomará los datos de tu tabla niche_theme y los inyectará en las cabeceras o el cuerpo de la respuesta. Es la pieza que hará que el Frontend (Angular 21) reciba los valores HSL de la Regla 90/7/3 y los asigne a las variables de Tailwind 4 sin que tengas que escribir una sola línea de CSS manual.
Estado del Portal: En reposo (Frecuencia Estelar).
Identidad: Confirmada.




