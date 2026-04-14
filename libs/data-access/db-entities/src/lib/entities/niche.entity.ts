import { Entity, Column } from 'typeorm';
import { Expose } from 'class-transformer';
import { ArcaniBaseEntity } from '../base.entity';

@Entity('arcani_niches')
export class NicheEntity extends ArcaniBaseEntity {
  @Column()
  @Expose()
  name!: string;

  @Column({ name: 'fandom_type' })
  @Expose({ name: 'fandomType' }) // Mapeo automático de nombres
  fandomType!: string;
}
