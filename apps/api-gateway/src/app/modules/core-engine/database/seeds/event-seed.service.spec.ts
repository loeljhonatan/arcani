import { Test, TestingModule } from '@nestjs/testing';
import { EventSeedService } from './event-seed.service';

describe('EventSeedService', () => {
  let service: EventSeedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventSeedService],
    }).compile();

    service = module.get<EventSeedService>(EventSeedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
