import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Attachments } from './attachments';
import { StatusHistory } from './statusHistory';
import { ComplexityHistory } from './complexityHistory';
import { TaskTags } from './taskTags';

@Entity('task')
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'varchar', length: 30 })
    name!: string;

    @Column({ type: 'varchar', length: 500 })
    description!: string;

    // this is the one side of the relation
    @OneToMany(() => Attachments, (att) => att.task)
    attachs?: Attachments[];

    @OneToMany(() => StatusHistory, (stts_hist) => stts_hist.task)
    status_history?: StatusHistory[];

    @OneToMany(() => ComplexityHistory, (cpx_history) => cpx_history.task)
    complexity_history?: ComplexityHistory[];

    @OneToMany(() => TaskTags, (task_tags) => task_tags.task)
    task_tags?: TaskTags[];
}