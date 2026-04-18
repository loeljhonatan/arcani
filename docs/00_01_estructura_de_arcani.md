# ESTRUCTURA DEL PROYECTO MONOREPO ARCANI.

# 💡 Leyenda de Estados
- ⚪ [VACÍO] : Archivo creado pero sin lógica interna.
- 🟢 [IMPLEMENTADO] : Código funcional y probado.
- 🟡 [PENDIENTE] : Definido en arquitectura pero no creado.
- 🔵 [INFO] : Nota sobre el uso o propósito estratégico.


## 📋 Convenciones de Estado del Proyecto


| Emoji | TÉRMINO | DESCRIPCIÓN | USO IDEAL |
| :---: | :--- | :--- | :--- |
| 🟡 | **REFERENCIA** | Contexto, guías o notas de arquitectura. | Documentación y archivos de lectura. |
| ⚪ | **ESTRUCTURA** | Archivo creado pero sin lógica interna (maqueta). | Scaffolding o carpetas recién creadas. |
| ⚙️ | **EN DESARROLLO** | Código en proceso de escritura activa. | Tareas asignadas que están "in-progress". |
| 🧪 | **EN PRUEBAS** | Fase de validación, QA o corrección de errores. | Código terminado que busca aprobación. |
| 🟢 | **IMPLEMENTADO** | En uso, pero sujeto a ajustes por desarrollo. | Código funcional integrado al proyecto. |
| 🚀 | **HABILITADO** | Funcionalidad activa y operativa al 100%. | Módulos listos para el usuario final. |
| 🔴 | **PENDIENTE** | Tarea o archivo que aún no se ha iniciado. | Backlog o funcionalidades futuras. |
| 🔒 | **VITAL** | Configuración base y estructural sensible. | Archivos `config`, `.env`, o `main.ts`. |
| 🟠 | **OBSOLETO** | Código antiguo marcado para su eliminación. | Refactorizaciones que dejan código atrás. |




## ESTRUCTURA RAIZ 
📂 Estructura de arcani
```bash
arcani/
├── .angular/                      # Cache de compilación de Angular (Auto-generado)
├── .nx/                           # Cache y scripts internos del motor de Nx
├── .vscode/                       # Configuración compartida de VS Code (Extensiones, Debug)
├── apps/                          # --- APLICACIONES (Consumidores) ---
├── dist/                          # Artefactos finales listos para producción
├── dist-temp/                     # Directorio temporal para compilaciones intermedias
├── docs/                          # Documentación del Proyecto (Arquitectura, Roadmap)
├── libs/                          # --- LIBRERÍAS (El ADN Reutilizable) ---
├── node_modules/                  # Dependencias externas instaladas vía NPM
├── tmp/                           # Archivos temporales de ejecución
│
├── .dockerignore                  # Exclusiones para optimizar el contexto de Docker
├── .editorconfig                  # Estándares de formato de código entre editores
├── .env                           # Variables de entorno locales (Secretos, API Keys)
├── .gitignore                     # Archivos y carpetas excluidos del control de versiones
├── .npmrc                         # Configuración personalizada de NPM (Registros, Scopes)
├── .prettierignore                # Archivos omitidos por el formateador Prettier
├── .prettierrc                    # Reglas de estilo de código (Punto y coma, comillas)
├── docker-compose.yml             # Orquestación de contenedores (MySQL, Firebase Emulator)
├── eslint.config.mjs              # Reglas de linting modernas (ESLint Flat Config)
├── firebase-service-account.json  # Credenciales de administración para Firebase SDK
├── jest.config.ts                 # Configuración global de Testing unitario (Capa Lógica)
├── jest.preset.js                 # Ajustes preestablecidos de Jest para Nx
├── nx.json                        # Grafo de dependencias y políticas de visibilidad de Nx
├── package-lock.json              # Árbol exacto de dependencias instaladas
├── package.json                   # Manifiesto: Angular 21, NestJS, PrimeNG, Tailwind 4
├── README.md                      # Manual principal y descripción del ecosistema ARCANI
├── tsconfig.base.json             # Configuración base de TypeScript y Alias (@arcani/*)
└── vitest.workspace.ts            # Configuración de Vitest para tests de alta velocidad
```

