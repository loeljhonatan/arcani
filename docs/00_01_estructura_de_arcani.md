# ESTRUCTURA DEL PROYECTO MONOREPO ARCANI.


## 📋 Convenciones de Estado del Proyecto


| Emoji | TÉRMINO | DESCRIPCIÓN | USO IDEAL |
| :---: | :--- | :--- | :--- |
| 🟡 | **REFERENCIA** | Documentación para investigar su funcionamiento. | Guías, notas de arquitectura y análisis de flujo. |
| ⚪ | **MAQUETA** | Archivo creado pero sin lógica interna (en blanco). | Scaffolding o carpetas recién creadas. |
| ⚙️ | **EN DESARROLLO** | Código en proceso de escritura activa. | Tareas asignadas que están "in-progress". |
| 🧪 | **EN PRUEBAS** | Fase de validación, QA o corrección de errores. | Código terminado que busca aprobación. |
| 🟢 | **IMPLEMENTADO** | En uso, pero sujeto a ajustes por desarrollo. | Código funcional integrado al proyecto. |
| 🚀 | **HABILITADO** | Funcionalidad activa y operativa al 100%. | Módulos listos para el usuario final. |
| 🔴 | **PENDIENTE** | Tarea o archivo que aún no se ha iniciado. | Backlog o funcionalidades futuras. |
| 🔒 | **VITAL** | Configuración base y estructural sensible. | Archivos `config`, `.env`, o `main.ts`. |
| 🟠 | **OBSOLETO** | Código antiguo marcado para su eliminación. | Refactorizaciones que dejan código atrás. |


# 💡 Leyenda de Estados
🟡 REFERENCIA
⚪ MAQUETA
⚙️ EN DESARROLLO
🧪 EN PRUEBAS
🟢 IMPLEMENTADO
🚀 HABILITADO
🔴 PENDIENTE
🔒 VITAL
🟠 OBSOLETO


## ESTRUCTURA RAIZ 
📂 Estructura de arcani
```bash

arcani/
├── .angular/                      # ⚪ MAQUETA       Cache de compilación de Angular (Auto-generado)
├── .nx/                           # 🔒 VITAL         Cache y scripts internos del motor de Nx
├── .vscode/                       # 🟡 REFERENCIA    Configuración compartida de VS Code (Extensiones, Debug)
├── apps/                          # 🟢 IMPLEMENTADO  --- APLICACIONES (Consumidores) ---
├── dist/                          # 🚀 HABILITADO    Artefactos finales listos para producción
├── dist-temp/                     # ⚪ MAQUETA       Directorio temporal para compilaciones intermedias
├── docs/                          # 🟡 REFERENCIA    Documentación del Proyecto (Arquitectura, Roadmap)
├── libs/                          # 🟢 IMPLEMENTADO  --- LIBRERÍAS (El ADN Reutilizable) ---
├── node_modules/                  # 🔒 VITAL         Dependencias externas instaladas vía NPM
├── tmp/                           # ⚪ MAQUETA       Archivos temporales de ejecución
│
├── .dockerignore                  # 🔒 VITAL         Exclusiones para optimizar el contexto de Docker
├── .editorconfig                  # 🟡 REFERENCIA    Estándares de formato de código entre editores
├── .env                           # 🔒 VITAL         Variables de entorno locales (Secretos, API Keys)
├── .gitignore                     # 🔒 VITAL         Archivos y carpetas excluidos del control de versiones
├── .npmrc                         # 🔒 VITAL         Configuración personalizada de NPM (Registros, Scopes)
├── .prettierignore                # 🟡 REFERENCIA    Archivos omitidos por el formateador Prettier
├── .prettierrc                    # 🟡 REFERENCIA    Reglas de estilo de código (Punto y coma, comillas)
├── docker-compose.yml             # 🚀 HABILITADO    Orquestación de contenedores (MySQL, Firebase)
├── eslint.config.mjs              # 🔒 VITAL         Reglas de linting modernas (ESLint Flat Config)
├── firebase-service-account.json  # 🔒 VITAL         Credenciales de administración para Firebase SDK
├── jest.config.ts                 # 🧪 EN PRUEBAS    Configuración global de Testing unitario
├── jest.preset.js                 # 🔒 VITAL         Ajustes preestablecidos de Jest para Nx
├── nx.json                        # 🔒 VITAL         Grafo de dependencias y políticas de Nx
├── package-lock.json              # 🔒 VITAL         Árbol exacto de dependencias instaladas
├── package.json                   # 🔒 VITAL         Manifiesto: Angular 21, NestJS, Tailwind 4
├── README.md                      # 🟡 REFERENCIA    Manual principal y descripción del ecosistema
├── tsconfig.base.json             # 🔒 VITAL         Configuración base de TypeScript y Alias
└── vitest.workspace.ts            # 🧪 EN PRUEBAS    Configuración de Vitest para tests de velocidad


```

