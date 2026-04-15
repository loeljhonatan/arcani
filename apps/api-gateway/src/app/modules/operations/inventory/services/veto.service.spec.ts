import { Test, TestingModule } from '@nestjs/testing';
import { VetoService } from './veto.service';

describe('VetoService', () => {
  let service: VetoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VetoService],
    }).compile();

    service = module.get<VetoService>(VetoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
