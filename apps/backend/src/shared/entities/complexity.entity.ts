import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from 'typeorm';
import { ComplexityHistory } from './complexity-history.entity';

@Entity('Complexity')
export class Complexity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'varchar', length: 12 })
    name!: string;

    @OneToMany(() => ComplexityHistory, (cpxHist) => cpxHist.cpx)
    complexityHistory?: ComplexityHistory[];
}