##  ESTRUCTURA GENERAL
📂 Estructura de arcani
```bash
arcani/
├── apps/                          # --- APLICACIONES (Consumidores) ---
│   ├── admin-dashboard/           # Angular 21: El Laboratorio de Anarquía              
│   ├── api-gateway/               # NestJS: El Oráculo (Única entrada a MySQL/Firebase)
│   ├── client-web/                # Angular 21: Tienda Online (Inmersión total)           
│   └── client-mobile/             # Angular + Ionic/Capacitor: Experiencia portable      Estado(Pendiente)
│
├── libs/                          # --- LIBRERÍAS (El ADN Reutilizable) ---
│   ├── shared/                    # Capa Transversal
│   │   ├── domain/                # Interfaces y DTOs (Contratos de datos)
│   │   ├── ui/                    # Biblioteca de componentes PrimeNG + Tailwind 4
│   │   └── auth/                  # Firebase Auth (Google) + Roles RBAC
│   │
│   ├── core/                      # Capa de Inteligencia
│   │   ├── reactive-engine/       # Motor de Sintonía (Gestión de Signals y HSL)
│   │   └── studio-logic/          # Reglas de personalización de ARCANI Studio
│   │
│   └── data-access/               # --- CAPA DE PERSISTENCIA (El Guardián) ---
│       ├── api-client/            # Servicios Angular para peticiones HTTP (Signals-based)
│       ├── db-entities/           # Entidades TypeORM (Esquema físico de MySQL)
│       ├── subscribers/           # TRIGGERS DE NESTJS (Lógica de negocio: Penumbra, Veto)
│       └── migrations/            # TRIGGERS DE SQL (Auditoría e Integridad en MySQL)
│
├── Docs/                          # Documentacion del Protecto.
│
├── tools/                         # Scripts de generación y automatización de Nx
│
├── .dockerignore                  # Exclusiones para optimizar el contexto de Docker
├── .env                           # Variables de entorno locales (Secretos, API Keys)
├── .gitignore                     # Archivos y carpetas excluidos del control de versiones
├── docker-compose.yml             # Orquestación de contenedores (MySQL, Firebase Emulator)
├── firebase-service-account.json  # Credenciales de administración para Firebase SDK
├── nx.json                        # Grafo de dependencias del proyecto
└── package.json                   # Angular 21, NestJS, PrimeNG, Tailwind 4
```

## API GATAWAY

### ESTRUCTURA GENERAL DE API GATAWAY
📂 Estructura de apps/api-gateway
```bash
apps/api-gateway/
├── src/
│   ├── app/
│   │   ├── common/                               # --- CAPA TRANSVERSAL (BLINDAJE) ---
│   │   │   ├── decorators/                       # @GetUser (UID), @Public (Bypass), @Roles (RBAC)
│   │   │   ├── filters/                          # arcani-exception.filter.ts (Estandarización de errores)
│   │   │   ├── guards/                           # firebase-auth.guard.ts y roles.guard.ts (Porteros)
│   │   │   ├── interceptors/                     # reactive-theme (HSL), logging (Pulso) y uuid (Binary16)
│   │   │   ├── pipes/                            # hsl-validator (Sintonía) y trim-data (Limpieza)
│   │   │   └── interfaces/                       # request-with-user.interface.ts (Contrato de Request)
│   │   │
│   │   ├── modules/                              # --- DOMINIOS DE NEGOCIO ---
│   │   │   ├── core-engine/                      # ADN: Firebase Wrapper, DB Config y Seeds (Maestros)
│   │   │   ├── theming/                          # CORAZÓN: Sintonía Reactiva (Regla 90/7/3)
│   │   │   ├── operations/                       # GOBERNANZA: Stock PEPS, Veto y Logística
│   │   │   ├── store/                            # BAZAR: Slugs, Sales (Checkout) y Studio (Merch)
│   │   │   └── users/                            # EXPLORADOR: Perfil y Carga Lumínica
│   │   │
│   │   ├── app.module.ts                         # EL GRAN CONECTOR (Root Module)
│   │   ├── app.controller.ts                     # PUNTO DE ESCUCHA (Health Check)
│   │   └── app.service.ts                        # SERVICIO MAESTRO (Estado del Sistema)
│   │
│   ├── assets/                                   # RECURSOS ESTÁTICOS (Templates, PDFs, Logos)
│   ├── data-source.ts                            # EL ORÁCULO DE DATOS (Configuración TypeORM/MySQL)
│   └── main.ts                                   # EL DESPERTAR (Prefijo /api y Swagger UI)
│
├── Dockerfile                                    # Receta de empaquetado para Producción
├── project.json                                  # Manifiesto de tareas de Nx (Build, Serve, Test)
├── eslint.config.mjs                             # Reglas de estilo (Censor de Código)
├── jest.config.cts                               # Configuración de Pruebas (Sala de Pruebas)
└── tsconfig.app.json                             # Reglas de compilación de la Aplicación

```

