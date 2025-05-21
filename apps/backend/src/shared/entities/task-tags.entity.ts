import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Task } from './task.entity';
import { Tags } from './tags.entity';

@Entity('task_tags')
export class TaskTags {
    @PrimaryColumn({ type: 'uuid', name: 'task_id' })
    taskId!: string;

    @PrimaryColumn({ type: 'uuid', name: 'tag_id' })
    tagId!: string;

    @ManyToOne(() => Task, (task) => task.taskTags, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'task_id' })
    task!: Task;

    @ManyToOne(() => Tags, (tag) => tag.taskTags, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'tag_id' })
    tag!: Tags;
}