##  ESTRUCTURA GENERAL
📂 Estructura de arcani
```bash
arcani/
├── apps/                          # 🟢 IMPLEMENTADO  --- APLICACIONES (Consumidores) ---
│   ├── admin-dashboard/           # 🟢 IMPLEMENTADO  Angular 21: El Laboratorio de Anarquía
│   ├── api-gateway/               # 🟢 IMPLEMENTADO  NestJS: El Oráculo (Entrada única)
│   ├── client-web/                # 🟢 IMPLEMENTADO  Angular 21: Tienda Online (Inmersión)
│   └── client-mobile/             # 🔴 PENDIENTE     Angular + Ionic: Experiencia portable
│
├── libs/                          # 🟢 IMPLEMENTADO  --- LIBRERÍAS (El ADN Reutilizable) ---
│   ├── core/                      # 🟢 IMPLEMENTADO  Capa de Inteligencia
│   │   ├── reactive-engine/       # ⚙️ EN DESARROLLO  Motor de Sintonía (Signals y HSL)
│   │   └── studio-logic/          # ⚪ MAQUETA       Reglas de personalización ARCANI
│   │
│   ├── data-access/               # 🟢 IMPLEMENTADO  --- CAPA DE PERSISTENCIA ---
│   │   ├── api-client/            # ⚙️ EN DESARROLLO  Servicios Angular (Signals-based)
│   │   ├── db-entities/           # 🟢 IMPLEMENTADO  Entidades TypeORM (MySQL)
│   │   ├── migrations/            # ⚪ MAQUETA       Triggers SQL (Auditoría MySQL)
│   │   └── subscribers/           # ⚪ MAQUETA       Triggers NestJS (Penumbra, Veto)
│   │
│   └── shared/                    # 🟢 IMPLEMENTADO  Capa Transversal
│       ├── auth/                  # ⚙️ EN DESARROLLO  Firebase Auth + Roles RBAC
│       ├── domain/                # ⚙️ EN DESARROLLO  Interfaces y DTOs (Contratos)
│       └── ui/                    # ⚙️ EN DESARROLLO  Componentes PrimeNG + Tailwind 4
│
├── Docs/                          # 🟡 REFERENCIA    Documentación del Proyecto
│
├── tools/                         # 🔒 VITAL         Scripts de automatización de Nx
│
├── .dockerignore                  # 🔒 VITAL         Exclusiones de contexto Docker
├── .env                           # 🔒 VITAL         Variables de entorno (Secretos)
├── .gitignore                     # 🔒 VITAL         Archivos excluidos de Git
├── docker-compose.yml             # 🚀 HABILITADO    Orquestación (MySQL, Firebase)
├── firebase-service-account.json  # 🔒 VITAL         Credenciales Admin SDK
├── nx.json                        # 🔒 VITAL         Grafo de dependencias
└── package.json                   # 🔒 VITAL         Angular 21, NestJS, Tailwind 4


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


apps/api-gateway/
├── src/
│   ├── app/
│   │   ├── common/                               # 🔒 VITAL         --- CAPA TRANSVERSAL (BLINDAJE) ---
│   │   │   ├── decorators/      🟡 REFERENCIA  # ⚙️ EN DESARROLLO  @GetUser, @Public, @Roles (RBAC)
│   │   │   ├── filters/         🟡 REFERENCIA   # ⚪ MAQUETA       Estandarización de errores (Arcani)
│   │   │   ├── guards/                           # 🟢 IMPLEMENTADO  Porteros: Firebase Auth y Roles
│   │   │   ├── interceptors/  🟡 REFERENCIA     # ⚙️ EN DESARROLLO HSL Theme, Logging y UUID Binary16
│   │   │   ├── interfaces/      🟡 REFERENCIA   # ⚪ MAQUETA        Contrato de Request con Usuario
│   │   │   └── pipes/           🟡 REFERENCIA    # ⚙️ EN DESARROLLO  Sintonía HSL y Limpieza de datos
│   │   │
│   │   ├── modules/                              # 🟢 IMPLEMENTADO  --- DOMINIOS DE NEGOCIO ---
│   │   │   ├── core-engine/                      # 🔒 VITAL         Firebase Wrapper, DB Config y Seeds
│   │   │   ├── operations/                       # 🔴 PENDIENTE     Gobernanza: Stock PEPS y Logística
│   │   │   ├── store/                            # 🔴 PENDIENTE     Bazar: Slugs, Sales y Studio
│   │   │   ├── theming/                          # ⚙️ EN DESARROLLO  Sintonía Reactiva (Regla 90/7/3)
│   │   │   └── users/                            # 🟢 IMPLEMENTADO  Explorador: Perfil y Carga Lumínica
│   │   │
│   │   ├── app.controller.ts                     # 🚀 HABILITADO    PUNTO DE ESCUCHA (Health Check)
│   │   ├── app.module.ts                         # 🔒 VITAL         EL GRAN CONECTOR (Root Module)
│   │   └── app.service.ts                        # 🟢 IMPLEMENTADO  SERVICIO MAESTRO (Estado del Sistema)
│   │
│   ├── assets/                                   # 🟡 REFERENCIA    Recursos Estáticos (Templates, Logos)
│   ├── data-source.ts                            # 🔒 VITAL         Configuración TypeORM / MySQL
│   └── main.ts                                   # 🔒 VITAL         EL DESPERTAR (Prefijo /api)
│
├── Dockerfile                                    # 🚀 HABILITADO    Receta de empaquetado Producción
├── eslint.config.mjs                             # 🟡 REFERENCIA    Reglas de estilo (Censor de Código)
├── jest.config.cts                               # 🧪 EN PRUEBAS    Configuración de Sala de Pruebas
├── project.json                                  # 🔒 VITAL         Manifiesto de tareas de Nx
└── tsconfig.app.json                             # 🔒 VITAL         Reglas de compilación TS




```

