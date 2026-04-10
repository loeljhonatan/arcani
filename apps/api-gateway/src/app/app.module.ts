import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { NicheEntity } from '../entities/niche.entity';
import { NicheSeedService } from './niche-seed.service';
import { NicheController } from './niche.controller';
import { SintonizadorModule } from './sintonizador/sintonizador.module';
import { SintonizadorEntity } from './entities/sintonizador.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // Usuario por defecto de XAMPP
      password: '', // Contraseña por defecto de XAMPP (vacía)
      database: 'arcani_db', // Deberás crearla en phpMyAdmin
      entities: [NicheEntity,SintonizadorEntity], // <-- Agrega la entidad aquí
      //autoLoadEntities: true,
      synchronize: false, // Esto creará las tablas automáticamente al iniciar (solo en desarrollo)


      // OPCIÓN A (Recomendada): Carga automática
      //autoLoadEntities: true,
    }),

    TypeOrmModule.forFeature([NicheEntity]),

    SintonizadorModule, // <-- Habilita el repositorio para el seeder
  ],
  controllers: [AppController, NicheController], // <-- Registra el controlador aquí
  providers: [AppService, NicheSeedService], // <-- Registra el seeder
})
export class AppModule {}
