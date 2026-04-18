import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';


export abstract class ArcaniBaseEntity {


  @Column({ default: true })
  @Expose()
  isActive!: boolean;

  @CreateDateColumn({ name: 'created_at' })
  @Expose()
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @Exclude() // Normalmente el cliente no necesita saber cuándo se actualizó internamente
  updatedAt!: Date;

}
