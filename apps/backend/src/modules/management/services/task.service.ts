import { z } from 'zod';
import { AppDataSource } from '../../../server/config/datasource';
import { Task } from '../../../shared/entities/task.entity';

export const TaskTypeInputSchema = z.object({
    title: z.string().min(1).max(50),
    description: z.string().min(1).max(50),
    due_date: z.date()
});

export type TaskTypeInput = z.infer<typeof TaskTypeInputSchema>;

export const UpdateTaskTypeInputSchema = z.object({
    id: z.string().uuid(),
    title: z.string().min(1).max(50),
    description: z.string().min(1).max(50),
    due_date: z.date()
});

export type UpdateTaskTypeInput = z.infer<typeof UpdateTaskTypeInputSchema>;

export class TaskTypeService {
    private taskRepo = AppDataSource.getRepository(Task);

    async create(input: TaskTypeInput): Promise<Task> {
        const task = await this.taskRepo.findOneBy(input);

        if (task)
            throw new Error(`The Task ${input} already exists`);

        const taskType = this.taskRepo.create(input);

        return this.taskRepo.save(taskType);
    }

    async getAll(): Promise<Task[]> {
        return this.taskRepo.find();
    }

    async getById(id: string): Promise<Task | null> {
        return this.taskRepo.findOneBy({ id });
    }

    async update(input: UpdateTaskTypeInput): Promise<Task> {
        const taskObject = await this.getById(input.id);

        if (!taskObject)
            throw new Error(`The task ${taskObject} does not exist`);

        this.taskRepo.merge(taskObject, input);

        return this.taskRepo.save(taskObject);
    }

    async delete(id: string): Promise<void> {
        const result = await this.taskRepo.delete(id);

        if (result.affected === 0)
            throw new Error(`The task with ID ${id} does not exist`);
        console.log(`Item of ID ${id} was deleted`);
    }
}