### ESTRUCTURA DETALLADA DE API GATAWAY
📂 Estructura de apps/api-gateway
```bash
├── src/
│   ├── app/                                              # 🔒 VITAL         --- NÚCLEO DE LA APLICACIÓN ---
│   │   ├── common/                                       # 🔒 VITAL         --- CAPA TRANSVERSAL (BLINDAJE Y PROTOCOLOS) ---
│   │   │   │
│   │   │   ├── decorators/                               # 🟡 REFERENCIA    --- ANOTACIONES DE IDENTIDAD ---
│   │   │   │   ├── get-user.decorator.ts                 # 🔴 PENDIENTE    Extrae el UID de Firebase (Identidad)
│   │   │   │   ├── public.decorator.ts                   # 🟢 IMPLEMENTADO Bypass para rutas de acceso libre (Catálogo/Bazar)
│   │   │   │   └── roles.decorator.ts                    # 🔴 PENDIENTE    Jerarquías (STRATEGIC, TACTICAL)
│   │   │   │
│   │   │   ├── filters/                                  # 🟡 REFERENCIA    --- GESTIÓN DE FALLAS ---
│   │   │   │   └── arcani-exception.filter.ts            # 🔴 PENDIENTE    Estandariza errores: "Fallas de Portal"
│   │   │   │
│   │   │   ├── guards/                                   # 🔒 VITAL         --- PORTEROS DE ACCESO ---
│   │   │   │   ├── firebase-auth.guard.ts                # 🟢 IMPLEMENTADO  # Valida tokens JWT de Firebase (Auth Guard)
│   │   │   │   └── roles.guard.ts                        # 🔴 PENDIENTE      Control de acceso basado en (Roles)
│   │   │   │
│   │   │   ├── interceptors/                             # ⚙️ EN DESARROLLO  --- PROCESAMIENTO DINÁMICO ---
│   │   │   │   ├── logging.interceptor.ts                # 🔴 PENDIENTE   Monitorea latencia (Pulso del Portal)
│   │   │   │   ├── reactive-theme.interceptor.ts         # ⚙️ EN DESARROLLO  Inyecta paletas HSL (90/7/3) dinámicamente
│   │   │   │   └── uuid.interceptor.ts                   # 🔴 PENDIENTE     Traduce BINARY(16) <-> UUID String (Blindaje)
│   │   │   │
│   │   │   ├── interfaces/                               # 🟡 REFERENCIA    --- CONTRATOS TÉCNICOS ---
│   │   │   │   └── request-with-user.interface.ts        # 🔴 PENDIENTE       Extensión de Express para persistencia de usuario
│   │   │   │
│   │   │   └── pipes/                                    # 🧪 EN PRUEBAS    --- VALIDACIÓN DE FLUJO ---
│   │   │       ├── hsl-validator.pipe.ts                 # ⚙️ EN DESARROLLO  Valida sintaxis HSL para el Motor de Sintonía
│   │   │       └── trim-data.pipe.ts                     # 🔴 PENDIENTE   Limpieza de strings y validación estricta de DTOs
│   │   │
│   │   │
│   │   │
│   │   ├── modules/                                      # 🟢 IMPLEMENTADO  --- DOMINIOS DE NEGOCIO ---
│   │   │   │
│   │   │   ├── core-engine/                              # 🔒 VITAL         --- ADN Y SISTEMA ---
│   │   │   │   ├── auth/                             # 🟢 IMPLEMENTADO  Wrapper de Firebase (libs/shared/auth)
│   │   │   │   │   ├── auth.controller.ts            # 🟢 IMPLEMENTADO  Endpoints de Identidad
│   │   │   │   │   ├── auth.module.ts                # 🔒 VITAL         Configuración Auth
│   │   │   │   │   └── auth.service.ts               # 🟢 IMPLEMENTADO  Lógica de tokens y UID
│   │   │   │   │ 
│   │   │   │   ├── database/                         # 🔒 VITAL         Infraestructura y Persistencia
│   │   │   │   │   ├── seeds/                        # 🟢 IMPLEMENTADO  Sembrado de Datos Maestros
│   │   │   │   │   │   ├── database-seed.module.ts   # 🔒 VITAL         Orquestador de Seeds
│   │   │   │   │   │   ├── event.seed.ts             # 🟢 IMPLEMENTADO  Inyección de Eventos
│   │   │   │   │   │   └── niche.seed.ts             # 🟢 IMPLEMENTADO  Inyección de 16 Nichos
│   │   │   │   │   └── database.module.ts            # 🔒 VITAL         Conexión TypeORM / MySQL
│   │   │   │   │ 
│   │   │   │   └── core-engine.module.ts             # 🔒 VITAL         ORQUESTADOR ADN (Auth + DB)
│   │   │   │
│   │   │   ├── operations/                           # 🟢 IMPLEMENTADO  --- GOBERNANZA LOGÍSTICA ---
│   │   │   │   ├── inventory/                        # 🟢 IMPLEMENTADO  Gestión de Stock y PEPS
│   │   │   │   │   ├── controllers/                  
│   │   │   │   │   │   └── inventory.controller.ts   # 🟢 IMPLEMENTADO  Protocolo de Veto del Selector
│   │   │   │   │   ├── services/                     
│   │   │   │   │   │   ├── peps.service.ts           # 🟢 IMPLEMENTADO  Salida por antigüedad
│   │   │   │   │   │   └── veto.service.ts           # 🟢 IMPLEMENTADO  Validación técnica de calidad
│   │   │   │   │   └── inventory.module.ts           # 🔒 VITAL         Módulo de Inventario
│   │   │   │   │ 
│   │   │   │   ├── logistics/                        # 🟢 IMPLEMENTADO  Abastecimiento y Traslados
│   │   │   │   │   ├── controllers/                  
│   │   │   │   │   │   └── logistics.controller.ts   # 🟢 IMPLEMENTADO  Guías de Remisión y Órdenes de Compra
│   │   │   │   │   ├── services/                     
│   │   │   │   │   │   └── logistics.service.ts      # 🟢 IMPLEMENTADO  Proveedores y movimientos entre nodos
│   │   │   │   │   └── logistics.module.ts           # 🔒 VITAL         Módulo de Logística
│   │   │   │   │ 
│   │   │   │   └── operations.module.ts              # 🔒 VITAL         ORQUESTADOR LOGÍSTICO
│   │   │   │
│   │   │   ├── store/                                # 🟢 IMPLEMENTADO  --- EXPERIENCIA DEL EXPLORADOR ---
│   │   │   │   ├── products/                         # 🟢 IMPLEMENTADO  Catálogo y Bazar
│   │   │   │   │   ├── controllers/                  
│   │   │   │   │   │   └── products.controller.ts    # 🟢 IMPLEMENTADO  Búsqueda por Slugs y Vitrinas
│   │   │   │   │   ├── services/                     
│   │   │   │   │   │   └── products.service.ts       # 🟢 IMPLEMENTADO  Orquestación de Galería y Datos Maestros
│   │   │   │   │   └── products.module.ts            # 🔒 VITAL         Módulo de Productos
│   │   │   │   │ 
│   │   │   │   ├── sales/                            # 🟢 IMPLEMENTADO  Gestión Transaccional
│   │   │   │   │   ├── controllers/                  
│   │   │   │   │   │   └── sales.controller.ts       # 🟢 IMPLEMENTADO  Carrito, Checkout y Órdenes
│   │   │   │   │   ├── services/                     
│   │   │   │   │   │   └── sales.service.ts          # 🟢 IMPLEMENTADO  Reserva de stock y validación comercial
│   │   │   │   │   └── sales.module.ts               # 🔒 VITAL         Módulo de Ventas
│   │   │   │   │ 
│   │   │   │   ├── studio/                           # ⚙️ EN DESARROLLO  Personalización ARCANI
│   │   │   │   │   ├── controllers/                  
│   │   │   │   │   │   └── studio.controller.ts      # ⚙️ EN DESARROLLO  Pedidos de Sastrería y Merch
│   │   │   │   │   ├── services/                     
│   │   │   │   │   │   └── studio.service.ts         # ⚙️ EN DESARROLLO  Gestión de Diseños
│   │   │   │   │   └── studio.module.ts              # 🔒 VITAL         Módulo de Studio
│   │   │   │   │ 
│   │   │   │   └── store.module.ts                   # 🔒 VITAL         ORQUESTADOR TIENDA
│   │   │   │
│   │   │   ├── theming/                                  # ⚙️ EN DESARROLLO  --- SINTONÍA REACTIVA ---
│   │   │   │   │
│   │   │   │   ├── controllers/                          # 🟢 IMPLEMENTADO  Endpoints (Nativo/Dark)
│   │   │   │   │   └── theming.controller.ts             
│   │   │   │   ├── services/                             # ⚙️ EN DESARROLLO  Cálculo Regla 90/7/3
│   │   │   │   │   └── sintonía.service.ts               
│   │   │   │   ├── logic/                                # 🧪 EN PRUEBAS    Algoritmo Nebulosa Mística
│   │   │   │   │   └── bazar.logic.ts                    
│   │   │   │   ├── constants/                            # 🔒 VITAL         16 Nichos Raíz
│   │   │   │   │   └── niche-root.constants.ts           
│   │   │   │   ├── events/                               # ⚙️ EN DESARROLLO  Gestor de Micromundos
│   │   │   │   │   └── micromundos.service.ts            
│   │   │   │   ├── dto/                                  # 🟡 REFERENCIA    Contrato de actualización
│   │   │   │   │   └── update-theme.dto.ts               
│   │   │   │   ├── schemas/                              # 🔒 VITAL         Variables de Control CSS
│   │   │   │   │   └── css-variables.schema.ts           
│   │   │   │   ├── interfaces/                           # 🟡 REFERENCIA    Carga de Frecuencia
│   │   │   │   │   └── lumínica.interface.ts             
│   │   │   │   ├── README.md                             # 🟡 REFERENCIA    Manual de Sintonía
│   │   │   │   └── theming.module.ts                     # 🔒 VITAL         MÓDULO DE SINTONÍA
│   │   │   │
│   │   │   └── users/                                # 🟢 IMPLEMENTADO  --- GESTIÓN DEL EXPLORADOR ---
│   │   │       ├── controllers/                      
│   │   │       │   └── users.controller.ts           # 🟢 IMPLEMENTADO  Perfil, preferencias de carga lumínica
│   │   │       ├── services/                         
│   │   │       │   └── users.service.ts              # 🟢 IMPLEMENTADO  CRUD de Usuarios vinculado a libs/data-access
│   │   │       └── users.module.ts                   # 🔒 VITAL         MÓDULO DE USUARIOS
│   │   │
│   │   │
│   │   ├── app.controller.spec.ts                # 🧪 EN PRUEBAS    Test del Oráculo: Valida punto de entrada
│   │   ├── app.controller.ts                     # 🚀 HABILITADO    Punto de Escucha: Health Check del Portal
│   │   ├── app.module.ts                         # 🔒 VITAL         El Gran Conector: Root Module del sistema
│   │   ├── app.service.spec.ts                   # 🧪 EN PRUEBAS    Test de Lógica Base: Servicios raíz
│   │   └── app.service.ts                        # 🟢 IMPLEMENTADO  Servicio Maestro: Estado de conexión
│   │
│   ├── assets/                                       # 🟡 REFERENCIA    --- RECURSOS ESTÁTICOS (Templates, PDFs, Logos) ---
│   │   └── .gitkeep                              # 🔒 VITAL         Persistencia de carpeta en Git
│   │
│   ├── data-source.ts                                # 🔒 VITAL         El Oráculo de Datos (Config TypeORM)
│   │                                                                     # - Puente entre Entities y MySQL (Puerto 3306)
│   │                                                                     # - Control de Migraciones y SnakeNamingStrategy
│   └── main.ts                                       # 🔒 VITAL         El Despertar: Prefijo /api y Swagger
│
├── Dockerfile                                        # 🚀 HABILITADO    Receta de contenedor para Producción
├── eslint.config.mjs                                 # 🟡 REFERENCIA    Reglas de estilo (Censor de Código)
├── jest.config.cts                                   # 🧪 EN PRUEBAS    Configuración de Sala de Pruebas
├── project.json                                      # 🔒 VITAL         Manifiesto de tareas de Nx (Build)
├── tsconfig.app.json                                 # 🔒 VITAL         Reglas de compilación de la App
├── tsconfig.json                                     # 🔒 VITAL         Configuración TS local del proyecto
├── tsconfig.spec.json                                # 🧪 EN PRUEBAS    Reglas TS para archivos de test
└── webpack.config.cjs                                # 🔒 VITAL         Personalización del empaquetado


```




│   │   │   │   └── theming/                      # CORAZÓN REACTIVO (Regla 90/7/3)
│   │   │   │       ├── controllers/
│   │   │   │       │   └── theming.controller.ts # Sintonía de nichos y Bazar
│   │   │   │       ├── services/
│   │   │   │       │   ├── theming.service.ts    # Prioridad: Campaña > Inventario > Origen
│   │   │   │       │   └── inventory.service.ts  # Cálculo de SKUs para "Penumbra"
│   │   │   │       └── theming.module.ts



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
