import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { Expose, Exclude } from 'class-transformer';
import { ArcaniBaseEntity } from '../base.entity.js';

@Entity('product_niche') // Nombre corto y directo
@Index('idx_product_niche_lookup', ['idNiche', 'isActive'])
export class ProductNicheEntity extends ArcaniBaseEntity {

  @PrimaryColumn({ name: 'id_product', type: 'bigint', unsigned: true })
  @Exclude()
  idProduct!: string;

  @PrimaryColumn({ name: 'id_niche', type: 'bigint', unsigned: true })
  @Exclude()
  idNiche!: string;

  @Column({ name: 'is_primary', default: false })
  @Expose()
  isPrimary!: boolean;

  // --- RELACIONES ---

  @ManyToOne('ProductEntity','productNiches', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_product' })
  @Exclude()
  product!: any;

  @ManyToOne('NicheEntity', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_niche' })
  @Expose()
  niche!: any;
}
