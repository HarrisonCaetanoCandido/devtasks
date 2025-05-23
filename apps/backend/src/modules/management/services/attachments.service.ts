import z from "zod";
import { AppDataSource } from "../../../server/config/datasource";
import { Attachments } from "../../../shared/entities/attachments.entity";

export const AttachmentsTypeInputSchema = z.object({
    address: z.string().min(1).max(1024),
});

export type AttachmentsTypeInput = z.infer<typeof AttachmentsTypeInputSchema>;

export class AttachmentService {
    private attRepo = AppDataSource.getRepository(Attachments);

    async create(input: AttachmentsTypeInput): Promise<Attachments> {
        const att = await this.attRepo.findOneBy(input);

        if (att)
            throw new Error("This file was already attached");

        const attType = this.attRepo.create(input);

        return this.attRepo.save(attType);
    }

    async getById(id: string): Promise<Attachments | null> {
        return this.attRepo.findOneBy({ id });
    }

    async getAll(): Promise<Attachments[]> {
        return this.attRepo.find();
    }

    async delete(id: string): Promise<void> {
        const result = await this.attRepo.delete(id);

        if (result.affected === 0)
            throw new Error(`The File with ID ${id} does not exist`);
    }
};