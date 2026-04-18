import { Entity, Column, ManyToOne, JoinColumn, Index, OneToMany } from 'typeorm';
import { Expose, Exclude } from 'class-transformer';
import { ArcaniExternalIdEntity } from '../base-external.entity.js';

@Entity('product_variant')
@Index('idx_variant_lookup', ['slug', 'isActive'])
@Index('idx_variant_parent_active', ['idProduct', 'isActive'])
export class ProductVariantEntity extends ArcaniExternalIdEntity {

  @Column({ unique: true, length: 255 })
  @Expose()
  slug!: string;

  @Column({ name: 'id_product', type: 'bigint', unsigned: true })
  @Exclude()
  idProduct!: string;

  @Column({ name: 'sku_code', length: 50, unique: true, nullable: true })
  @Expose()
  skuCode?: string;

  @Column({ name: 'variant_name', length: 100 })
  @Expose()
  variantName!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @Expose()
  price!: number;

  @Column({ name: 'offer_price', type: 'decimal', precision: 10, scale: 2, nullable: true })
  @Expose()
  offerPrice?: number;

  // --- RELACIÓN CON EL PRODUCTO MAESTRO ---
  @ManyToOne('ProductEntity', 'variants', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_product' })
  @Exclude() // Ocultamos el padre para evitar bucles, el cliente ya conoce al producto
  product!: any;

  // En product-variant.entity.ts
  @OneToMany('VariantImageEntity','variant')
  @Expose()
  variantImages!: any[];

}
