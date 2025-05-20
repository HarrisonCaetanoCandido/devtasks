import { PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { TaskTags } from './taskTags';

export class Tags {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'varchar', length: 12, unique: true })
    name!: string;

    @ManyToMany(() => TaskTags, (task_tags) => task_tags.tag)
    tasktags?: TaskTags[];
}