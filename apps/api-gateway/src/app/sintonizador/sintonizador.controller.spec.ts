import { Test, TestingModule } from '@nestjs/testing';
import { SintonizadorController } from './sintonizador.controller';
import { SintonizadorService } from './sintonizador.service';

describe('SintonizadorController', () => {
  let controller: SintonizadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SintonizadorController],
      providers: [SintonizadorService],
    }).compile();

    controller = module.get<SintonizadorController>(SintonizadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
