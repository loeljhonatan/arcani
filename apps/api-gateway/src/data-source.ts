import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST, // Ya vendrá cargado por Node
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    namingStrategy: new SnakeNamingStrategy(),
    entities: ["libs/data-access/db-entities/src/lib/**/*.entity.ts"],
    migrations: ["libs/data-access/db-entities/src/lib/migrations/*.ts"],
    synchronize: false,
    logging: true,
});
