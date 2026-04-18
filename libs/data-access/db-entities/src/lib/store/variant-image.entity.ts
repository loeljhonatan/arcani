import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { Expose, Exclude } from 'class-transformer';
import { ArcaniExternalIdEntity } from '../base-external.entity.js';

@Entity('variant_image')
@Index('idx_variant_visuals', ['idVariant', 'isActive', 'sortOrder'])
export class VariantImageEntity extends ArcaniExternalIdEntity {

  @Column({ name: 'id_variant', type: 'bigint', unsigned: true })
  @Exclude()
  idVariant!: string;

  @Column({ name: 'cloudinary_id', length: 255 })
  @Expose()
  cloudinaryId!: string;

  @Column({ name: 'sort_order', type: 'smallint', default: 0 })
  @Expose()
  sortOrder!: number;

  // --- RELACIÓN CON LA VARIANTE ESPECÍFICA ---
  @ManyToOne('ProductVariantEntity', 'variantImages', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_variant' })
  @Exclude() // Evitamos recursividad
  variant!: any;
}
