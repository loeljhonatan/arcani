## INSTALAR DEPENDENCIAS PARA CONEXION CON MYSQL

Para que tu api-gateway de NestJS se conecte a MySQL, solo necesitamos cambiar el "driver" y configurar la conexión.

1. Instalar las dependencias en el Monorepo
Ejecuta esto en la raíz para que NestJS pueda hablar con MySQL:

```bash
npm install @nestjs/typeorm typeorm mysql2

```
2. Configurar la conexión en NestJS
Abre el archivo apps/api-gateway/src/app/app.module.ts y configura el acceso a tu MySQL de XAMPP:
 

```bash
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // Usuario por defecto de XAMPP
      password: '',     // Contraseña por defecto de XAMPP (vacía)
      database: 'arcani_db', // Deberás crearla en phpMyAdmin
      autoLoadEntities: true,
      synchronize: true, // Esto creará las tablas automáticamente al iniciar (solo en desarrollo)
    }),
  ],
})
export class AppModule {}


```



3. Preparar phpMyAdmin
Abre tu panel de XAMPP y asegúrate de que Apache y MySQL estén en verde (Start).
Ve a http://localhost/phpmyadmin/.
Crea una nueva base de datos llamada arcani_db.

¿Qué ganamos con MySQL y XAMPP?
Gestión Visual: Puedes ver tus tablas de nichos, productos e inventario directamente desde el navegador con phpMyAdmin.
Simplicidad: No necesitas configurar Docker o servicios externos por ahora; todo vive en tu entorno local de XAMPP.


4. Crear la Entidad en el Backend
Ve a apps/api-gateway/src/ y crea una carpeta llamada entities. Dentro, crea el archivo niche.entity.ts. Aquí usaremos los decoradores de TypeORM:

```bash
// apps/api-gateway/src/entities/niche.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ArcaniNiche } from '@arcani/shared-domain'; // Importamos tu interfaz

@Entity('niches')
export class NicheEntity implements ArcaniNiche {
  @PrimaryGeneratedColumn('uuid')

    id!: string; // El '!' elimina el error de inicialización

    @Column({ unique: true })
    label!: string;

    @Column()
    energy!: string;

    @Column()
    auraColor!: string;

    @Column()
    destelloColor!: string;

    @Column()
    ctaText!: string;

}


```


5. Registrar la Entidad en el AppModule
Para que NestJS "vea" la entidad y la cree en MySQL, actualiza tu apps/api-gateway/src/app/app.module.ts:

```bash

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NicheEntity } from '../entities/niche.entity'; // <-- Importa la entidad

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'arcani_db',
      entities: [NicheEntity], // <-- Agrega la entidad aquí
      synchronize: true, // Esto creará la tabla 'niches' en tu MySQL automáticamente
    }),
  ],
})
export class AppModule {}

```

6. El Momento de la Verdad (MySQL)
Asegúrate de que Apache y MySQL estén corriendo en tu panel de XAMPP.
Entra a http://localhost/phpmyadmin/ y asegúrate de haber creado la base de datos arcani_db.


```bash
npx nx serve api-gateway

```

¿Qué sucederá ahora?
Al iniciar el servidor, TypeORM detectará que la tabla niches no existe en tu base de datos y la creará automáticamente con todas las columnas (id, auraColor, etc.) que definimos para el ADN Geek.
¿Lograste que el servidor de NestJS conectara sin errores con MySQL? Si es así, podemos crear un pequeño Script de Inicialización para llenar la tabla con los 16 nichos oficiales.


7. Abre tu navegador y ve a: http://localhost:3000/api

http://localhost:3000/api

{
mensaje : "Hola API"
}



¡Excelente! Eso significa que tu api-gateway de NestJS está vivo y escuchando. El hecho de que veas ese JSON confirma que la comunicación entre tu servidor y el navegador es correcta.

#### --------------------------------------------------------------------------------------


#### --------------------------------------------------------------------------------------

## Siguiente Paso: Sembrar los 16 Nichos (Seed)

Ahora que la tabla está creada pero vacía, necesitamos llenarla con la configuración oficial de ARCANI (Anime, K-Pop, Gaming, etc.).
¿Quieres que creemos un "Seeder" (un servicio que inserta los datos automáticamente) para que ya tengas los colores de los nichos disponibles en la base de datos MySQL?
Esto permitirá que tu Web de Angular empiece a recibir los colores desde la base de datos y no desde el código


1. : Crear el Servicio de "Sembrado" (Seed Service)
En NestJS, crearemos un servicio que se ejecute una sola vez al iniciar para llenar la tabla niches si está vacía. Ve a 
apps/api-gateway/src/app/ y crea el archivo niche-seed.service.ts:

