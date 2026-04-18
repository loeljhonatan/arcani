import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity('niches_color')
export class NicheColorEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ type: 'uuid', unique: true }) // Aquí podrías aplicar tu Transformer si es necesario
  uuid!: string;

  @Column({ unique: true })
  slug!: string;

  @Column()
  name!: string;

  @Column({ default: true })
  is_active!: boolean;

  @Column({ nullable: true })
  color_primary!: string;

  @Column({ nullable: true })
  color_accent!: string;

  @Column({ nullable: true })
  color_light!: string;

  @Column({ nullable: true })
  color_dark!: string;

  @Column({ type: 'int', default: 0 })
  bazar_threshold!: number;

  @Column({ type: 'json', nullable: true })
  custom_config: any;

  // Relación OneToOne con la tabla de sincronización
  @OneToOne('PruebaInventorySyncEntity','nicheColor')
  @JoinColumn({ name: 'inventory_sync_id' })
  inventorySync!: any;
}
