import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { NicheEntity } from '../entities/niche.entity';
import { NicheSeedService } from './niche-seed.service';
import { NicheController } from './niche.controller';

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // Usuario por defecto de XAMPP
      password: '',     // Contraseña por defecto de XAMPP (vacía)
      database: 'arcani_db', // Deberás crearla en phpMyAdmin
      entities: [NicheEntity], // <-- Agrega la entidad aquí
      //autoLoadEntities: true,
      synchronize: true, // Esto creará las tablas automáticamente al iniciar (solo en desarrollo)
    }),

    TypeOrmModule.forFeature([NicheEntity]), // <-- Habilita el repositorio para el seeder

  ],
  controllers: [AppController, NicheController],// <-- Registra el controlador aquí
  providers: [AppService,NicheSeedService], // <-- Registra el seeder


})
export class AppModule {}
