import { z } from 'zod';
import { AppDataSource } from '../../../server/config/datasource';
import { Status } from '../../../shared/entities/status.entity';

export const CreateStatusTypeInputSchema = z.object({
    status: z.string().min(1).max(50),
});

export type CreateStatusTypeInput = z.infer<typeof CreateStatusTypeInputSchema>;

export const UpdateStatusTypeInputSchema = z.object({
    id: z.string().uuid(),
    status: z.string().min(1).max(50),
});

export type UpdateStatusTypeInput = z.infer<typeof UpdateStatusTypeInputSchema>;

export class StatusTypeService {
    private statusRepo = AppDataSource.getRepository(Status);

    async create(input: CreateStatusTypeInput): Promise<Status> {
        const status = await this.statusRepo.findOneBy(input);

        if (status)
            throw new Error(`A type of status with the name of "${input} already exists"`);

        const statusType = this.statusRepo.create(input);

        return this.statusRepo.save(statusType);
    }

    async getAll(): Promise<Status[]> {
        return this.statusRepo.find();
    }

    async getById(id: string): Promise<Status | null> {
        return this.statusRepo.findOneBy({ id });
    }

    async update(input: UpdateStatusTypeInput): Promise<Status> {
        const statusObject = await this.getById(input.id);

        if (!statusObject)
            throw new Error(`The status ${statusObject} does not exist`);

        if (input.status && input.status === statusObject.status)
            throw new Error(`This name of status "${statusObject.status}" already exists on database`);

        this.statusRepo.merge(statusObject, input);

        return this.statusRepo.save(statusObject);
    }

    async delete(id: string): Promise<void> {
        const result = await this.statusRepo.delete(id);

        if (result.affected === 0)
            throw new Error(`The status of ID ${id} does not exist`);
        console.log(`Item of ID ${id} was deleted`);
    }
}