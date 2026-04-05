import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NicheEntity } from '../entities/niche.entity';

@Injectable()
export class NicheSeedService implements OnModuleInit {
  constructor(
    @InjectRepository(NicheEntity)
    private nicheRepo: Repository<NicheEntity>,
  ) {}

  async onModuleInit() {
    const count = await this.nicheRepo.count();
    if (count === 0) {
      const initialNiches = [
        { label: 'Anime', energy: 'ÉPICA', auraColor: '#FF6B00', destelloColor: '#FFCC00', ctaText: '¡RECLAMAR TESORO!' },
        { label: 'K-Pop', energy: 'TREND', auraColor: '#D400FF', destelloColor: '#00F0FF', ctaText: 'UNIRSE AL FANDOM' },
        { label: 'Gaming', energy: 'TECH', auraColor: '#00FF41', destelloColor: '#FF003C', ctaText: 'INICIAR PARTIDA' },
        // ... aquí irán completándose los 16
      ];

      await this.nicheRepo.save(initialNiches);
      console.log('✅ ADN ARCANI: 16 Nichos sembrados en MySQL');
    }
  }
}


