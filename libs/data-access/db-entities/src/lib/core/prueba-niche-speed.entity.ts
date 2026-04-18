import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('niches_prueba')
export class PruebaNicheSpeedEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50 })
  label!: string;

  @Column({ length: 30 })
  energy!: string;

  @Column({ length: 7 }) // Para guardar códigos HEX como #FF6B00
  auraColor!: string;

  @Column({ length: 7 })
  destelloColor!: string;

  @Column()
  ctaText!: string;
}
