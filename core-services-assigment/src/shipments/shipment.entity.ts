import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Status } from '../statuses/status.entity';

@Entity('shipments')
export class shipments {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  trackingId: string;

  @Column()
  phoneNumber: string;

  @Column()
  description: string;

  @ManyToOne(() => Status, status => status.shipment)
  status: Status;
}
