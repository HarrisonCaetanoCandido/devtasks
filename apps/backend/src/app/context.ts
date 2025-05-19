import { CreateExpressContextOptions } from '@trpc/server/adapters/express';


async function getTask(taskId: number) {
    // logica pra buscar no banco
    return { taskId:123, taskName:'name', taskDesc: 'description' };
}

// it allows to auth users to use some resources and connect to databases
export const createContext = ({ req, res }: CreateExpressContextOptions) => {
    return { req, res };
};

export type Context = ReturnType<typeof createContext>;