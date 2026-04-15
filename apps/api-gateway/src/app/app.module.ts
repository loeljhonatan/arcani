import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { NicheSeedService } from './niche-seed.service';
import { NicheController } from './niche.controller';
import { SintonizadorModule } from './sintonizador/sintonizador.module';

import { ThemingModule } from './modules/core-engine/theming/theming.module';
import { NicheEntity } from '@arcani/data-access-db-entities';
import { AuthModule } from './modules/core-engine/auth/auth.module';
import { InventoryModule } from './modules/operations/inventory/inventory.module';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [

     // 1. Configuración Global de Variables de Entorno
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),


    // 2. Conexión a Base de Datos (Motor de Persistencia)
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: false, // Seguridad total: se usan migrations | empre false en producción, usar migrations
        logging: ['error', 'warn'],
        connectorPackage: 'mysql2', // Optimizado para alto rendimiento

        // 🛡️ Traductor Universal (Normalización snake_case -> camelCase)
        namingStrategy: new SnakeNamingStrategy(),
      }),
    }),

    // 3. Registro de Entidades Específicas del App (Si es necesario)
    TypeOrmModule.forFeature([NicheEntity]),


    // 4. Módulos de Dominio (El ADN de ARCANI)
    SintonizadorModule,
    ThemingModule,
    AuthModule,
    InventoryModule,// <-- Habilita el repositorio para el seeder


  ],

  controllers: [AppController, NicheController], // <-- Registra el controlador aquí
  providers: [AppService, NicheSeedService], // <-- Registra el seeder
})
export class AppModule {}
