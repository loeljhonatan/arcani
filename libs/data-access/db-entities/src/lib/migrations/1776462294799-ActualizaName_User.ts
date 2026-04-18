import { MigrationInterface, QueryRunner } from "typeorm";

export class ActualizaNameUser1776462294799 implements MigrationInterface {
    name = 'ActualizaNameUser1776462294799'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`name\` varchar(50) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`name\``);
    }

}
