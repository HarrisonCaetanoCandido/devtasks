import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from 'typeorm';
import { TaskTags } from './task-tags.entity';

@Entity('tags')
export class Tags {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'varchar', length: 12, unique: true })
    name!: string;

    @OneToMany(() => TaskTags, (taskTags) => taskTags.tag)
    taskTags?: TaskTags[];
}