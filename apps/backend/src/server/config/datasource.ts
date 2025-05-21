import 'reflect-metadata'; // import typeorm decorators
import { DataSource } from 'typeorm';
import path from 'path';
import dotenv from 'dotenv';
import { Task } from '../../shared/entities/task.entity';
import { TaskTags } from '../../shared/entities/task-tags.entity';
import { Tags } from '../../shared/entities/tags.entity';
import { Attachments } from '../../shared/entities/attachments.entity';
import { ComplexityHistory } from '../../shared/entities/complexity-history.entity';
import { Complexity } from '../../shared/entities/complexity.entity';
import { StatusHistory } from '../../shared/entities/status-history.entity';
import { Status } from '../../shared/entities/status.entity';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: process.env.DATABASE_PATH || path.join(__dirname, '..', 'data', 'devtasks.sqlite'),
    synchronize: true,
    logging: process.env.NODE_ENV === 'development' ? ['query', 'error'] : ['error'],
    entities: [
        Task,
        TaskTags,
        Tags,
        Attachments,
        ComplexityHistory,
        Complexity,
        StatusHistory,
        Status
    ],
    busyTimeout: 5000,
});