import { Module } from '@nestjs/common';
import { InventoryController } from './controllers/inventory.controller';
import { PepsService } from './services/peps.service';
import { VetoService } from './services/veto.service';

@Module({
  controllers: [InventoryController],
  providers: [PepsService, VetoService],
})
export class InventoryModule {}
