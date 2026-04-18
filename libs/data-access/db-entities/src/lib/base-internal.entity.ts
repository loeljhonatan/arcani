import { PrimaryGeneratedColumn } from "typeorm";
import { ArcaniBaseEntity } from "./base.entity.js";
import { Exclude } from "class-transformer";

export abstract class ArcaniInternalIdEntity extends ArcaniBaseEntity {
  @PrimaryGeneratedColumn({ type: 'tinyint', unsigned: true })
  @Exclude()
  id!: number; // JS maneja TINYINT (0-255) perfectamente como number

}
