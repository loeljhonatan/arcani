import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn,  } from 'typeorm';
import { ArcaniBaseEntity } from '../base.entity.js';
import { Expose, Exclude } from 'class-transformer';

@Entity('niche_event')
export class NicheEventEntity extends ArcaniBaseEntity {

  @PrimaryColumn({ name: 'id_niche', type: 'bigint', unsigned: true })
  @Exclude()
  idNiche!: string;

  @PrimaryColumn({ name: 'id_event', type: 'bigint', unsigned: true })
  @Exclude()
  idEvent!: string;

  @Column({ name: 'is_host', default: false })
  @Expose()
  isHost!: boolean;

  // --- RELACIONES ---

  @ManyToOne('NicheEntity', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_niche' })
  @Expose()
  niche!: any;

  @ManyToOne('EventEntity', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_event' })
  @Expose()
  event!: any;


}
