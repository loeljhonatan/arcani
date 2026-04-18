import 'reflect-metadata'; // Debe ser SIEMPRE la primera línea
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as dotenv from 'dotenv';
import { RoleLevelEntity } from './libs/data-access/db-entities/src/lib/core/role-level.entity';
import { RoleEntity } from './libs/data-access/db-entities/src/lib/core/role.entity';
dotenv.config();
const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || '127.0.0.1',
    port: 3307,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'arcani_db',
    namingStrategy: new SnakeNamingStrategy(),
    // IMPORTANTE: Cargamos las entidades
    entities: [RoleLevelEntity, RoleEntity],
    migrations: ['./libs/data-access/db-entities/src/lib/migrations/*.ts'],
    synchronize: false,
    logging: true,
});
console.log('--- 🛡️  Iniciando ARCANI: Materialización de Tablas ---');
AppDataSource.initialize()
    .then(async () => {
    console.log('--- 📡 Conexión Exitosa ---');
    const migrations = await AppDataSource.runMigrations();
    if (migrations.length === 0) {
        console.log('--- 🟦 El ecosistema ya está actualizado ---');
    }
    else {
        migrations.forEach(m => console.log(`--- ✅ Dimensionada: ${m.name}`));
    }
    await AppDataSource.destroy();
    console.log('--- 🔐 Proceso Finalizado ---');
})
    .catch(err => {
    console.error('--- ❌ Error Detallado:', err); // Cambiamos err.message por err completo
    process.exit(1);
});