### ESTRUCTURA DETALLADA DE API GATAWAY
📂 Estructura de apps/api-gateway
```bash
├── src/
│   ├── app/
│   │   ├── common/                               # --- CAPA TRANSVERSAL (BLINDAJE Y PROTOCOLOS) ---
│   │   │   ├── decorators/
│   │   │   │   ├── get-user.decorator.ts         # Extrae el UID de Firebase del Request (Identidad)
│   │   │   │   ├── public.decorator.ts           # Bypass para rutas de acceso libre (Catálogo/Bazar)
│   │   │   │   └── roles.decorator.ts            # Define jerarquías (STRATEGIC, TACTICAL, OPERATIVE)
│   │   │   ├── filters/
│   │   │   │   └── arcani-exception.filter.ts    # Estandariza errores como "Fallas de Portal"
│   │   │   ├── guards/
│   │   │   │   ├── firebase-auth.guard.ts        # Valida tokens JWT de Firebase (Auth Guard)
│   │   │   │   └── roles.guard.ts                # Control de acceso basado en RBAC (Roles)
│   │   │   ├── interceptors/
│   │   │   │   ├── reactive-theme.interceptor.ts # Inyecta paletas HSL (90/7/3) dinámicamente
│   │   │   │   ├── logging.interceptor.ts        # Monitorea latencia y salud del "Pulso del Portal"
│   │   │   │   └── uuid.interceptor.ts           # Traduce BINARY(16) <-> UUID String (Blindaje)
│   │   │   ├── pipes/
│   │   │   │   ├── hsl-validator.pipe.ts         # Valida sintaxis HSL para el Motor de Sintonía
│   │   │   │   └── trim-data.pipe.ts             # Limpieza de strings y validación estricta de DTOs
│   │   │   └── interfaces/
│   │   │       └── request-with-user.interface.ts # Extensión de Express para persistencia de usuario
│   │   │
│   │   ├── modules/                              # --- DOMINIOS DE NEGOCIO ---
│   │   │   │
│   │   │   ├── core-engine/                      # --- ADN Y SISTEMA ---
│   │   │   │   ├── auth/                         # Wrapper de Firebase (libs/shared/auth)
│   │   │   │   │   ├── auth.controller.ts
│   │   │   │   │   ├── auth.service.ts
│   │   │   │   │   └── auth.module.ts
│   │   │   │   ├── database/                     # INFRAESTRUCTURA Y PERSISTENCIA
│   │   │   │   │   └── seeds/                    # Sembrado de ADN (Datos maestros iniciales)
│   │   │   │   │       │   ├── event.seed.ts     # Inyección de Eventos (Anarquía Temporal)
│   │   │   │   │       │   ├── niche.seed.ts     # Inyección de los 16 Nichos Base
│   │   │   │   │       │   └── database-seed.module.ts # Orquestador de inicialización automática
│   │   │   │   │       └── database.module.ts    # Configuración de TypeORM y conexión a Docker
│   │   │   │   └── theming/                      # CORAZÓN REACTIVO (Regla 90/7/3)
│   │   │   │       ├── controllers/
│   │   │   │       │   └── theming.controller.ts # Sintonía de nichos y Bazar
│   │   │   │       ├── services/
│   │   │   │       │   ├── theming.service.ts    # Prioridad: Campaña > Inventario > Origen
│   │   │   │       │   └── inventory.service.ts  # Cálculo de SKUs para "Penumbra"
│   │   │   │       └── theming.module.ts
│   │   │   │
│   │   │   ├── operations/                       # --- GOBERNANZA LOGÍSTICA ---
│   │   │   │   ├── inventory/                    # Gestión de Stock y PEPS
│   │   │   │   │   ├── controllers/
│   │   │   │   │   │   └── inventory.controller.ts # Protocolo de Veto del Selector
│   │   │   │   │   ├── services/
│   │   │   │   │   │   ├── peps.service.ts         # Salida por lotes más antiguos
│   │   │   │   │   │   └── veto.service.ts         # Validación técnica de calidad
│   │   │   │   │   └── inventory.module.ts
│   │   │   │   └── logistics/                  # Abastecimiento y Traslados
│   │   │   │       ├── controllers/
│   │   │   │       │   └── logistics.controller.ts # Guías de Remisión y Órdenes de Compra
│   │   │   │       ├── services/
│   │   │   │       │   └── logistics.service.ts    # Proveedores y movimientos entre nodos
│   │   │   │       └── logistics.module.ts
│   │   │   │
│   │   │   ├── store/                          # --- EXPERIENCIA DEL EXPLORADOR ---
│   │   │   │   ├── products/                   # Rutas de la tienda y "Bazar de los Mundos"
│   │   │   │   │   ├── controllers/
│   │   │   │   │   │   └── products.controller.ts # Búsqueda por Slugs y Vitrinas
│   │   │   │   │   ├── services/
│   │   │   │   │   │   └── products.service.ts    # Orquestación de Galería y Datos Maestros
│   │   │   │   │   └── products.module.ts
│   │   │   │   ├── sales/                      # Gestión Transaccional
│   │   │   │   │   ├── controllers/
│   │   │   │   │   │   └── sales.controller.ts    # Carrito, Checkout y Órdenes
│   │   │   │   │   ├── services/
│   │   │   │   │   │   └── sales.service.ts       # Reserva de stock y validación comercial
│   │   │   │   │   └── sales.module.ts
│   │   │   │   └── studio/                     # Personalización y Co-creación
│   │   │   │       ├── controllers/
│   │   │   │       │   └── studio.controller.ts   # Pedidos de Sastrería y Merch
│   │   │   │       ├── services/
│   │   │   │       │   └── studio.service.ts      # Pagos adelantados y gestión de diseños
│   │   │   │       └── studio.module.ts
│   │   │   │
│   │   │   └── users/                          # --- GESTIÓN DEL EXPLORADOR ---
│   │   │       ├── controllers/
│   │   │       │   └── users.controller.ts      # Perfil, preferencias de carga lumínica
│   │   │       ├── services/
│   │   │       │   └── users.service.ts         # CRUD vinculado a libs/data-access
│   │   │       └── users.module.ts
│   │   │
│   │   ├── app.controller.spec.ts                # TEST DEL ORÁCULO
│   │   │                                   # - Pruebas unitarias para validar el punto de entrada
│   │   │
│   │   ├── app.controller.ts                     # PUNTO DE ESCUCHA BASE
│   │   │                                         # - Endpoint de salud (Health Check)
│   │   │                                         # - Verifica que el Portal esté activo y responda
│   │   │
│   │   ├── app.module.ts                         # EL GRAN CONECTOR (ROOT MODULE)
│   │   │                                         # - Importa todos los dominios (modules)
│   │   │                                         # - Configura variables de entorno y base de datos
│   │   │                                         # - Es el punto de unión de todo el sistema
│   │   │
│   │   ├── app.service.spec.ts                   # TEST DE LÓGICA BASE
│   │   │                                         # - Valida que los servicios raíz funcionen correctamente
│   │   │
│   │   └── app.service.ts                        # SERVICIO MAESTRO
│   │                                             # - Lógica fundamental de arranque
│   │                                             # - Devuelve el estado de conexión del sistema                                    
│   │                                 
│   │
│   ├── assets/                           # RECURSOS ESTÁTICOS (Templates, PDFs, Logos)
│   │   └── .gitkeep                      # Mantiene la carpeta en Git si está vacía
│   │
│   ├── data-source.ts                      # EL ORÁCULO DE DATOS (Configuración TypeORM)
│   │                                       # - Puente entre Entities y MySQL (Puerto 3306)
│   │                                       # - Control de Migraciones y SnakeNamingStrategy
│   │
│   ├── app.module.ts                       # Punto de unión de todos los módulos
│   └── main.ts                             # Configuración Prefijo global '/api' y Swagger UI
│   
├── Dockerfile                            # Receta para el contenedor del API (Producción)
├── eslint.config.mjs                     # Reglas de estilo específicas para esta App
├── jest.config.cts                       # Configuración de pruebas unitarias/integración
├── project.json                          # Configuración de Nx (Build, Serve, Lint, Test)
├── tsconfig.app.json                     # Reglas TS para la ejecución de la aplicación
├── tsconfig.json                         # Configuración TS local del proyecto
├── tsconfig.spec.json                    # Reglas TS específicas para los archivos .spec
└── webpack.config.cjs                    # Personalización del empaquetado (Bundle) de Nest

```

