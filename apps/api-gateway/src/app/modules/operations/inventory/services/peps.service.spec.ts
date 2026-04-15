import { Test, TestingModule } from '@nestjs/testing';
import { PepsService } from './peps.service';

describe('PepsService', () => {
  let service: PepsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PepsService],
    }).compile();

    service = module.get<PepsService>(PepsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
