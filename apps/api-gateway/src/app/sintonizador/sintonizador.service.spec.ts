import { Test, TestingModule } from '@nestjs/testing';
import { SintonizadorService } from './sintonizador.service';

describe('SintonizadorService', () => {
  let service: SintonizadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SintonizadorService],
    }).compile();

    service = module.get<SintonizadorService>(SintonizadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
