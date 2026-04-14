import { InjectRepository } from "@nestjs/typeorm";
import { NicheResponseDto } from "./dto/niche-response.dto";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { NicheEntity } from "@arcani/data-access-db-entities";


@Injectable()
export class NicheService {

  constructor(
    @InjectRepository(NicheEntity)
    private nicheRepo: Repository<NicheEntity>
  ) {}

  async findAllForSintonia(): Promise<NicheResponseDto[]> {
    // Realizamos un Join con la tabla de sincronización de inventario
    const niches = await this.nicheRepo.createQueryBuilder('niche')
      .leftJoinAndSelect('niche.inventorySync', 'sync')
      .where('niche.is_active = :active', { active: true })
      .getMany();

    return niches.map(n => ({
      uuid: n.uuid, // El Transformer que creamos ya lo convierte a String
      slug: n.slug,
      name: n.name,
      color_primary: n.color_primary,
      color_accent: n.color_accent,
      color_light: n.color_light,
      color_dark: n.color_dark,
      current_sku_count: n.inventorySync?.current_sku_count || 0,
      bazar_threshold: n.bazar_threshold,
      custom_config: n.custom_config,
    }));
  }
}
