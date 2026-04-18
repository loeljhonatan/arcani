
# ESTRUCTURA GENERAL



arcani/
├── apps/                          # --- APLICACIONES (Consumidores) ---
│   ├── client-web/                # Angular 21: Tienda Online (Inmersión total)
│   ├── client-mobile/             # Angular + Ionic/Capacitor: Experiencia portable
│   ├── admin-dashboard/           # Angular 21: El Laboratorio de Anarquía
│   └── api-gateway/               # NestJS: El Oráculo (Única entrada a MySQL/Firebase)
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
├── tools/                         # Scripts de generación y automatización de Nx
├── tailwind.config.js             # Configuración de variables HSL dinámicas
├── nx.json                        # Grafo de dependencias del proyecto
└── package.json                   # Angular 21, NestJS, PrimeNG, Tailwind 4




# API GATAWAY
📂 Estructura de apps/api-gateway/src/app/



├── common/                             # --- CAPA TRANSVERSAL (BLINDAJE) ---
│   ├── decorators/
│   │   ├── get-user.decorator.ts       # Extrae el UID de Firebase del Request
│   │   ├── public.decorator.ts         # Bypass para rutas sin Auth (Catálogo)
│   │   └── roles.decorator.ts          # Define niveles (STRATEGIC, TACTICAL, OPERATIVE)
│   ├── filters/
│   │   └── arcani-exception.filter.ts  # Transforma errores en "Fallas de Portal"
│   ├── guards/
│   │   ├── firebase-auth.guard.ts      # Valida JWT de Firebase (libs/shared/auth)
│   │   └── roles.guard.ts              # Control de acceso por jerarquía RBAC
│   ├── interceptors/
│   │   ├── reactive-theme.interceptor.ts # Inyecta Aura/Destello (90/7/3) en respuestas
│   │   ├── logging.interceptor.ts      # Monitorea el "Pulso del Portal" (Performance)
│   │   └── uuid.interceptor.ts         # Transforma BINARY(16) <-> UUID String
│   ├── pipes/
│   │   ├── hsl-validator.pipe.ts       # Valida formato H S% L% para colores
│   │   └── trim-data.pipe.ts           # Limpia strings y valida DTOs
│   └── interfaces/
│       └── request-with-user.interface.ts # Contrato extendido de Express + User
│
├── modules/                            # --- DOMINIOS DE NEGOCIO ---
│   │
│   ├── core-engine/                    # --- ADN Y SISTEMA ---
│   │   ├── auth/                       # Wrapper de Firebase (libs/shared/auth)
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   └── auth.module.ts
│   │   └── theming/                    # CORAZÓN REACTIVO (Regla 90/7/3)
│   │       ├── controllers/
│   │       │   └── theming.controller.ts # Sintonía de nichos y Bazar
│   │       ├── services/
│   │       │   ├── theming.service.ts    # Prioridad: Campaña > Inventario > Origen
│   │       │   └── inventory.service.ts  # Cálculo de SKUs para "Penumbra"
│   │       └── theming.module.ts
│   │
│   ├── store/                          # --- EXPERIENCIA DEL EXPLORADOR ---
│   │   ├── products/                   # Rutas de la tienda y "Bazar de los Mundos"
│   │   │   ├── controllers/
│   │   │   │   └── products.controller.ts # Búsqueda por Slugs y Vitrinas
│   │   │   ├── services/
│   │   │   │   └── products.service.ts    # Orquestación de Galería y Datos Maestros
│   │   │   └── products.module.ts
│   │   ├── sales/                      # Gestión Transaccional
│   │   │   ├── controllers/
│   │   │   │   └── sales.controller.ts    # Carrito, Checkout y Órdenes
│   │   │   ├── services/
│   │   │   │   └── sales.service.ts       # Reserva de stock y validación comercial
│   │   │   └── sales.module.ts
│   │   └── studio/                     # Personalización y Co-creación
│   │       ├── controllers/
│   │       │   └── studio.controller.ts   # Pedidos de Sastrería y Merch
│   │       ├── services/
│   │       │   └── studio.service.ts      # Pagos adelantados y gestión de diseños
│   │       └── studio.module.ts
│   │
│   ├── operations/                     # --- GOBERNANZA LOGÍSTICA ---
│   │   ├── inventory/                  # Gestión de Stock y PEPS
│   │   │   ├── controllers/
│   │   │   │   └── inventory.controller.ts # Protocolo de Veto del Selector
│   │   │   ├── services/
│   │   │   │   ├── peps.service.ts         # Salida por lotes más antiguos
│   │   │   │   └── veto.service.ts         # Validación técnica de calidad
│   │   │   └── inventory.module.ts
│   │   └── logistics/                  # Abastecimiento y Traslados
│   │       ├── controllers/
│   │       │   └── logistics.controller.ts # Guías de Remisión y Órdenes de Compra
│   │       ├── services/
│   │       │   └── logistics.service.ts    # Proveedores y movimientos entre nodos
│   │       └── logistics.module.ts
│   │
│   └── users/                          # --- GESTIÓN DEL EXPLORADOR ---
│       ├── controllers/
│       │   └── users.controller.ts      # Perfil, preferencias de carga lumínica
│       ├── services/
│       │   └── users.service.ts         # CRUD vinculado a libs/data-access
│       └── users.module.ts
│
├── app.module.ts                       # Punto de unión de todos los módulos
└── main.ts                             # Configuración global y Swagger



