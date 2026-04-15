import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn, UpdateDateColumn } from 'typeorm';
import { NicheEntity } from '../core/niche.entity';


@Entity('product_inventory_sync')
export class ProductInventorySyncEntity {
  @PrimaryColumn({ type: 'bigint', unsigned: true })
  id_niche!: string;

  @Column({ type: 'int', unsigned: true, default: 0 })
  current_sku_count!: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0.00 })
  velocity_score!: number;

  @UpdateDateColumn({ name: 'last_sync_at' })
  lastSyncAt!: Date;

  // Relación inversa con Niche
  @OneToOne(() => NicheEntity, (niche) => niche.inventorySync)
  @JoinColumn({ name: 'id_niche' })
  niche!: NicheEntity;
}
