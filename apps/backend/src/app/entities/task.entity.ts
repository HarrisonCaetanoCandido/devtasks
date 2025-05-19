import 'reflect-metadata';
import  { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('task')
export class Task {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length:30 })
    name!: string;

    @Column({ type: 'varchar', length: 500 })
    description!: string
}