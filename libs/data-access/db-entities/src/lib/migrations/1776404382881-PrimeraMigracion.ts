import { MigrationInterface, QueryRunner } from "typeorm";

export class PrimeraMigracion1776404382881 implements MigrationInterface {
    name = 'PrimeraMigracion1776404382881'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`is_active\` tinyint NOT NULL DEFAULT 1, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`uuid\` binary(16) NOT NULL, \`firebase_uid\` varchar(128) NOT NULL, \`email\` varchar(150) NOT NULL, \`id_role\` tinyint UNSIGNED NOT NULL, \`favourite_niche_id\` bigint UNSIGNED NULL, INDEX \`idx_user_role\` (\`id_role\`), INDEX \`idx_user_firebase\` (\`firebase_uid\`), UNIQUE INDEX \`IDX_a95e949168be7b7ece1a2382fe\` (\`uuid\`), UNIQUE INDEX \`IDX_40fe3048b17f675b652c199927\` (\`firebase_uid\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`variant_image\` (\`is_active\` tinyint NOT NULL DEFAULT 1, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`uuid\` binary(16) NOT NULL, \`id_variant\` bigint UNSIGNED NOT NULL, \`cloudinary_id\` varchar(255) NOT NULL, \`sort_order\` smallint NOT NULL DEFAULT '0', INDEX \`idx_variant_visuals\` (\`id_variant\`, \`is_active\`, \`sort_order\`), UNIQUE INDEX \`IDX_d63abd7e5d5ecfb313d3b77675\` (\`uuid\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product\` (\`is_active\` tinyint NOT NULL DEFAULT 1, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`uuid\` binary(16) NOT NULL, \`slug\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`description\` text NULL, \`main_id_niche\` bigint UNSIGNED NOT NULL, INDEX \`idx_product_slug\` (\`slug\`), INDEX \`idx_product_niche_active\` (\`main_id_niche\`, \`is_active\`), INDEX \`idx_product_active\` (\`is_active\`), UNIQUE INDEX \`IDX_1442fd7cb5e0b32ff5d0b6c13d\` (\`uuid\`), UNIQUE INDEX \`IDX_8cfaf4a1e80806d58e3dbe6922\` (\`slug\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product_variant\` (\`is_active\` tinyint NOT NULL DEFAULT 1, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`uuid\` binary(16) NOT NULL, \`slug\` varchar(255) NOT NULL, \`id_product\` bigint UNSIGNED NOT NULL, \`sku_code\` varchar(50) NULL, \`variant_name\` varchar(100) NOT NULL, \`price\` decimal(10,2) NOT NULL, \`offer_price\` decimal(10,2) NULL, INDEX \`idx_variant_parent_active\` (\`id_product\`, \`is_active\`), INDEX \`idx_variant_lookup\` (\`slug\`, \`is_active\`), UNIQUE INDEX \`IDX_2ea279a9fdd3a64c6541aebdfc\` (\`uuid\`), UNIQUE INDEX \`IDX_4076f2a463058f7b56375f7d7e\` (\`slug\`), UNIQUE INDEX \`IDX_e5542a0b24cea7463872708b8c\` (\`sku_code\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product_niche\` (\`is_active\` tinyint NOT NULL DEFAULT 1, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id_product\` bigint UNSIGNED NOT NULL, \`id_niche\` bigint UNSIGNED NOT NULL, \`is_primary\` tinyint NOT NULL DEFAULT 0, INDEX \`idx_product_niche_lookup\` (\`id_niche\`, \`is_active\`), PRIMARY KEY (\`id_product\`, \`id_niche\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`stock_lot\` (\`is_active\` tinyint NOT NULL DEFAULT 1, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`id_variant\` bigint UNSIGNED NOT NULL, \`initial_quantity\` int UNSIGNED NOT NULL, \`current_quantity\` int UNSIGNED NOT NULL, \`cost_price\` decimal(10,2) NOT NULL, \`is_approved\` tinyint NOT NULL DEFAULT 0, \`payment_status\` enum ('PENDING', 'RELEASED', 'VETOED') NOT NULL DEFAULT 'PENDING', \`approved_by\` bigint UNSIGNED NULL, \`entry_date\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, INDEX \`idx_finanzas_status\` (\`payment_status\`), INDEX \`idx_peps_active\` (\`id_variant\`, \`is_approved\`, \`current_quantity\`, \`entry_date\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product_image\` (\`is_active\` tinyint NOT NULL DEFAULT 1, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`uuid\` binary(16) NOT NULL, \`id_product\` bigint UNSIGNED NOT NULL, \`cloudinary_id\` varchar(255) NOT NULL, \`sort_order\` smallint NOT NULL DEFAULT '0', INDEX \`idx_gallery_lookup\` (\`id_product\`, \`is_active\`, \`sort_order\`), UNIQUE INDEX \`IDX_1e0490de7d2b6b7ea905d688d8\` (\`uuid\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role_level\` (\`is_active\` tinyint NOT NULL DEFAULT 1, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` tinyint UNSIGNED NOT NULL AUTO_INCREMENT, \`name\` varchar(20) NOT NULL, \`description\` varchar(255) NULL, UNIQUE INDEX \`IDX_85321700d3cfeec3472cb0c2c6\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role\` (\`is_active\` tinyint NOT NULL DEFAULT 1, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` tinyint UNSIGNED NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, \`description\` varchar(255) NULL, \`id_level\` tinyint UNSIGNED NOT NULL, UNIQUE INDEX \`IDX_ae4578dcaed5adff96595e6166\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`niches_prueba\` (\`id\` int NOT NULL AUTO_INCREMENT, \`label\` varchar(50) NOT NULL, \`energy\` varchar(30) NOT NULL, \`aura_color\` varchar(7) NOT NULL, \`destello_color\` varchar(7) NOT NULL, \`cta_text\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`niches_color\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(255) NOT NULL, \`slug\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`color_primary\` varchar(255) NULL, \`color_accent\` varchar(255) NULL, \`color_light\` varchar(255) NULL, \`color_dark\` varchar(255) NULL, \`bazar_threshold\` int NOT NULL DEFAULT '0', \`custom_config\` json NULL, \`inventory_sync_id\` int NULL, UNIQUE INDEX \`IDX_0cda5d71e5bb3e451e3a910677\` (\`uuid\`), UNIQUE INDEX \`IDX_fe2401689527a153a51fb9fe2f\` (\`slug\`), UNIQUE INDEX \`REL_bf574b988c3c7398e310433f1b\` (\`inventory_sync_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`inventory_sync\` (\`id\` int NOT NULL AUTO_INCREMENT, \`current_sku_count\` int NOT NULL DEFAULT '0', \`last_sync_at\` timestamp NULL, \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`niche\` (\`is_active\` tinyint NOT NULL DEFAULT 1, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`uuid\` binary(16) NOT NULL, \`slug\` varchar(50) NOT NULL, \`name\` varchar(50) NOT NULL, \`description\` text NULL, \`sort_order\` int NOT NULL DEFAULT '0', INDEX \`idx_niche_lookup\` (\`slug\`, \`is_active\`), UNIQUE INDEX \`IDX_237ed6c3f8b712fd826e3b6d6a\` (\`uuid\`), UNIQUE INDEX \`IDX_dd9ec792538b8531acc7cb93d8\` (\`slug\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`niche_theme\` (\`is_active\` tinyint NOT NULL DEFAULT 1, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` bigint UNSIGNED NOT NULL, \`use_inheritance\` tinyint NOT NULL DEFAULT 1, \`bazar_threshold\` int NOT NULL DEFAULT '25', \`color_primary\` varchar(25) NOT NULL, \`color_accent\` varchar(25) NOT NULL, \`color_light\` varchar(25) NOT NULL, \`color_dark\` varchar(25) NOT NULL, \`cloudinary_id\` varchar(255) NOT NULL, \`custom_config\` json NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`niche_identity\` (\`is_active\` tinyint NOT NULL DEFAULT 1, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` bigint UNSIGNED NOT NULL, \`main_icon\` varchar(50) NOT NULL, \`secondary_icon\` varchar(50) NULL, \`tone_tag\` enum ('ÉPICA', 'MÍSTICA', 'TREND', 'GLOW', 'TECH', 'CREATIVA') NOT NULL, \`subtitle\` varchar(255) NOT NULL, \`narrative_concept\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`niche_stock\` (\`is_active\` tinyint NOT NULL DEFAULT 1, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` bigint UNSIGNED NOT NULL, \`current_sku_count\` int UNSIGNED NOT NULL DEFAULT '0', \`velocity_score\` decimal(5,2) NOT NULL DEFAULT '0.00', \`last_sync_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`niche_event\` (\`is_active\` tinyint NOT NULL DEFAULT 1, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id_niche\` bigint UNSIGNED NOT NULL, \`id_event\` bigint UNSIGNED NOT NULL, \`is_host\` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (\`id_niche\`, \`id_event\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`event\` (\`is_active\` tinyint NOT NULL DEFAULT 1, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`uuid\` binary(16) NOT NULL, \`slug\` varchar(50) NOT NULL, \`name\` varchar(100) NOT NULL, \`description\` text NULL, \`icon\` varchar(50) NULL, \`cloudinary_id\` varchar(255) NOT NULL, \`date_start\` datetime NOT NULL, \`date_end\` datetime NOT NULL, \`priority\` int NOT NULL DEFAULT '0', \`immersion_level\` tinyint NOT NULL DEFAULT '100', \`color_primary\` varchar(25) NULL, \`color_accent\` varchar(25) NULL, \`wildcard_css\` text NULL, \`wildcard_js\` text NULL, \`event_config\` json NULL, \`discount_percent\` decimal(5,2) NOT NULL DEFAULT '0.00', INDEX \`idx_event_active\` (\`is_active\`), INDEX \`idx_event_dates\` (\`date_start\`, \`date_end\`), UNIQUE INDEX \`IDX_d2ea43d0ee94369479bfbbfff4\` (\`uuid\`), UNIQUE INDEX \`IDX_9d0d870657c4fac264cdca048e\` (\`slug\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_1a3abee4bf37fa00ebd698cedec\` FOREIGN KEY (\`id_role\`) REFERENCES \`role\`(\`id\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_ed41ee0074b0bdd952134d11701\` FOREIGN KEY (\`favourite_niche_id\`) REFERENCES \`niche\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`variant_image\` ADD CONSTRAINT \`FK_c5ae487cfb2baf2468e19a4b3bf\` FOREIGN KEY (\`id_variant\`) REFERENCES \`product_variant\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_8f9bd20d25c1fb205696643d282\` FOREIGN KEY (\`main_id_niche\`) REFERENCES \`niche\`(\`id\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product_variant\` ADD CONSTRAINT \`FK_dadc12ab56a6a8181a5313373a6\` FOREIGN KEY (\`id_product\`) REFERENCES \`product\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product_niche\` ADD CONSTRAINT \`FK_9ad355e40f18779ed45b10194ed\` FOREIGN KEY (\`id_product\`) REFERENCES \`product\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product_niche\` ADD CONSTRAINT \`FK_ebad114699457834d1d9871c1a3\` FOREIGN KEY (\`id_niche\`) REFERENCES \`niche\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`stock_lot\` ADD CONSTRAINT \`FK_1e2de70d2fc380d90a853836651\` FOREIGN KEY (\`id_variant\`) REFERENCES \`product_variant\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`stock_lot\` ADD CONSTRAINT \`FK_ea7bd493ed425bf60a23f99b2c1\` FOREIGN KEY (\`approved_by\`) REFERENCES \`user\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product_image\` ADD CONSTRAINT \`FK_ec16de224d219ee3e79d7b91066\` FOREIGN KEY (\`id_product\`) REFERENCES \`product\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`role\` ADD CONSTRAINT \`FK_7d5afc6c1b53e547b8d0bdb4043\` FOREIGN KEY (\`id_level\`) REFERENCES \`role_level\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`niches_color\` ADD CONSTRAINT \`FK_bf574b988c3c7398e310433f1bb\` FOREIGN KEY (\`inventory_sync_id\`) REFERENCES \`inventory_sync\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`niche_theme\` ADD CONSTRAINT \`FK_361b09776a3bf8d1d75e3716df0\` FOREIGN KEY (\`id\`) REFERENCES \`niche\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`niche_identity\` ADD CONSTRAINT \`FK_91830bd3976f215f84ebab50644\` FOREIGN KEY (\`id\`) REFERENCES \`niche\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`niche_stock\` ADD CONSTRAINT \`FK_1f66a08de4964f31c75faa742d4\` FOREIGN KEY (\`id\`) REFERENCES \`niche\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`niche_event\` ADD CONSTRAINT \`FK_b1cf41e8ce8edb2473c06c9fe7a\` FOREIGN KEY (\`id_niche\`) REFERENCES \`niche\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`niche_event\` ADD CONSTRAINT \`FK_18847fd6714bf82f807d8f97cc7\` FOREIGN KEY (\`id_event\`) REFERENCES \`event\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`niche_event\` DROP FOREIGN KEY \`FK_18847fd6714bf82f807d8f97cc7\``);
        await queryRunner.query(`ALTER TABLE \`niche_event\` DROP FOREIGN KEY \`FK_b1cf41e8ce8edb2473c06c9fe7a\``);
        await queryRunner.query(`ALTER TABLE \`niche_stock\` DROP FOREIGN KEY \`FK_1f66a08de4964f31c75faa742d4\``);
        await queryRunner.query(`ALTER TABLE \`niche_identity\` DROP FOREIGN KEY \`FK_91830bd3976f215f84ebab50644\``);
        await queryRunner.query(`ALTER TABLE \`niche_theme\` DROP FOREIGN KEY \`FK_361b09776a3bf8d1d75e3716df0\``);
        await queryRunner.query(`ALTER TABLE \`niches_color\` DROP FOREIGN KEY \`FK_bf574b988c3c7398e310433f1bb\``);
        await queryRunner.query(`ALTER TABLE \`role\` DROP FOREIGN KEY \`FK_7d5afc6c1b53e547b8d0bdb4043\``);
        await queryRunner.query(`ALTER TABLE \`product_image\` DROP FOREIGN KEY \`FK_ec16de224d219ee3e79d7b91066\``);
        await queryRunner.query(`ALTER TABLE \`stock_lot\` DROP FOREIGN KEY \`FK_ea7bd493ed425bf60a23f99b2c1\``);
        await queryRunner.query(`ALTER TABLE \`stock_lot\` DROP FOREIGN KEY \`FK_1e2de70d2fc380d90a853836651\``);
        await queryRunner.query(`ALTER TABLE \`product_niche\` DROP FOREIGN KEY \`FK_ebad114699457834d1d9871c1a3\``);
        await queryRunner.query(`ALTER TABLE \`product_niche\` DROP FOREIGN KEY \`FK_9ad355e40f18779ed45b10194ed\``);
        await queryRunner.query(`ALTER TABLE \`product_variant\` DROP FOREIGN KEY \`FK_dadc12ab56a6a8181a5313373a6\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_8f9bd20d25c1fb205696643d282\``);
        await queryRunner.query(`ALTER TABLE \`variant_image\` DROP FOREIGN KEY \`FK_c5ae487cfb2baf2468e19a4b3bf\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_ed41ee0074b0bdd952134d11701\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_1a3abee4bf37fa00ebd698cedec\``);
        await queryRunner.query(`DROP INDEX \`IDX_9d0d870657c4fac264cdca048e\` ON \`event\``);
        await queryRunner.query(`DROP INDEX \`IDX_d2ea43d0ee94369479bfbbfff4\` ON \`event\``);
        await queryRunner.query(`DROP INDEX \`idx_event_dates\` ON \`event\``);
        await queryRunner.query(`DROP INDEX \`idx_event_active\` ON \`event\``);
        await queryRunner.query(`DROP TABLE \`event\``);
        await queryRunner.query(`DROP TABLE \`niche_event\``);
        await queryRunner.query(`DROP TABLE \`niche_stock\``);
        await queryRunner.query(`DROP TABLE \`niche_identity\``);
        await queryRunner.query(`DROP TABLE \`niche_theme\``);
        await queryRunner.query(`DROP INDEX \`IDX_dd9ec792538b8531acc7cb93d8\` ON \`niche\``);
        await queryRunner.query(`DROP INDEX \`IDX_237ed6c3f8b712fd826e3b6d6a\` ON \`niche\``);
        await queryRunner.query(`DROP INDEX \`idx_niche_lookup\` ON \`niche\``);
        await queryRunner.query(`DROP TABLE \`niche\``);
        await queryRunner.query(`DROP TABLE \`inventory_sync\``);
        await queryRunner.query(`DROP INDEX \`REL_bf574b988c3c7398e310433f1b\` ON \`niches_color\``);
        await queryRunner.query(`DROP INDEX \`IDX_fe2401689527a153a51fb9fe2f\` ON \`niches_color\``);
        await queryRunner.query(`DROP INDEX \`IDX_0cda5d71e5bb3e451e3a910677\` ON \`niches_color\``);
        await queryRunner.query(`DROP TABLE \`niches_color\``);
        await queryRunner.query(`DROP TABLE \`niches_prueba\``);
        await queryRunner.query(`DROP INDEX \`IDX_ae4578dcaed5adff96595e6166\` ON \`role\``);
        await queryRunner.query(`DROP TABLE \`role\``);
        await queryRunner.query(`DROP INDEX \`IDX_85321700d3cfeec3472cb0c2c6\` ON \`role_level\``);
        await queryRunner.query(`DROP TABLE \`role_level\``);
        await queryRunner.query(`DROP INDEX \`IDX_1e0490de7d2b6b7ea905d688d8\` ON \`product_image\``);
        await queryRunner.query(`DROP INDEX \`idx_gallery_lookup\` ON \`product_image\``);
        await queryRunner.query(`DROP TABLE \`product_image\``);
        await queryRunner.query(`DROP INDEX \`idx_peps_active\` ON \`stock_lot\``);
        await queryRunner.query(`DROP INDEX \`idx_finanzas_status\` ON \`stock_lot\``);
        await queryRunner.query(`DROP TABLE \`stock_lot\``);
        await queryRunner.query(`DROP INDEX \`idx_product_niche_lookup\` ON \`product_niche\``);
        await queryRunner.query(`DROP TABLE \`product_niche\``);
        await queryRunner.query(`DROP INDEX \`IDX_e5542a0b24cea7463872708b8c\` ON \`product_variant\``);
        await queryRunner.query(`DROP INDEX \`IDX_4076f2a463058f7b56375f7d7e\` ON \`product_variant\``);
        await queryRunner.query(`DROP INDEX \`IDX_2ea279a9fdd3a64c6541aebdfc\` ON \`product_variant\``);
        await queryRunner.query(`DROP INDEX \`idx_variant_lookup\` ON \`product_variant\``);
        await queryRunner.query(`DROP INDEX \`idx_variant_parent_active\` ON \`product_variant\``);
        await queryRunner.query(`DROP TABLE \`product_variant\``);
        await queryRunner.query(`DROP INDEX \`IDX_8cfaf4a1e80806d58e3dbe6922\` ON \`product\``);
        await queryRunner.query(`DROP INDEX \`IDX_1442fd7cb5e0b32ff5d0b6c13d\` ON \`product\``);
        await queryRunner.query(`DROP INDEX \`idx_product_active\` ON \`product\``);
        await queryRunner.query(`DROP INDEX \`idx_product_niche_active\` ON \`product\``);
        await queryRunner.query(`DROP INDEX \`idx_product_slug\` ON \`product\``);
        await queryRunner.query(`DROP TABLE \`product\``);
        await queryRunner.query(`DROP INDEX \`IDX_d63abd7e5d5ecfb313d3b77675\` ON \`variant_image\``);
        await queryRunner.query(`DROP INDEX \`idx_variant_visuals\` ON \`variant_image\``);
        await queryRunner.query(`DROP TABLE \`variant_image\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_40fe3048b17f675b652c199927\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_a95e949168be7b7ece1a2382fe\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`idx_user_firebase\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`idx_user_role\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
