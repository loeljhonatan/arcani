import { PrimaryGeneratedColumn, Column } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { UUIDBinaryTransformer } from './transformers/uuid-binary.transformer';
import { ArcaniBaseEntity } from './base.entity';

export abstract class ArcaniExternalIdEntity extends ArcaniBaseEntity {

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

}
