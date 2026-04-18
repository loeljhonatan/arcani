
1. Instalar el paquete de Swagger
Si aún no has instalado la dependencia necesaria en tu apps/api-gateway, ejecuta el siguiente comando en la raíz de tu monorepo:

```bash
npm install --save @nestjs/swagger

npm install @nestjs/config


```

# npm de Modulos de nestJS
```bash

npx nx g @nx/nest:module apps/api-gateway/src/app/modules/core-engine/theming/theming
npx nx g @nx/nest:module apps/api-gateway/src/app/modules/core-engine/auth/auth

npx nx g @nx/nest:module apps/api-gateway/src/app/modules/operations/inventory/inventory
npx nx g @nx/nest:module apps/api-gateway/src/app/modules/operations/logistics/logistics

npx nx g @nx/nest:module apps/api-gateway/src/app/modules/store/products/products
npx nx g @nx/nest:module apps/api-gateway/src/app/modules/store/sales/sales
npx nx g @nx/nest:module apps/api-gateway/src/app/modules/store/studio/studio


npx nx g @nx/nest:module apps/api-gateway/src/app/modules/users/users

npx nx g @nx/nest:module apps/api-gateway/src/app/modules/core-engine/database/database

npx nx g @nx/nest:module apps/api-gateway/src/app/modules/core-engine/database/seeds/database-seeds

npx nx g @nx/nest:service apps/api-gateway/src/app/modules/core-engine/database/seeds/event-seed

```

# npm de Controllers y Services de nestJS


```bash

npx nx g @nx/nest:controller apps/api-gateway/src/app/modules/core-engine/auth/auth
npx nx g @nx/nest:service apps/api-gateway/src/app/modules/core-engine/auth/auth

npx nx g @nx/nest:controller apps/api-gateway/src/app/modules/core-engine/theming/controllers/theming
npx nx g @nx/nest:service apps/api-gateway/src/app/modules/core-engine/theming/services/theming




npx nx g @nx/nest:controller apps/api-gateway/src/app/modules/operations/inventory/controllers/inventory
npx nx g @nx/nest:service apps/api-gateway/src/app/modules/operations/inventory/services/peps
npx nx g @nx/nest:service apps/api-gateway/src/app/modules/operations/inventory/services/veto

npx nx g @nx/nest:controller apps/api-gateway/src/app/modules/operations/logistics/controllers/logistics
npx nx g @nx/nest:service apps/api-gateway/src/app/modules/operations/logistics/services/logistics




npx nx g @nx/nest:controller apps/api-gateway/src/app/modules/store/products/controllers/products
npx nx g @nx/nest:service apps/api-gateway/src/app/modules/store/products/services/products

npx nx g @nx/nest:controller apps/api-gateway/src/app/modules/store/sales/controllers/sales
npx nx g @nx/nest:service apps/api-gateway/src/app/modules/store/sales/services/sales

npx nx g @nx/nest:controller apps/api-gateway/src/app/modules/store/studio/controllers/studio
npx nx g @nx/nest:service apps/api-gateway/src/app/modules/store/studio/services/studio





npx nx g @nx/nest:controller apps/api-gateway/src/app/modules/users/controllers/users
npx nx g @nx/nest:service apps/api-gateway/src/app/modules/users/services/users

```




Para que tu API inyecte la Sintonía HSL (90/7/3) automáticamente en cada JSON que viaje al navegador, vamos a crear el reactive-theme.interceptor.ts.
Este interceptor atrapará la respuesta del Service, consultará el estado de Penumbra y envolverá el JSON con los colores que Tailwind 4 usará en el frontend.


 
```bash

npx nx g @nx/nest:interceptor apps/api-gateway/src/app/common/interceptors/reactive-theme

```


 
```bash

npx nx g @nx/angular:lib --name=data-access-subscribers --directory=libs/data-access/subscribers --unitTestRunner=vitest-analog --linter=eslint --standalone

npx nx g @nx/angular:lib --name=data-access-migrations --directory=libs/data-access/migrations --unitTestRunner=vitest-analog --linter=eslint --standalone


npx nx g @nx/angular:lib --name=core-studio-logic --directory=libs/core/studio-logic --unitTestRunner=vitest-analog --linter=eslint --standalone


npx nx g @nx/angular:lib --name=shared-ui --directory=libs/shared/ui --unitTestRunner=vitest-analog --linter=eslint --standalone



npx nx g @nx/nest:class subscribers/stock-safety --project=data-access-db-entities --unitTestRunner=vitest


```




```bash

npm install typeorm-naming-strategies

```


Crear Migración

```bash

npx typeorm-ts-node-commonjs migration:generate libs/data-access/db-entities/src/lib/migrations/InitialArcaniSchema -d apps/api-gateway/src/data-source.ts

```

Seeds

libs/data-access/db-entities/src/lib/migrations/

```bash

npx typeorm migration:create libs/data-access/db-entities/src/lib/migrations/SeedInitialRoles


```








# npm de Modulos Client-Web

```bash


npx nx g c layout/shell --project=client-web --inline-style --skip-tests --type=component --flat

npx nx g c layout/components/header --project=client-web --inline-style --skip-tests --type=component

npx nx g c layout/components/footer --project=client-web --inline-style --skip-tests --type=component

npx nx g c layout/components/sidebar --project=client-web --inline-style --skip-tests --type=component


# 1. Crear el Smart Component (La Página)
npx nx g c features/home/home --project=client-web --inline-style --skip-tests --type=page --flat

# 2. Crear la carpeta para componentes exclusivos (Opcional, manual)
mkdir -Force apps/client-web/src/app/features/home/components



npx nx g c features/home/home --project=client-web --type=page --flat


npx nx g c features/nicho-view/nicho-view --project=client-web --inline-style --skip-tests --type=page --flat
npx nx g c features/nicho-view/components/niche-banner --project=client-web --inline-style --skip-tests --type=component
npx nx g c features/nicho-view/components/filter-bar --project=client-web --inline-style --skip-tests --type=component
npx nx g c features/nicho-view/components/product-gallery --project=client-web --inline-style --skip-tests --type=component


npx nx g c features/product-detail/product-detail --project=client-web --inline-style --skip-tests --type=page --flat
npx nx g c features/product-detail/components/image-visor --project=client-web --inline-style --skip-tests --type=component
npx nx g c features/product-detail/components/size-selector --project=client-web --inline-style --skip-tests --type=component
npx nx g c features/product-detail/components/purchase-actions --project=client-web --inline-style --skip-tests --type=component

npx nx g c shared/components/product-card --project=client-web --inline-style --skip-tests --type=component
npx nx g c shared/components/status-badge --project=client-web --inline-style --skip-tests --type=component
npx nx g c shared/components/neon-button --project=client-web --inline-style --skip-tests --type=component

```





