import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { StatusHistory } from './status-history.entity';

@Entity('status')
export class Status {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'varchar', length: 50, unique: true })
    status!: string;

    @OneToMany(() => StatusHistory, (sttsHist) => (sttsHist.status))
    statusHistory?: StatusHistory[];
}