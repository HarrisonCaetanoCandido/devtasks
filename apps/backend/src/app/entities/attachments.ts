import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Task } from './task';

@Entity('attachments')
export class Attachments {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'varchar', length: 1024 })
    address!: string;

    // This prop stores the related object and its the many side of the relation
    @ManyToOne(() => Task, (task) => task.attachs, {
        nullable: false,
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'task_id' })
    task!: Task;
}