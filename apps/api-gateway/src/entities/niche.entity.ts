// apps/api-gateway/src/entities/niche.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ArcaniNiche } from '@arcani/shared-domain'; // Importamos tu interfaz

@Entity('niches')
export class NicheEntity implements ArcaniNiche {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  label!: string; // Ej: 'Anime'

  @Column()
  energy!: string; // Ej: 'ÉPICA'

  @Column()
  auraColor!: string; // Hex: #FF6B00

  @Column()
  destelloColor!: string; // Hex: #FFCC00

  @Column()
  ctaText!: string; // Ej: '¡RECLAMAR TESORO!'
}
