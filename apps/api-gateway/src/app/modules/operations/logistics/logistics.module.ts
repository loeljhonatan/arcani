import { Module } from '@nestjs/common';
import { LogisticsController } from './controllers/logistics.controller';
import { LogisticsService } from './services/logistics.service';

@Module({
  controllers: [LogisticsController],
  providers: [LogisticsService],
})
export class LogisticsModule {}
