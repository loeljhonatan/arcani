import { Column, Entity } from "typeorm";
import {  Expose } from "class-transformer";
import { ArcaniInternalIdEntity } from "../base-internal.entity.js";


@Entity('role_level')
export class RoleLevelEntity  extends ArcaniInternalIdEntity  {

  @Column({ type: 'varchar', length: 20, unique: true })
  @Expose()
  name!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @Expose()
  description!: string;

}
