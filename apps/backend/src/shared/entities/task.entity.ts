import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { Attachments } from './attachments.entity';
import { StatusHistory } from './status-history.entity';
import { ComplexityHistory } from './complexity-history.entity';
import { TaskTags } from './task-tags.entity';

@Entity('task')
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'varchar', length: 30 })
    title!: string;

    @Column({ type: 'varchar', length: 500 })
    description!: string;

    @CreateDateColumn({ name: 'due_date' })
    due_date!: Date;

    // this is the one side of the relation
    @OneToMany(() => Attachments, (att) => att.task)
    attachs?: Attachments[];

    @OneToMany(() => StatusHistory, (sttsHist) => sttsHist.task)
    statusHistory?: StatusHistory[];

    @OneToMany(() => ComplexityHistory, (cpxHistory) => cpxHistory.task)
    complexityHistory?: ComplexityHistory[];

    @OneToMany(() => TaskTags, (taskTags) => taskTags.task)
    taskTags?: TaskTags[];
}