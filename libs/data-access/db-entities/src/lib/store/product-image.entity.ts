import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { Expose, Exclude } from 'class-transformer';
import { ArcaniExternalIdEntity } from '../base-external.entity.js';

@Entity('product_image')
@Index('idx_gallery_lookup', ['idProduct', 'isActive', 'sortOrder'])
export class ProductImageEntity extends ArcaniExternalIdEntity {

  @Column({ name: 'id_product', type: 'bigint', unsigned: true })
  @Exclude() // Ocultamos la FK física
  idProduct!: string;

  @Column({ name: 'cloudinary_id', length: 255 })
  @Expose()
  cloudinaryId!: string;

  @Column({ name: 'sort_order', type: 'smallint', default: 0 })
  @Expose()
  sortOrder!: number;

  // --- RELACIÓN CON EL PADRE ---
  @ManyToOne('ProductEntity', 'productImages', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_product' })
  @Exclude() // Evitamos recursividad al consultar el producto
  product!: any;
}
