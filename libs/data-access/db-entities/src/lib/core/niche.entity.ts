import { Entity, Column, OneToOne } from 'typeorm';
import { ArcaniBaseEntity } from '../base.entity'; // La que creamos con el Transformer
import { ProductInventorySyncEntity } from '../operations/product-inventory-sync.entity';

@Entity('niche') // Nombre de la tabla en singular
export class NicheEntity extends ArcaniBaseEntity {
  @Column({ unique: true, length: 50 })
  slug!: string;

  @Column({ length: 50 })
  name!: string;

  @Column({ type: 'text', nullable: true })
  description!: string;

  @Column({ length: 255 })
  cloudinary_id!: string;

  @Column({ length: 25 })
  color_primary!: string; // Formato HSL: "210 100% 50%"

  @Column({ length: 25 })
  color_accent!: string;

  @Column({ length: 25 })
  color_light!: string;

  @Column({ length: 25 })
  color_dark!: string;

  @Column({ default: 25 })
  bazar_threshold!: number;

  @Column({ type: 'json', nullable: true })
  custom_config: any;

  @Column({ default: 0 })
  sort_order!: number;

  // Relación 1:1 con la tabla de sincronización para el Bazar
  @OneToOne(() => ProductInventorySyncEntity, (sync) => sync.niche)
  inventorySync!: ProductInventorySyncEntity;
}
