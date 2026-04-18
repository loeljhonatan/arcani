var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, OneToMany } from "typeorm";
import { ArcaniBaseEntity } from "../base.entity";
import { Exclude, Expose } from "class-transformer";
import { RoleEntity } from "./role.entity";
let RoleLevelEntity = class RoleLevelEntity extends ArcaniBaseEntity {
    name;
    description;
    // Relación: Un nivel tiene muchos roles (ej: STRATEGIC tiene CEO, Admin, etc.)
    roles;
};
__decorate([
    Column({ type: 'varchar', length: 20, unique: true }),
    Expose(),
    __metadata("design:type", String)
], RoleLevelEntity.prototype, "name", void 0);
__decorate([
    Column({ type: 'varchar', length: 255, nullable: true }),
    Expose(),
    __metadata("design:type", String)
], RoleLevelEntity.prototype, "description", void 0);
__decorate([
    OneToMany(() => RoleEntity, (role) => role.level),
    Exclude() // No enviamos el array de roles al pedir el nivel, evita over-fetching
    ,
    __metadata("design:type", Array)
], RoleLevelEntity.prototype, "roles", void 0);
RoleLevelEntity = __decorate([
    Entity('role_level')
], RoleLevelEntity);
export { RoleLevelEntity };
