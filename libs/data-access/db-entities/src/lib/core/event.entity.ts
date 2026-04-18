import { Entity, Column, Index, OneToMany } from 'typeorm';
import { ArcaniExternalIdEntity } from '../base-external.entity.js';
import { Expose, Exclude } from 'class-transformer';

@Entity('event')
@Index('idx_event_dates', ['dateStart', 'dateEnd'])
@Index('idx_event_active', ['isActive'])
export class EventEntity extends ArcaniExternalIdEntity {

  @Column({ unique: true, length: 50 })
  @Expose()
  slug!: string;

  @Column({ length: 100 })
  @Expose()
  name!: string;

  @Column({ type: 'text', nullable: true })
  @Expose()
  description?: string;

  @Column({ length: 50, nullable: true })
  @Expose()
  icon?: string;

  @Column({ name: 'cloudinary_id', length: 255 })
  @Expose()
  cloudinaryId!: string;

  @Column({ name: 'date_start', type: 'datetime' })
  @Expose()
  dateStart!: Date;

  @Column({ name: 'date_end', type: 'datetime' })
  @Expose()
  dateEnd!: Date;

  @Column({ type: 'int', default: 0 })
  @Expose()
  priority!: number;

  @Column({ name: 'immersion_level', type: 'tinyint', default: 100 })
  @Expose()
  immersionLevel!: number;

  @Column({ name: 'color_primary', length: 25, nullable: true })
  @Expose()
  colorPrimary?: string;

  @Column({ name: 'color_accent', length: 25, nullable: true })
  @Expose()
  colorAccent?: string;

  @Column({ name: 'wildcard_css', type: 'text', nullable: true })
  @Exclude() // Solo se inyecta vía motor reactivo, no se expone crudo
  wildcardCss?: string;

  @Column({ name: 'wildcard_js', type: 'text', nullable: true })
  @Exclude()
  wildcardJs?: string;

  @Column({ name: 'event_config', type: 'json', nullable: true })
  @Expose()
  eventConfig?: any;

  @Column({ name: 'discount_percent', type: 'decimal', precision: 5, scale: 2, default: 0.00 })
  @Expose()
  discountPercent!: number;

  @OneToMany('NicheEventEntity', 'event')
  @Exclude() // Evita que al pedir un evento se traiga la lista gigante de nichos por defecto
  nicheEvents!: any[];

}
