import { Module } from '@nestjs/common';
import { SintonizadorService } from './sintonizador.service';
import { SintonizadorController } from './sintonizador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SintonizadorEntity } from '../entities/sintonizador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SintonizadorEntity])],
  controllers: [SintonizadorController],
  providers: [SintonizadorService],
})
export class SintonizadorModule {}