# API GATAWAY resumen 2.0
Estructura de apps/api-gateway


├── common/                             # --- CAPA TRANSVERSAL (BLINDAJE Y PROTOCOLOS) ---
│   ├── decorators/
│   │   ├── get-user.decorator.ts       # Extrae el UID de Firebase del Request (Identidad)
│   │   ├── public.decorator.ts         # Bypass para rutas de acceso libre (Catálogo/Bazar)
│   │   └── roles.decorator.ts          # Define jerarquías (STRATEGIC, TACTICAL, OPERATIVE)
│   ├── filters/
│   │   └── arcani-exception.filter.ts  # Estandariza errores como "Fallas de Portal"
│   ├── guards/
│   │   ├── firebase-auth.guard.ts      # Valida tokens JWT de Firebase (Auth Guard)
│   │   └── roles.guard.ts              # Control de acceso basado en RBAC (Roles)
│   ├── interceptors/
│   │   ├── reactive-theme.interceptor.ts # Inyecta paletas HSL (90/7/3) dinámicamente
│   │   ├── logging.interceptor.ts      # Monitorea latencia y salud del "Pulso del Portal"
│   │   └── uuid.interceptor.ts         # Traduce BINARY(16) <-> UUID String (Blindaje)
│   ├── pipes/
│   │   ├── hsl-validator.pipe.ts       # Valida sintaxis HSL para el Motor de Sintonía
│   │   └── trim-data.pipe.ts           # Limpieza de strings y validación estricta de DTOs
│   └── interfaces/
│       └── request-with-user.interface.ts # Extensión de Express para persistencia de usuario
│
├── modules/                            # --- DOMINIOS DE NEGOCIO (EL MULTIVERSO) ---
│   │
│   ├── core-engine/                    # --- ADN Y SISTEMA (EL MOTOR CENTRAL) ---
│   │   ├── auth/                       # Gestión de Sesión y Perfiles
│   │   ├── theming/                    # Motor de Sintonía (Lógica de Colores y Energías)
│   │   └── database/                   # INFRAESTRUCTURA Y PERSISTENCIA
│   │       ├── seeds/                  # Sembrado de ADN (Datos maestros iniciales)
│   │       │   ├── event.seed.ts       # Inyección de Eventos (Anarquía Temporal)
│   │       │   ├── niche.seed.ts       # Inyección de los 16 Nichos Base
│   │       │   └── database-seed.module.ts # Orquestador de inicialización automática
│   │       └── database.module.ts      # Configuración de TypeORM y conexión a Docker
│   │
│   ├── store/                          # --- EXPERIENCIA DEL EXPLORADOR (FRONT-END OPS) ---
│   │   ├── products/                   # Bazar de los Mundos (Búsqueda y Visualización)
│   │   ├── sales/                      # Motor Transaccional (Carrito y Checkout)
│   │   └── studio/                     # ARCANI Studio (Personalización y Co-creación)
│   │
│   ├── operations/                     # --- GOBERNANZA LOGÍSTICA (BACK-OFFICE) ---
│   │   ├── inventory/                  # Gestión de Stock, Lotes (PEPS) y Veto técnico
│   │   └── logistics/                  # Nodos de distribución y Abastecimiento
│   │
│   └── users/                          # --- IDENTIDAD DEL EXPLORADOR ---
│       ├── controllers/                # Gestión de preferencias y carga lumínica
│       └── services/                   # CRUD de perfiles vinculado a db-entities
│
├── data-source.ts                      # EL ORÁCULO DE DATOS (Configuración TypeORM)
│                                       # - Puente entre Entities y MySQL (Puerto 3306)
│                                       # - Control de Migraciones y SnakeNamingStrategy
│
├── app.module.ts                       # EL NODO MAESTRO (Unión de Módulos)
│                                       # - Carga de configuraciones y DatabaseSeedModule
│
└── main.ts                             # EL PORTAL DE ENTRADA (Bootstrap)
                                        # - Prefijo global '/api' y Swagger UI







