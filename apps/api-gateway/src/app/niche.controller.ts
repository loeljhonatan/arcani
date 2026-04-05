import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NicheEntity } from '../entities/niche.entity';

@Controller('niches') // La ruta será http://localhost:3000/api/niches
export class NicheController {
  constructor(
    @InjectRepository(NicheEntity)
    private nicheRepo: Repository<NicheEntity>,
  ) {}

  @Get()
  async getAllNiches() {
    // Retorna todos los nichos desde MySQL
    return await this.nicheRepo.find();
  }
}
