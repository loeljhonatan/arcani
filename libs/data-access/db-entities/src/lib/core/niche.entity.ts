import { Entity, Column, OneToOne, Index, OneToMany, type Relation } from 'typeorm';
import { ArcaniExternalIdEntity } from '../base-external.entity.js';
import { Exclude, Expose } from 'class-transformer';


@Entity('niche') // Nombre de la tabla en singular
@Index('idx_niche_lookup', ['slug', 'isActive']) // Reflejamos tu índice de SQL
export class NicheEntity extends ArcaniExternalIdEntity  {

 @Column({ unique: true, length: 50 })
  @Expose()
  slug!: string;

  @Column({ length: 50 })
  @Expose()
  name!: string;

  @Column({ type: 'text', nullable: true })
  @Expose()
  description?: string;

  @Column({ name: 'sort_order', type: 'int', default: 0 })
  @Expose()
  sortOrder!: number;

  // --- RELACIONES ESTRATÉGICAS ---

  @OneToOne('NicheThemeEntity', 'niche', { cascade: true, eager: true }) // 👈 'niche' porque así se llama en el hijo
  @Expose()
  theme!: Relation<any>; // Diferimos el tipo para evitar el bucle

  @OneToOne('NicheStockEntity', 'niche', { cascade: true, eager: true })
  @Expose()
  stock!: Relation<any>; // Diferimos el tipo para evitar el bucle

  @OneToOne('NicheIdentityEntity', 'niche', { cascade: true, eager: true })
  @Expose()
  identity?: Relation<any>; // Diferimos el tipo para evitar el bucle

  // Relación Bidireccional (Para lógica de negocio en Service)
  @OneToMany('NicheEventEntity', 'niche')
  @Exclude() // Solo disponible mediante Joins explícitos en el Service
  events!: any[];

}
