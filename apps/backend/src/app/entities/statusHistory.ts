import { PrimaryGeneratedColumn, Entity, CreateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Task } from './task';
import { Status } from './status';

@Entity('status_history')
export class StatusHistory {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn({ name: 'created_at' })
    created_at!: Date;

    @ManyToOne(() => Task, (task) => task.status_history, {
        nullable: false,
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'task_id' })
    task!: Task;

    @ManyToMany(() => Status, (status) => status.status_history, {
        eager: true,
        onDelete: 'CASCADE'
    })
    @JoinTable()
    status!: Status[];
}