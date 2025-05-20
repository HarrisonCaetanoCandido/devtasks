import { PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { ComplexityHistory } from './complexityHistory';

export class Complexity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'varchar', length: 12 })
    name!: string;

    @ManyToMany(() => ComplexityHistory, (cpx_hist) => cpx_hist.cpx)
    complexity_history?: ComplexityHistory[];
}