import { Module } from '@nestjs/common';
import { ThemingService } from './services/theming.service';
import { ThemingController } from './controllers/theming.controller';

@Module({
  providers: [ThemingService],
  controllers: [ThemingController],
})
export class ThemingModule {}