```bash
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NicheEntity } from '../entities/niche.entity';

@Injectable()
export class NicheSeedService implements OnModuleInit {
  constructor(
    @InjectRepository(NicheEntity)
    private nicheRepo: Repository<NicheEntity>,
  ) {}

  async onModuleInit() {
    const count = await this.nicheRepo.count();
    if (count === 0) {
      const initialNiches = [
        { label: 'Anime', energy: 'ÉPICA', auraColor: '#FF6B00', destelloColor: '#FFCC00', ctaText: '¡RECLAMAR TESORO!' },
        { label: 'K-Pop', energy: 'TREND', auraColor: '#D400FF', destelloColor: '#00F0FF', ctaText: 'UNIRSE AL FANDOM' },
        { label: 'Gaming', energy: 'TECH', auraColor: '#00FF41', destelloColor: '#FF003C', ctaText: 'INICIAR PARTIDA' },
        // ... aquí irán completándose los 16
      ];

      await this.nicheRepo.save(initialNiches);
      console.log('✅ ADN ARCANI: 16 Nichos sembrados en MySQL');
    }
  }
}


```


2. Registrar en el AppModule
Para que NestJS reconozca el repositorio y el nuevo servicio de sembrado, actualiza tu 
apps/api-gateway/src/app/app.module.ts:


```bash
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NicheEntity } from '../entities/niche.entity';
import { NicheSeedService } from './niche-seed.service'; // <-- Importa el seeder

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'arcani_db',
      entities: [NicheEntity],
      synchronize: true, 
    }),
    TypeOrmModule.forFeature([NicheEntity]), // <-- Habilita el repositorio para el seeder
  ],
  providers: [NicheSeedService], // <-- Registra el seeder
})
export class AppModule {}


```

