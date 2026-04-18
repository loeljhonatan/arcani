import { Module } from '@nestjs/common';
import { DatabaseSeedsModule } from './seeds/database-seeds.module';

@Module({
  imports: [
   // TypeOrmModule.forRoot(AppDataSource.options),
    DatabaseSeedsModule, // Conectamos los seeds aquí
  ],
  exports: [ DatabaseSeedsModule],
})
export class DatabaseModule {}
