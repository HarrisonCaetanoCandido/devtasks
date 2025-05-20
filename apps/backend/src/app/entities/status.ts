import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { StatusHistory } from './statusHistory';

@Entity('status')
export class Status {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'varchar', unique: true })
    status!: string;

    @ManyToMany(() => StatusHistory, (stts_hist) => (stts_hist.status))
    status_history?: StatusHistory[];
}