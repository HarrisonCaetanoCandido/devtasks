import { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import { AppDataSource } from '../config/datasource';

// it allows to auth users to use some resources and connect to databases
export const createContext = ({ req, res }: CreateExpressContextOptions) => ({
    db: AppDataSource, // context
});

export type Context = Awaited<ReturnType<typeof createContext>>;