# data-access/db-entities

libs/data-access/db-entities/
├── src/
│   ├── index.ts                        # EL ORÁCULO: Exportación total de Entidades y Tipos
│   └── lib/
│       ├── core/                       # --- DOMINIO: ADN Y SISTEMA ---
│       │   ├── role-level.entity.ts    # Jerarquía de Poder (Extiende: Internal)
│       │   ├── role.entity.ts          # Cargos específicos (Extiende: Internal)
│       │   ├── niche.entity.ts         # Fuente de Verdad (Extiende: External)
│       │   ├── niche-stock.entity.ts   # Bazar Engine / Caché Analítica
│       │   ├── niche-theme.entity.ts   # Motor Reactivo HSL
│       │   ├── niche-identity.entity.ts# Capa de Branding y Lore
│       │   ├── event.entity.ts         # Anarquía Temporal
│       │   └── niche-event.entity.ts   # Conector de Realidades
│       │
│       ├── store/                      # --- DOMINIO: EXPERIENCIA COMERCIAL ---
│       │   ├── product.entity.ts       # El Padre / La Card (Extiende: External)
│       │   ├── product-niche.entity.ts # Ubicuidad de productos
│       │   ├── product-image.entity.ts # Galería de Familia
│       │   ├── product-variant.entity.ts # El SKU Comercial y Precio
│       │   └── variant-image.entity.ts # Fidelidad Visual del Modelo
│       │
│       ├── operations/                 # --- DOMINIO: GOBERNANZA LOGÍSTICA ---
│       │   └── stock-lot.entity.ts     # Corazón del PEPS y Veto
│       │
│       ├── users/                      # --- DOMINIO: IDENTIDAD ---
│       │   └── user.entity.ts          # Identidad Delegada Firebase (Extiende: External)
│       │
│       ├── migrations/                 # --- PERSISTENCIA: CONTROL DE VERSIONES ---
│       │   └── 1713210000-InitialSchema.ts # Historial físico de MySQL
│       │
│       ├── subscribers/                # --- GESTIÓN REACTIVA GLOBAL ---
│       │   ├── stock-safety.subscriber.ts # Alerta de stock crítico (Bazar Mode)
│       │   └── audit.subscriber.ts       # Rastro de cambios estratégico
│       │
│       ├── transformers/               # --- PUENTES TÉCNICOS ---
│       │   └── uuid-binary.transformer.ts # Conversor BINARY(16) ↔ UUID String
│       │
│       ├── base.entity.ts              # EL ANCESTRO: Auditoría (Created/Updated/Active)
│       ├── base-internal.entity.ts     # IDENTIDAD CORTA: (ID: TINYINT)
│       └── base-external.entity.ts     # IDENTIDAD PÚBLICA: (ID: BIGINT + UUID: BINARY16)


# shared/domain
📂 shared/domain

libs/shared/domain/
├── src/
│   ├── index.ts                        # EL MANIFIESTO: Exportación pública de toda la lib
│   └── lib/
│       ├── constants/                  # --- CONFIGURACIÓN ESTRATÉGICA ---
│       │   ├── api.token.ts            # El Enchufe: InjectionToken para ARCANI_API_URL
│       │   ├── api-routes.ts           # El Mapa: Diccionario de Endpoints (Nichos, Auth, etc.)
│       │   └── branding.constants.ts   # El ADN: Colores maestros (Cian Core / Amarillo Volt)
│       │
│       ├── interfaces/                 # --- ESTRUCTURAS LÓGICAS (CONTRATOS) ---
│       │   ├── core/                   # ADN del Ecosistema
│       │   │   ├── niche.interface.ts  # Contrato del Nicho y su Metadata
│       │   │   └── role.interface.ts   # Definición de jerarquías RBAC
│       │   ├── store/                  # Experiencia Comercial
│       │   │   ├── product.interface.ts# Estructura de la Card/Producto
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



# libs/core/reactive-engine/

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





# apps/client-web/src/app/


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
