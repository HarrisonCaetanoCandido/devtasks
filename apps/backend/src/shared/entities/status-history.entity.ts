import { PrimaryGeneratedColumn, Entity, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Task } from './task.entity';
import { Status } from './status.entity';

@Entity('status_history')
export class StatusHistory {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn({ name: 'created_at' })
    created_at!: Date;

    @ManyToOne(() => Task, (task) => task.statusHistory, {
        nullable: false,
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'task_id' })
    task!: Task;

    @ManyToOne(() => Status, (status) => status.statusHistory, {
        nullable: false,
        onDelete: 'RESTRICT'
    })
    @JoinColumn()
    status!: Status;
}