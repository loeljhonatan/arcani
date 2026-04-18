import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { Expose, Exclude } from 'class-transformer';
import { ArcaniExternalIdEntity } from '../base-external.entity.js';

@Entity('user')
@Index('idx_user_firebase', ['firebaseUid'])
@Index('idx_user_role', ['idRole'])
export class UserEntity extends ArcaniExternalIdEntity {

  @Column({ name: 'firebase_uid', length: 128, unique: true })
  @Exclude() // 🛡️ El UID de Firebase es sensible, no se expone por defecto
  firebaseUid!: string;

  @Column({ length: 150, unique: true })
  @Expose()
  email!: string;

  @Column({ name: 'name', type: 'varchar', length: 50, nullable: true })
  @Expose()
  name?: string;

  @Column({ name: 'photo_url', type: 'text', nullable: true })
  @Expose() // Importante para que el Serializador lo envíe al Frontend
  photoURL?: string;

  // --- RELACIÓN CON ROLES ---
  @Column({ name: 'id_role', type: 'tinyint', unsigned: true })
  @Exclude()
  idRole!: number;

  @ManyToOne('RoleEntity', { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'id_role' })
  @Expose() // Exponemos el objeto Role completo para que Angular sepa qué mostrar
  role!: any;

  // --- RELACIÓN CON NICHO FAVORITO (Sintonía por Defecto) ---
  @Column({ name: 'favourite_niche_id', type: 'bigint', unsigned: true, nullable: true })
  @Exclude()
  favouriteNicheId?: string;

  @ManyToOne('NicheEntity', { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'favourite_niche_id' })
  @Expose() // Exponemos el Nicho favorito para cargar el "Home" con su sintonía
  favouriteNiche?: any;
}
