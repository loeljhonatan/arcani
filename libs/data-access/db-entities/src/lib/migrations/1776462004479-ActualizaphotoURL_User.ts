import { MigrationInterface, QueryRunner } from "typeorm";

export class ActualizaphotoURLUser1776462004479 implements MigrationInterface {
    name = 'ActualizaphotoURLUser1776462004479'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`photo_url\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`photo_url\``);
    }

}
