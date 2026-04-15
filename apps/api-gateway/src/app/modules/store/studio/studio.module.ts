import { Module } from '@nestjs/common';
import { StudioController } from './controllers/studio.controller';
import { StudioService } from './services/studio.service';

@Module({
  controllers: [StudioController],
  providers: [StudioService],
})
export class StudioModule {}
