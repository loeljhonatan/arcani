import { Module } from '@nestjs/common';
import { EventSeedService } from './event-seed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity, NicheEntity, NicheEventEntity } from '@arcani/data-access-db-entities';

@Module({
  imports: [
    // Registramos las 3 entidades necesarias para la relación
    TypeOrmModule.forFeature([EventEntity, NicheEntity, NicheEventEntity])
  ],
  providers: [EventSeedService],
  exports: [EventSeedService],
})
export class DatabaseSeedsModule {}
