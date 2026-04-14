import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { UUIDBinaryTransformer } from './transformers/uuid-binary.transformer';

export abstract class ArcaniBaseEntity {

  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  @Exclude() // Seguridad: Nunca sale al API Gateway
  id!: string;// Usamos string para evitar problemas de precisión de BigInt en JS

  @Column({
    type: 'binary',
    length: 16,
    unique: true,
    transformer: new UUIDBinaryTransformer(), // 👈 Conversión automática aquí
  })
  //@Generated('uuid')
  @Expose()
  uuid!: string;

  @Column({ default: true })
  @Expose()
  isActive!: boolean;

  @CreateDateColumn({ name: 'created_at' })
 // @Expose({ name: 'createdAt' })
  @Expose()
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @Exclude() // Normalmente el cliente no necesita saber cuándo se actualizó internamente
  updatedAt!: Date;

}