## API CLIENT WEB

### ESTRUCTURA GENERAL DE CLIENT WEB
📂 Estructura de apps/client-web
```bash
```
### ESTRUCTURA DETALLADA DE DE CLIENT WEB
📂 Estructura de apps/client-web
```bash
apps/client-web/src/app/
├── core/                               # --- EL NODO CENTRAL (SINGLETONS) ---
│   ├── guards/
│   │   ├── auth.guard.ts               # Protege rutas de "Sastrería" y "Órdenes"
│   │   └── role.guard.ts               # Filtra acceso por jerarquía (TACTICAL/OPERATIVE)
│   ├── interceptors/
│   │   ├── error.interceptor.ts        # Captura "Fallas de Portal" y las estandariza
│   │   └── auth.interceptor.ts         # Inyecta el JWT de Firebase en cada petición
│   └── services/
│       └── app-state.service.ts        # Signal global para el estado de la app
│
├── layout/                             # --- ESQUELETO PERSISTENTE ---
│   ├── components/
│   │   ├── header/
│   │   │   ├── header.component.ts     # Logo Neón + Navegación
│   │   │   ├── niche-selector.ts       # Dropdown con Aura para cambiar de Fandom
│   │   │   └── user-orbit.ts           # Avatar + Dropdown de cuenta + Switch Dark/Light
│   │   ├── footer/                     # Enlaces, Copyright y Status del Portal
│   │   └── cart-drawer/                # LADO DERECHO: El Carrito deslizable (Canvas)
│   └── shell.component.ts              # El Wrapper que orquestra Header/Footer/Main
│
├── features/                           # --- LOS MUNDOS (PÁGINAS) ---
│   ├── home/
│   │   ├── components/
│   │   │   ├── hero-portal/            # Banner principal con efecto Parallax
│   │   │   └── niche-grid/             # Acceso rápido a los 16 nichos con Cards
│   │   └── home.page.ts                # Smart Component: Carga destacados del Oráculo
│   │
│   ├── nicho-view/
│   │   ├── components/
│   │   │   ├── niche-banner/           # Banner con el color del Aura activa (7%)
│   │   │   ├── filter-bar/             # Filtros neón (Talla, Precio, Tipo)
│   │   │   └── product-gallery/        # Grid infinito de productos
│   │   └── nicho-view.page.ts          # Gatilla la sintonía al recibir el :slug
│   │
│   ├── product-detail/
│   │   ├── components/
│   │   │   ├── image-visor/            # Galería con Zoom y cambio de perspectiva
│   │   │   ├── size-selector/          # Botones con stock en tiempo real (Pipes)
│   │   │   └── purchase-actions/       # Botones de "Añadir al Carrito" y "Comprar Ya"
│   │   └── product-detail.page.ts      # Gestiona la pieza específica y su stock
│   │
│   └── checkout/
│       ├── components/
│       │   ├── order-summary/          # Resumen con cálculo de impuestos/envío
│       │   ├── shipping-form/          # Datos del explorador (dirección)
│       │   └── payment-gate/           # Integración con pasarela de pagos
│       └── checkout.page.ts            # Finalización de la transacción
│
├── shared/                             # --- UI ATÓMICA ESPECÍFICA ---
│   ├── components/
│   │   ├── product-card/               # LA PIEZA CLAVE: Card con Glow reactivo
│   │   ├── status-badge/               # Indica [DISPONIBLE, PENUMBRA, VETO]
│   │   └── neon-button/                # Botón base con la Regla 3% (Destello)
│   ├── directives/
│   │    └── glow-on-hover.directive.ts  # Efecto de luz siguiendo el mouse
│   └── pipes/                          # currencyArcani, statusColor
│
├── app.config.ts                       # CONFIGURACIÓN MAESTRA (Providers y Motor)
├── app.routes.ts                       # EL MAPA DE NAVEGACIÓN
├── app.ts                              # COMPONENTE RAÍZ (Root Component)
└── app.html                            # EL LIENZO PRINCIPAL (<router-outlet>)

```
## CORE
###  CORE / REACTIVE ENGINE
📂 Estructura de libs/core/reactive-engine/

