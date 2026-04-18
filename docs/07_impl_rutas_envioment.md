1. Generar los archivos de Environment con Nx/Angular
Ejecuta el siguiente comando para que Angular CLI cree la estructura necesaria en tu aplicación de frontend:

```bash
npx nx g @schematics/angular:environments --project=client-web
```

2. Configurar la URL en el archivo de desarrollo
Este comando habrá creado una carpeta environments dentro de apps/client-web/src/. Ahora vamos a ponerle el "ADN" de ARCANI.
Abre: apps/client-web/src/environments/environment.ts (para desarrollo)
Sustituye el contenido por este

```bash
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api' // La URL de tu api-gateway (NestJS)
};

```

(Opcional) Abre: apps/client-web/src/environments/environment.development.ts y asegúrate de que tenga lo mismo.

3. Crear el Token en la librería Shared
Ahora necesitamos el "enchufe" que mencionamos. Esto va en la capa de Domain porque es un contrato que todos deben conocer.
Crear archivo: libs/shared/domain/src/lib/constants/api.token.ts

```bash
import { InjectionToken } from '@angular/core';

// Este es el identificador único para la URL de nuestra API
export const ARCANI_API_URL = new InjectionToken<string>('ARCANI_API_URL');

```

¡No olvides exportarlo! Asegúrate de que en el archivo libs/shared/domain/src/index.ts aparezca:
export * from './lib/constants/api.token.js'; (Recuerda el .js por el estándar ESM que usas).

```bash
export * from './lib/constants/api.token.js';
```

4. Conectar el Environment con el Token
Ahora vamos a decirle a la aplicación client-web que use el valor del environment para llenar ese InjectionToken.
Abre: apps/client-web/src/app/app.config.ts
Modifica los providers para que se vea así:

```bash
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
// 1. Importa el Token de la lib
import { ARCANI_API_URL } from '@arcani/shared/domain'; 
// 2. Importa el enviroment de la propia app
import { environment } from '../environments/environment'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    // 3. Hacemos la conexión
    { provide: ARCANI_API_URL, useValue: environment.apiUrl },
  ],
};

```

5. Verificar el angular.json o project.json
Nx necesita saber qué archivo usar cuando compilas para producción. Busca en apps/client-web/project.json (o angular.json) que exista la sección de fileReplacements dentro de la configuración de production:

```bash
"configurations": {
  "production": {
    "fileReplacements": [
      {
        "replace": "apps/client-web/src/environments/environment.ts",
        "with": "apps/client-web/src/environments/environment.prod.ts"
      }
    ]
  }
}

```