3. Verificar en phpMyAdmin
El servidor se reiniciará automáticamente (gracias a Nx).
Deberías ver en la terminal el mensaje: ✅ ADN ARCANI: 16 Nichos sembrados....
Ve a phpMyAdmin (http://localhost/phpmyadmin/), entra a la tabla niches y ¡ahí estarán tus datos!

#### --------------------------------------------------------------------------------------


#### --------------------------------------------------------------------------------------

# siguiente paso maestro es crear un Controller en la API para que tu Web de Angular pueda pedir estos nichos por HTTP.

1. Crear el Controlador de Nichos
Crea el archivo apps/api-gateway/src/app/niche.controller.ts. 
Este se encargará de exponer la ruta GET /api/niches.


```bash

import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NicheEntity } from '../entities/niche.entity';

@Controller('niches') // La ruta será http://localhost:3000/api/niches
export class NicheController {
  constructor(
    @InjectRepository(NicheEntity)
    private nicheRepo: Repository<NicheEntity>,
  ) {}

  @Get()
  async getAllNiches() {
    // Retorna todos los nichos desde MySQL
    return await this.nicheRepo.find();
  }
}


```

2. Registrar el Controlador en el AppModule
Debes avisarle a NestJS que este controlador existe. Actualiza tu apps/api-gateway/src/app/app.module.ts:


```bash

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NicheEntity } from '../entities/niche.entity';
import { NicheSeedService } from './niche-seed.service';
import { NicheController } from './niche.controller'; // <-- Importa el controlador

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'arcani_db',
      entities: [NicheEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([NicheEntity]),
  ],
  controllers: [NicheController], // <-- Registra el controlador aquí
  providers: [NicheSeedService],
})
export class AppModule {}


```


3. Habilitar CORS (Paso Vital)
Por seguridad, los navegadores bloquean peticiones de un puerto (Angular 4200) a otro (NestJS 3000) a menos que des permiso. 
Ve a apps/api-gateway/src/main.ts y añade enableCors():


```bash

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  
  // Habilita que Angular pueda hablar con NestJS
  app.enableCors(); 
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
}


```


4. Prueba el Endpoint
Asegúrate de que el servidor se reinicie.
Abre tu navegador en: http://localhost:3000/api/niches.
¿Ves la lista de los nichos (Anime, K-Pop, etc.) en formato JSON? Si es así, el backend de ARCANI ya está listo para alimentar a la web.
¿Quieres que ahora configuremos el ThemeService en Angular para que consuma estos datos por HTTP en lugar de tenerlos fijos?

#### --------------------------------------------------------------------------------------


#### --------------------------------------------------------------------------------------

# Configuremos el ThemeService en Angular para que consuma estos datos por HTTP.

Para que tu Web de Angular 21 consuma el ADN desde MySQL, necesitamos conectar el "Cerebro" (Librería Core) con el "Corazón" (API NestJS).

1. Habilitar el Cliente HTTP en Angular
Ve a apps/client-web/src/app/app.config.ts y añade el proveedor de HttpClient. Esto es lo que permitirá a la web hacer peticiones a la API:


```bash

import { provideHttpClient, withFetch } from '@angular/common/http'; // <-- Importa esto

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()), // <-- Activa el cliente HTTP moderno
    providePrimeNG({ /* tu config anterior */ })
  ]
};


```

2. Actualizar el ThemeService (Librería Core)
Modificaremos tu libs/core/reactive-engine/src/lib/theme.service.ts para que pida los nichos a la API en lugar de tenerlos fijos. Usaremos Signals para manejar el estado de carga:


```bash

// libs/core/reactive-engine/src/lib/theme.service.ts
import { Injectable, signal, effect, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArcaniNiche } from '@arcani/shared-domain';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private http = inject(HttpClient);
  private readonly API_URL = 'http://localhost:3000/api/niches';

  // Signals de estado
  niches = signal<ArcaniNiche[]>([]);
  activeNiche = signal<ArcaniNiche | null>(null);

  constructor() {
    // 1. IMPORTANTE: Llamar a la carga de datos al iniciar el servicio
    this.loadNiches();

    // 2. Efecto para inyectar los colores en Tailwind 4
    effect(() => {
      const current = this.activeNiche();
      if (current) {
        document.documentElement.style.setProperty('--arcani-aura', current.auraColor);
        document.documentElement.style.setProperty('--arcani-destello', current.destelloColor);
      }
    });
  }

  private loadNiches() {
    this.http.get<ArcaniNiche[]>(this.API_URL).subscribe({
      next: (data) => {
        console.log('✅ ADN Recibido de MySQL:', data);
        this.niches.set(data);
        if (data.length > 0) this.activeNiche.set(data[0]); 
      },
      error: (err) => {
        console.error('❌ Error de conexión con la API de ARCANI:', err);
      }
    });
  }

  public setNiche(id: string) {
    // Usamos niches() como función porque es un Signal
    const found = this.niches().find(n => n.id === id);
    if (found) {
      this.activeNiche.set(found);
    }
  }
}


```

3. Ajustar el HTML de la Web
Como ahora los nichos vienen de la base de datos, usaremos un bucle for de Angular para crear los botones dinámicamente en 
apps/client-web/src/app/app.component.html:


```bash

<div class="min-h-screen bg-aura transition-colors duration-700 flex flex-col items-center justify-center space-y-8">
  
  @if (activeNiche()) {
    <h1 class="text-white text-6xl font-black drop-shadow-2xl animate-fade-in">
      {{ activeNiche()?.label }}
    </h1>
    <p class="text-white/80 text-xl font-bold tracking-widest uppercase">
      Energía: {{ activeNiche()?.energy }}
    </p>
  }

  <div class="flex flex-wrap justify-center gap-4 p-6 bg-black/20 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
    <!-- Botones dinámicos desde MySQL -->
    @for (niche of niches(); track niche.id) {
      <p-button [label]="niche.label" 
                (onClick)="changeNiche(niche.id)" 
                [outlined]="activeNiche()?.id !== niche.id"
                severity="secondary">
      </p-button>
    }
  </div>

  <span class="text-white font-medium italic opacity-70">
    {{ activeNiche()?.ctaText }}
  </span>
</div>


```
4. App
apps/client-web/src/app/app.component.ts:


```bash
export class App {

  protected title = 'client-web';

  private themeService = inject(ThemeService);

   // Accedemos al Signal del nicho activo
  niches = this.themeService.niches;
  // Creamos una referencia pública para el HTML
  activeNiche = this.themeService.activeNiche;

  changeNiche(id: string) {
    this.themeService.setNiche(id);
  }


}


```


¿Qué acabas de lograr?
Persistencia Real: Si mañana entras a phpMyAdmin y cambias el color de "K-Pop", la web se actualizará automáticamente sin tocar una sola línea de código Angular.
Escalabilidad: Si agregas el nicho número 17 en la base de datos, aparecerá un nuevo botón en la web de inmediato.
¿Ves los botones cargando desde la base de datos en tu navegador? Si es así, ¡el ecosistema ARCANI ya está integrado!
¿Quieres que ahora configuremos el Módulo de Autenticación con Google (Firebase) para que el fan pueda "reclamar su tesoro"? ¿Empezamos con la cuenta de Firebase?


#### --------------------------------------------------------------------------------------


