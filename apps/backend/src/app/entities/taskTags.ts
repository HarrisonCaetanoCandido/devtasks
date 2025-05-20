import { Entity, ManyToMany, ManyToOne } from 'typeorm';
import { Task } from './task';
import { Tags } from './tags';

@Entity('task_tags')
export class TaskTags {
    @ManyToOne(() => Task, (task) => task.task_tags)
    task!: Task;

    @ManyToMany(() => Tags, (tag) => tag.tasktags)
    tag?: Tags[];
}