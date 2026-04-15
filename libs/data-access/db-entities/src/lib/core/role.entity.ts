import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { ArcaniBaseEntity } from '../base.entity';
import { RoleLevel } from './role-level.entity';

@Entity('role')
export class Role extends ArcaniBaseEntity {

  @PrimaryGeneratedColumn({
    type: 'smallint',
    unsigned: true
  })
  @Exclude() // ID interno de base de datos oculto
  id_role!: number;

  @Column({
    type: 'tinyint',
    unsigned: true,
    name: 'id_level'
  })
  @Exclude() // Ocultamos la FK cruda, expondremos el objeto de la relación
  id_level!: number;

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

  // --- RELACIONES ---

  @ManyToOne(() => RoleLevel, (level) => level.roles)
  @JoinColumn({ name: 'id_level' })
  @Expose() // Exponemos el nivel para saber si el rol es STRATEGIC, TACTICAL, etc.
  level!: RoleLevel;
}
