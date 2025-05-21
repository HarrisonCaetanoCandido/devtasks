import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from './task.entity';
import { Complexity } from './complexity.entity';

@Entity('complexity_history')
export class ComplexityHistory {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @ManyToOne(() => Task, (task) => task.complexityHistory, {
        nullable: true,
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'task_id' })
    task!: Task;

    @ManyToOne(() => Complexity, (cpx) => cpx.complexityHistory, {
        nullable: false,
        onDelete: 'RESTRICT'
    })
    @JoinColumn()
    cpx?: Complexity;
}