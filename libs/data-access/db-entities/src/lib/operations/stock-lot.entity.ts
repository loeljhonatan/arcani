import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { ArcaniBaseEntity } from '../base.entity.js';
import { Expose, Exclude } from 'class-transformer';

export enum PaymentStatus {
  PENDING = 'PENDING',
  RELEASED = 'RELEASED',
  VETOED = 'VETOED',
}

@Entity('stock_lot')
@Index('idx_peps_active', ['idVariant', 'isApproved', 'currentQuantity', 'entryDate'])
@Index('idx_finanzas_status', ['paymentStatus'])
export class StockLotEntity extends ArcaniBaseEntity {

  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  @Exclude() // ID técnico interno
  id!: string;

  @Column({ name: 'id_variant', type: 'bigint', unsigned: true })
  @Exclude()
  idVariant!: string;

  @Column({ name: 'initial_quantity', type: 'int', unsigned: true })
  @Expose()
  initialQuantity!: number;

  @Column({ name: 'current_quantity', type: 'int', unsigned: true })
  @Expose()
  currentQuantity!: number;

  @Column({ name: 'cost_price', type: 'decimal', precision: 10, scale: 2 })
  @Exclude() // El costo es información estratégica, solo para ADMIN
  costPrice!: number;

  // --- GOBERNANZA Y VETO ---
  @Column({ name: 'is_approved', default: false })
  @Expose()
  isApproved!: boolean;

  @Column({
    type: 'enum',
    enum: PaymentStatus,
    default: PaymentStatus.PENDING,
    name: 'payment_status'
  })
  @Expose()
  paymentStatus!: PaymentStatus;

  @Column({ name: 'approved_by', type: 'bigint', unsigned: true, nullable: true })
  @Exclude()
  approvedByGuid?: string;

  // --- CONTROL TEMPORAL ---
  @Column({ name: 'entry_date', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  @Expose()
  entryDate!: Date;

  // --- RELACIONES ---
  @ManyToOne('ProductVariantEntity', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_variant' })
  @Exclude() // No necesitamos el objeto variante completo aquí, ya venimos de él
  variant!: any;

  @ManyToOne('UserEntity', { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'approved_by' })
  @Expose() // Exponemos quién aprobó el lote para trazabilidad
  approver?: any;
}
