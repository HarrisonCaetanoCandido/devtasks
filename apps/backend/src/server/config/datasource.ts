import 'reflect-metadata'; // import typeorm decorators
import { DataSource } from 'typeorm';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });
const baseDir = path.join(__dirname, '..');

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: (() => {
        if (!process.env.DATABASE_PATH)
            throw new Error("Undefined environment variable")
        return process.env.DATABASE_PATH;
    })(),
    synchronize: true,
    logging: process.env.NODE_ENV === 'development' ? ['query', 'error'] : ['error'],
    entities: [
        path.join(baseDir, 'entities', '**', '*.entity.{ts,js}'),
    ],
    migrations: [
        path.join(baseDir, 'entities', '**', '*.{ts,js}'),
    ],
    busyTimeout: 5000,
});

// it has singleton behaviour
export async function initializeDataSource() {
    if (!AppDataSource.isInitialized) {
        try {
            await AppDataSource.initialize().then(() => {
                console.log("DataSource successfully initialized")
            });
        } catch (err) {
            console.error("Could not initialize DataSource: ", err);
            throw err;
        }
    }
    return AppDataSource;
}

