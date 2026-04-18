import { Module } from '@nestjs/common';
import { ThemingService } from './services/theming.service';
import { ThemingController } from './controllers/theming.controller';
import { NicheEntity, NicheStockEntity, NicheThemeEntity } from '@arcani/data-access-db-entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // Cargamos las 3 tablas necesarias para el ADN visual
    TypeOrmModule.forFeature([
      NicheEntity,
      NicheThemeEntity,
      NicheStockEntity
    ]),
  ],
  providers: [ThemingService],
  controllers: [ThemingController],
  exports: [ThemingService], // Crítico para que el Interceptor lo vea
})
export class ThemingModule {}
