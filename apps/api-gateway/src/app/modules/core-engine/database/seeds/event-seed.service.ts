import { EventEntity, NicheEntity, NicheEventEntity } from '@arcani/data-access-db-entities';
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EventSeedService implements OnModuleInit {

  private readonly logger = new Logger(EventSeedService.name);

  constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepo: Repository<EventEntity>,
    @InjectRepository(NicheEntity)
    private readonly nicheRepo: Repository<NicheEntity>,
    @InjectRepository(NicheEventEntity)
    private readonly nicheEventRepo: Repository<NicheEventEntity>,
  ) {}

  async onModuleInit() {
    const eventCount = await this.eventRepo.count();

    if (eventCount === 0) {
      this.logger.log('⏳ Sembrando Eventos y conectando Nichos...');

      // 1. Buscamos los nichos que ya insertaste vía migración
      const animeNiche = await this.nicheRepo.findOneBy({ slug: 'anime' });
      const kpopNiche = await this.nicheRepo.findOneBy({ slug: 'kpop' });

      // 2. Creamos el Evento Maestro
      const newEvent = await this.eventRepo.save({
        uuid: crypto.randomUUID(), // 👈 GENERACIÓN de uuid MANUAL AQUÍ
        slug: 'festival-multiverso',
        name: 'Festival del Multiverso',
        cloudinaryId: 'arcani/events/multiverse-fest',
        dateStart: new Date(),
        dateEnd: new Date(Date.now() + 86400000 * 5),
        priority: 1
      });

      // 3. Creamos la relación M:M en la tabla niche-event
      if (animeNiche && kpopNiche) {
        await this.nicheEventRepo.save([
          { event: newEvent, niche: animeNiche },
          { event: newEvent, niche: kpopNiche }
        ]);
        this.logger.log(`✅ Evento "${newEvent.name}" vinculado a Anime y K-Pop.`);
      }
    }
  }


}
