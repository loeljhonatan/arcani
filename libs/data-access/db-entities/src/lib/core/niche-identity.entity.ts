import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { ArcaniBaseEntity } from '../base.entity.js';
import { Expose, Exclude } from 'class-transformer';

// Definimos los tipos de tono para consistencia en TypeScript
export enum NicheToneTag {
  EPICA = 'ÉPICA',
  MISTICA = 'MÍSTICA',
  TREND = 'TREND',
  GLOW = 'GLOW',
  TECH = 'TECH',
  CREATIVA = 'CREATIVA',
}

@Entity('niche_identity')
export class NicheIdentityEntity extends ArcaniBaseEntity {

  @PrimaryColumn({ type: 'bigint', unsigned: true })
  @Exclude()
  id!: string;

  @Column({ name: 'main_icon', length: 50 })
  @Expose()
  mainIcon!: string;

  @Column({ name: 'secondary_icon', length: 50, nullable: true })
  @Expose()
  secondaryIcon?: string;

  @Column({
    type: 'enum',
    enum: NicheToneTag,
    name: 'tone_tag'
  })
  @Expose()
  toneTag!: NicheToneTag;

  @Column({ length: 255 })
  @Expose()
  subtitle!: string;

  @Column({ name: 'narrative_concept', length: 255, nullable: true })
  @Expose()
  narrativeConcept?: string;

  // RELACIÓN 1:1 CON EL NICHO
  @OneToOne('NicheEntity','identity', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id' })
  @Exclude()
  niche!: any;
}
