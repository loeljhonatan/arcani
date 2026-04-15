import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ArcaniBaseEntity } from "../base.entity";
import { Exclude, Expose } from "class-transformer";

@Entity('role_level')
export class RoleLevel extends ArcaniBaseEntity {


  @PrimaryGeneratedColumn({
    name: 'id_level', // Mapeo físico a MySQL
    type: 'tinyint',
    unsigned: true
  })
  @Exclude() // Blindaje: El ID no sale al cliente
  id!: number; // Aquí puedes usar number por ser TINYINT, o string por consistencia


  @Column({ type: 'varchar', length: 20, unique: true })
  @Expose()
  name!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @Expose()
  description!: string;

}
