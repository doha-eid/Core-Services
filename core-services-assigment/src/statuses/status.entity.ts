import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { shipments } from '../shipments/shipment.entity';

@Entity('statuses')
export class Status {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => shipments, shipment => shipment.status)
  shipment: shipments[];
}
