import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedDatos1776404551097 implements MigrationInterface {
    name = 'SeedDatos1776404551097'

    public async up(queryRunner: QueryRunner): Promise<void> {
       // 1. POBLADO DE NIVELES (Nivel Jerárquico)
        await queryRunner.query(`
            INSERT INTO role_level (name, description) VALUES
            ('STRATEGIC', 'Dirección, control maestro y visión global del ecosistema.'),
            ('TACTICAL', 'Gestión, soporte técnico, crecimiento y autoridad de veto.'),
            ('OPERATIVE', 'Ejecución física/digital, atención directa y flujo de caja.'),
            ('CUSTOMER', 'Usuarios externos que interactúan con el catálogo y realizan compras.');
        `);

        // 2. POBLADO DE ROLES ESPECÍFICOS (Estratégico, Táctico, Operativo y Cliente)
        // Ajustado: La columna origen en role_level ahora es 'id'
        await queryRunner.query(`
            INSERT INTO role (name, description, id_level) VALUES
            ('Director de Ecosistema (CEO)', 'Visión global, alianzas con licencias oficiales y expansión de nuevos nichos.', (SELECT id FROM role_level WHERE name = 'STRATEGIC')),
            ('Director de Identidad', 'Guardián de la estética, tono de voz y Sintonía de Frecuencia.', (SELECT id FROM role_level WHERE name = 'STRATEGIC')),
            ('Gerente de Administración y Finanzas', 'Cerebro financiero: consolidación, control de gastos y cumplimiento legal.', (SELECT id FROM role_level WHERE name = 'STRATEGIC')),
            ('Supervisor General (Omnicanal)', 'Máxima autoridad operativa. Audita estándares en tiendas físicas y web.', (SELECT id FROM role_level WHERE name = 'STRATEGIC')),

            ('Estratega de Marketing y Growth', 'Gestión de Ads, planes de marketing y análisis de ROI por nicho.', (SELECT id FROM role_level WHERE name = 'TACTICAL')),
            ('Líder de Operaciones y Logística', 'Responsable de la cadena de suministro, inventario y control 10/10.', (SELECT id FROM role_level WHERE name = 'TACTICAL')),
            ('Selector Experto', 'Autoridad de veto en calidad/autenticidad y soporte técnico de ventas.', (SELECT id FROM role_level WHERE name = 'TACTICAL')),
            ('Arquitecto de Sistemas', 'Gestión de reactividad web, soporte técnico y estabilidad digital.', (SELECT id FROM role_level WHERE name = 'TACTICAL')),
            ('Líder de ARCANI Studio', 'Coordinador del flujo de co-creación y entrega final.', (SELECT id FROM role_level WHERE name = 'TACTICAL')),
            ('Editor de Multiverso', 'Diseño de contenido digital reactivo para web y redes sociales.', (SELECT id FROM role_level WHERE name = 'TACTICAL')),
            ('Supervisor de Tienda', 'Gestión de personal y experiencia del fan en el punto físico.', (SELECT id FROM role_level WHERE name = 'TACTICAL')),

            ('Guía de Fandom', 'Atención al cliente, asesoría y ventas con dialecto de marca.', (SELECT id FROM role_level WHERE name = 'OPERATIVE')),
            ('Analista de Logística', 'Almacén, control de stock y ejecución del Empaque Reactivo.', (SELECT id FROM role_level WHERE name = 'OPERATIVE')),
            ('Custodio de Tesorería', 'Responsable de facturación, cobros y cierre de caja diario.', (SELECT id FROM role_level WHERE name = 'OPERATIVE')),
            ('Técnico de Edición', 'Personal de taller encargado de materializar diseños personalizados.', (SELECT id FROM role_level WHERE name = 'OPERATIVE')),

            ('Cliente', 'Usuario externo que consume productos y servicios del ecosistema.', (SELECT id FROM role_level WHERE name = 'CUSTOMER'));
        `);

    }

     public async down(queryRunner: QueryRunner): Promise<void> {
        // Limpieza inversa para mantener la integridad
      await queryRunner.query(`DELETE FROM role_level WHERE name IN ('STRATEGIC', 'TACTICAL', 'OPERATIVE', 'CUSTOMER')`);

      // Limpieza en orden inverso de jerarquía para evitar errores de FK
        await queryRunner.query(`DELETE FROM role`);
        await queryRunner.query(`DELETE FROM role_level`);

        await queryRunner.query(`DELETE FROM niche_identity`);
        await queryRunner.query(`DELETE FROM niche_theme`);
        await queryRunner.query(`DELETE FROM niche`);


    }


}