```bash
libs/core/reactive-engine/
├── src/
│   ├── index.ts                        # El Manifiesto: Exporta el Service y el Provider
│   └── lib/
│       ├── services/                   # --- EL CEREBRO ---
│       │   ├── theme-engine.service.ts # Centralizador: Gestiona el estado con Signals
│       │   ├── luma-analyzer.service.ts# Validador de contraste (WCAG) y Safe-Colors
│       │   └── bazar-engine.service.ts # Lógica de efectos de escasez (Nebulosa)
│       │
│       ├── tokens/                     # --- CONFIGURACIÓN ---
│       │   └── theme-config.token.ts   # Inyección de ADN Maestro por defecto
│       │
│       ├── types/                      # --- LÓGICA DE CÁLCULO ---
│       │   └── engine-state.type.ts    # Estado interno del motor (Cargando, Sintonizado)
│       │
│       └── utils/                      # --- HELPERS MATEMÁTICOS ---
│           ├── color-converters.util.ts# HSL String -> Variaciones de opacidad
│           └── dom-injector.util.ts    # Escribe directamente en el Document Body

```


## DATA ACCESS
###  DATA ACCESS / DB ENTITIES
📂 Estructura de libs/data-access/db-entities/
```bash
libs/data-access/db-entities/
├── src/
│   ├── index.ts                            # EL ORÁCULO: Exportación total de Entidades y Tipos
│   └── lib/    
│       ├── core/                           # --- DOMINIO: ADN Y SISTEMA ---
│       │   ├── role-level.entity.ts        # Jerarquía de Poder (Extiende: Internal)         ✅ HABILITADO	
│       │   ├── role.entity.ts              # Cargos específicos (Extiende: Internal)         ✅ HABILITADO	
│       │   ├── niche.entity.ts             # Fuente de Verdad (Extiende: External)           ✅ HABILITADO		
│       │   ├── niche-stock.entity.ts       # Bazar Engine / Caché Analítica                  ✅ HABILITADO	
│       │   ├── niche-theme.entity.ts       # Motor Reactivo HSL                              ✅ HABILITADO
│       │   ├── niche-identity.entity.ts    # Capa de Branding y Lore                         ✅ HABILITADO
│       │   ├── event.entity.ts             # Anarquía Temporal                               ✅ HABILITADO
│       │   └── niche-event.entity.ts       # Conector de Realidades                          ✅ HABILITADO
│       │
│       ├── store/                          # --- DOMINIO: EXPERIENCIA COMERCIAL ---
│       │   ├── product.entity.ts           # El Padre / La Card (Extiende: External)         ✅ HABILITADO
│       │   ├── product-niche.entity.ts     # Ubicuidad de productos                          ✅ HABILITADO
│       │   ├── product-image.entity.ts     # Galería de Familia                              ✅ HABILITADO
│       │   ├── product-variant.entity.ts   # El SKU Comercial y Precio                       ✅ HABILITADO
│       │   └── variant-image.entity.ts     # Fidelidad Visual del Modelo                     ✅ HABILITADO
│       │
│       ├── operations/                     # --- DOMINIO: GOBERNANZA LOGÍSTICA ---
│       │   └── stock-lot.entity.ts         # Corazón del PEPS y Veto                         ✅ HABILITADO
│       │
│       ├── users/                          # --- DOMINIO: IDENTIDAD ---
│       │   └── user.entity.ts              # Identidad Delegada Firebase (Extiende: External)✅ HABILITADO
│       │
│       ├── migrations/                     # --- PERSISTENCIA: CONTROL DE VERSIONES ---      ✅ HABILITADO
│       │   └── 1713210000-InitialSchema.ts # Historial físico de MySQL
│       │
│       ├── subscribers/                    # --- GESTIÓN REACTIVA GLOBAL ---                 📅 PENDIENTE
│       │   ├── stock-safety.subscriber.ts  # Alerta de stock crítico (Bazar Mode)            📅 PENDIENTE
│       │   └── audit.subscriber.ts         # Rastro de cambios estratégico                   📅 PENDIENTE
│       │
│       ├── transformers/                   # --- PUENTES TÉCNICOS ---
│       │   └── uuid-binary.transformer.ts  # Conversor BINARY(16) ↔ UUID String              ✅ HABILITADO
│       │
│       ├── base.entity.ts                  # EL ANCESTRO: Auditoría (Created/Updated/Active) ✅ HABILITADO
│       ├── base-internal.entity.ts         # IDENTIDAD CORTA: (ID: TINYINT)                  ✅ HABILITADO
│       └── base-external.entity.ts         # IDENTIDAD PÚBLICA: (ID: BIGINT + UUID: BINARY16)✅ HABILITADO
```

