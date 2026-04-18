import { Entity, Column, PrimaryGeneratedColumn, OneToOne, UpdateDateColumn } from 'typeorm';



@Entity('inventory_sync')
export class PruebaInventorySyncEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ type: 'int', default: 0 })
  current_sku_count!: number;

  @Column({ type: 'timestamp', nullable: true })
  last_sync_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

    // Relación inversa con Niche
    @OneToOne('NicheColorEntity', 'inventorySync')
    nicheColor!: any;
}
