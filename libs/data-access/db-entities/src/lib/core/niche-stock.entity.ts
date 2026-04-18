import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { ArcaniBaseEntity } from '../base.entity.js';
import { Expose, Exclude } from 'class-transformer';

@Entity('niche_stock') // Nombre más limpio y directo
export class NicheStockEntity extends ArcaniBaseEntity {

  @PrimaryColumn({ type: 'bigint', unsigned: true })
  @Exclude()
  id!: string;

  @Column({ name: 'current_sku_count', type: 'int', unsigned: true, default: 0 })
  @Expose()
  currentSkuCount!: number;

  @Column({ name: 'velocity_score', type: 'decimal', precision: 5, scale: 2, default: 0.00 })
  @Expose()
  velocityScore!: number;

  @Column({ name: 'last_sync_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Expose()
  lastSyncAt!: Date;

  @OneToOne('NicheEntity','stock', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id' })
  @Exclude()
  niche!: any;
}
