import { Entity, Column, ManyToOne, JoinColumn, type Relation } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

import { ArcaniInternalIdEntity } from '../base-internal.entity.js';
import { RoleLevelEntity } from './role-level.entity.js';

@Entity('role')
export class RoleEntity extends ArcaniInternalIdEntity{

  @Column({
    type: 'varchar',
    length: 50,
    unique: true
  })
  @Expose()
  name!: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true
  })
  @Expose()
  description!: string;

  @Column({
    type: 'tinyint',
    unsigned: true,
    name: 'id_level'
  })
  @Exclude() // 🛡️ El frontend nunca verá el FK.
  id_level!: number;

  // --- RELACIONES ---

  @ManyToOne(() => RoleLevelEntity)
  @JoinColumn({ name: 'id_level' })
  @Expose() // Exponemos el nivel para saber si el rol es STRATEGIC, TACTICAL, etc.
  level!: Relation<RoleLevelEntity>; // Usa Relation<> aquí

}

