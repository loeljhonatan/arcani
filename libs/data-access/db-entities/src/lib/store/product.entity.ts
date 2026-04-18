import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { Expose, Exclude } from 'class-transformer';
import { ArcaniExternalIdEntity } from '../base-external.entity.js';

@Entity('product')
@Index('idx_product_active', ['isActive'])
@Index('idx_product_niche_active', ['mainIdNiche', 'isActive'])
@Index('idx_product_slug', ['slug'])
export class ProductEntity extends ArcaniExternalIdEntity {

  @Column({ unique: true, length: 255 })
  @Expose()
  slug!: string;

  @Column({ length: 255 })
  @Expose()
  name!: string;

  @Column({ type: 'text', nullable: true })
  @Expose()
  description?: string;

  // --- ANCLA DE SINTONÍA ---
  @Column({ name: 'main_id_niche', type: 'bigint', unsigned: true })
  @Exclude() // Ocultamos el ID físico
  mainIdNiche!: string;

  @ManyToOne('NicheEntity', { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'main_id_niche' })
  @Expose() // Exponemos el objeto Nicho para heredar su sintonía (Theme/Identity)
  mainNiche!: any;

 /*  @OneToMany(() => ProductVariantEntity, (variant) => variant.product)
  @Expose() // ✅ Exponemos para que el detalle del producto sea completo
  variants!: ProductVariantEntity[];


  @OneToMany(() => ProductNicheEntity, (productNiche) => productNiche.product)
  @Exclude() // Solo se carga bajo demanda mediante Joins
  productNiches!: ProductNicheEntity[];

  // En product.entity.ts
  @OneToMany(() => ProductImageEntity, (image) => image.product)
  @Expose() // Exponemos para que el detalle del producto incluya su galería
  productImages!: ProductImageEntity[]; */


}
