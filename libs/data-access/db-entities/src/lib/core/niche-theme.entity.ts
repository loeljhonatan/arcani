import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn, type Relation } from 'typeorm';
import { Expose, Exclude } from 'class-transformer';
import { ArcaniBaseEntity } from '../base.entity.js';

@Entity('niche_theme')
export class NicheThemeEntity extends ArcaniBaseEntity {

  @PrimaryColumn({ type: 'bigint', unsigned: true })
  @Exclude()
  id!: string;

  @Column({ name: 'use_inheritance', default: true })
  @Expose()
  useInheritance!: boolean;

  @Column({ name: 'bazar_threshold', type: 'int', default: 25 })
  @Expose()
  bazarThreshold!: number;

  @Column({ name: 'color_primary', length: 25 })
  @Expose()
  colorPrimary!: string; // El "Aura" (7%)

  @Column({ name: 'color_accent', length: 25 })
  @Expose()
  colorAccent!: string;  // El "Destello" (3%)

  @Column({ name: 'color_light', length: 25 })
  @Expose()
  colorLight!: string;

  @Column({ name: 'color_dark', length: 25 })
  @Expose()
  colorDark!: string;

  @Column({ name: 'cloudinary_id', length: 255 })
  @Expose()
  cloudinaryId!: string;

  @Column({ type: 'json', nullable: true })
  @Expose()
  customConfig?: any;

  // RELACIÓN 1:1 CON EL NICHO
  @OneToOne('NicheEntity', 'theme', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id' })
  @Exclude() // El nicho ya tiene el tema, no necesitamos re-exponerlo aquí
  niche!: Relation<any>; // Apuntamos de vuelta al padre
}
