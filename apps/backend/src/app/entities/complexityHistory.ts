import { CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from './task';
import { Complexity } from './complexity';

@Entity('complexity_history')
export class ComplexityHistory {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn({ name: 'created_at' })
    created_at!: Date;

    @ManyToOne(() => Task, (task) => task.complexity_history, {
        nullable: true,
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'task_id' })
    task!: Task;

    @ManyToMany(() => Complexity, (cpx) => cpx.complexity_history, {
        eager: true,
        onDelete: 'CASCADE'
    })
    @JoinTable()
    cpx?: Complexity[];
}