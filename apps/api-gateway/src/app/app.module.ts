import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './modules/core-engine/auth/auth.module';
import { InventoryModule } from './modules/operations/inventory/inventory.module';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { NicheEntity, NicheIdentityEntity, NicheStockEntity, NicheThemeEntity } from '@arcani/data-access-db-entities';
import { DatabaseModule } from './modules/core-engine/database/database.module';
import { ThemingModule } from './modules/core-engine/theming/theming.module';
import { APP_GUARD } from '@nestjs/core';
import { ReactiveThemeInterceptor } from './common/interceptors/reactive-theme.interceptor';

@Module({
  imports: [

    // 1. Configuración Global (Buscando el .env)
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // 2. Conexión a Base de Datos (Motor de Persistencia)
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule, ThemingModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true,// 👈 Importante: Esto cargará todas las entidades de las libs
        synchronize: false, // Seguridad total: se usan migrations | empre false en producción, usar migrations
        namingStrategy: new SnakeNamingStrategy(),// 🛡️ Traductor Universal (Normalización snake_case -> camelCase)
        connectorPackage: 'mysql2', // Optimizado para alto rendimiento
        logging: ['error', 'warn'],


        entities: [
        NicheEntity,
        NicheThemeEntity,
        NicheStockEntity,
        NicheIdentityEntity
      ],


      }),
    }),

       // 3. Módulos de Dominio (Estructura ARCANI)
    DatabaseModule, // 👈 Aquí dentro vivirán todos tus Seeds (Eventos, Nichos)
    ThemingModule, //   Usado para tema
    AuthModule, // Importante: Debe estar importado para que el Guard vea la estrategia


    InventoryModule,


  ],

  controllers: [AppController],
  providers: [

    // 2. Registro Global del Interceptor de Sintonía
    {
      provide: APP_GUARD, // 🛡️ ACTIVACIÓN GLOBAL: Todas las rutas ahora son PRIVADAS por defecto
      useClass: ReactiveThemeInterceptor,
    },

    AppService,
  ],
})
export class AppModule {}
