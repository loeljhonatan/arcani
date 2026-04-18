var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { ArcaniInternalIdEntity } from '../base-internal.entity';
import { RoleLevelEntity } from './role-level.entity';
let RoleEntity = class RoleEntity extends ArcaniInternalIdEntity {
    name;
    description;
    id_level;
    // --- RELACIONES ---
    level;
};
__decorate([
    Column({
        type: 'varchar',
        length: 50,
        unique: true
    }),
    Expose(),
    __metadata("design:type", String)
], RoleEntity.prototype, "name", void 0);
__decorate([
    Column({
        type: 'varchar',
        length: 255,
        nullable: true
    }),
    Expose(),
    __metadata("design:type", String)
], RoleEntity.prototype, "description", void 0);
__decorate([
    Column({
        type: 'tinyint',
        unsigned: true,
        name: 'id_level'
    }),
    Exclude() // 🛡️ El frontend nunca verá el FK.
    ,
    __metadata("design:type", Number)
], RoleEntity.prototype, "id_level", void 0);
__decorate([
    ManyToOne(() => RoleLevelEntity, (level) => level.roles),
    JoinColumn({ name: 'id_level' }),
    Expose() // Exponemos el nivel para saber si el rol es STRATEGIC, TACTICAL, etc.
    ,
    __metadata("design:type", RoleLevelEntity)
], RoleEntity.prototype, "level", void 0);
RoleEntity = __decorate([
    Entity('role')
], RoleEntity);
export { RoleEntity };