## SHARED
###  SHARED / DOMAIN
📂 Estructura de libs/shared/domain/
```bash
libs/shared/domain/
├── src/
│   ├── index.ts                        # EL MANIFIESTO: Exportación pública de toda la lib
│   └── lib/
│       ├── constants/                  # --- CONFIGURACIÓN ESTRATÉGICA ---
│       │   ├── api.token.ts            # El Enchufe: InjectionToken para ARCANI_API_URL        ✅ HABILITADO
│       │   ├── api-routes.ts           # El Mapa: Diccionario de Endpoints (Nichos, Auth, etc.)✅ HABILITADO
│       │   └── branding.constants.ts   # El ADN: Colores maestros (Cian Core / Amarillo Volt)  
│       │
│       ├── interfaces/                 # --- ESTRUCTURAS LÓGICAS (CONTRATOS) ---
│       │   ├── core/                   # ADN del Ecosistema
│       │   │   ├── niche.interface.ts  # Contrato del Nicho y su Metadata
│       │   │   └── role.interface.ts   # Definición de jerarquías RBAC
│       │   ├── store/                  # Experiencia Comercial
│       │   │   ├── product.interface.ts  # Estructura de la Card/Producto
│       │   │   └── stock.interface.ts  # Contrato de disponibilidad y Veto
│       │   └── users/                  # Identidad
│       │       └── user.interface.ts   # Perfil de usuario (Firebase + Roles)
│       │
│       ├── dtos/                       # --- BLINDAJE DE ENTRADA (NestJS + Swagger) ---
│       │   ├── auth/                   # Seguridad de Acceso
│       │   │   └── login.dto.ts        # Validación de credenciales Firebase
│       │   ├── nichos/                 # Gestión de Fandoms
│       │   │   ├── create-niche.dto.ts # Decoradores @ApiProperty para Swagger
│       │   │   └── update-niche.dto.ts # Actualización parcial (Patch)
│       │   └── store/                  # Movimientos de Inventario
│       │       └── create-product.dto.ts
│       │
│       ├── types/                      # --- TIPADOS ESPECIALIZADOS ---
│       │   ├── sintonía.type.ts        # Tipos HSL (90/7/3) para el Motor Reactivo
│       │   ├── http-response.type.ts   # Estándar de respuestas de la API (Success/Error)
│       │   └── common.types.ts         # Alias de tipos (UUID, Email, etc.)
│       │
│       └── enums/                      # --- DICCIONARIOS INMUTABLES ---
│           ├── roles.enum.ts           # STRATEGIC, TACTICAL, OPERATIVE
│           ├── stock-status.enum.ts    # DISPONIBLE, PENUMBRA (Bajo Stock), VETO
│           └── fandom.enum.ts          # ANIME, KPOP, GAMING, etc.

```







```bash


```


```bash


```


```bash


```
