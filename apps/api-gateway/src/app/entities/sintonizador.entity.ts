// apps/api-gateway/src/app/sintonizador/entities/sintonizador.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('nichos_config')
export class SintonizadorEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id!: string;

  @Column({ name: 'slug', unique: true })
  slug!: string;

  @Column({ name: 'label' })
  label!: string;

  @Column({ name: 'aura' }) // Asegura que no sea auraColor
  aura!: string;

  @Column({ name: 'destello' })
  destello!: string;

  @Column({ name: 'fondo' })
  fondo!: string;

  @Column({ name: 'radius' })
  radius!: number;

  @Column({ name: 'blur' })
  blur!: number;

  @Column({ name: 'trama_preset' })
  trama_preset!: string;
}
