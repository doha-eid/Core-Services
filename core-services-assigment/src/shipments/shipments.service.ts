import {
  Injectable,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { shipments } from './shipment.entity';
import { Status } from '../statuses/status.entity';

@Injectable()
export class ShipmentsService {
  constructor(
    @InjectRepository(shipments)
    private shipmentRepo: Repository<shipments>,
    @InjectRepository(Status)
    private statusRepo: Repository<Status>,
  ) {}

  async findAll(): Promise<shipments[]> {
    try {
      return await this.shipmentRepo.find({ relations: ['status'] });
    } catch {
      throw new InternalServerErrorException('Failed to fetch shipments');
    }
  }

  async create(createShipmentData: any): Promise<shipments> {
    try {
      const status = await this.statusRepo.findOne({
        where: { id: createShipmentData.statusId }, 
      });
  
      if (!status) {
        throw new NotFoundException('Status not found');
      }
  
      const shipment = this.shipmentRepo.create({
        trackingId: createShipmentData.trackingId,
        phoneNumber: createShipmentData.phoneNumber,
        description: createShipmentData.description,
        status: status,

      });
  
  
      return await this.shipmentRepo.save(shipment);
    } catch (error: any) {
      if (
        error.code === 'SQLITE_CONSTRAINT' &&
        error.message.includes('UNIQUE constraint failed: shipments.trackingId')
      ) {
        throw new ConflictException('Tracking ID already exists');
      }
  
      throw new InternalServerErrorException('Failed to create shipment');
    }
  }
  

  async updateStatus(
    id: string,
    newStatus: 'Out for Delivery' | 'Delivered',
  ): Promise<shipments> {
    try {
      const shipment = await this.shipmentRepo.findOne({
        where: { id },
        relations: ['status'],
      });

      if (!shipment) throw new NotFoundException('Shipment not found');

      const status = await this.statusRepo.findOne({
        where: { name: newStatus },
      });

      if (!status) throw new NotFoundException(`Status "${newStatus}" not found`);

      shipment.status = status;
      return await this.shipmentRepo.save(shipment);
    } catch {
      throw new InternalServerErrorException('Failed to update shipment status');
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const shipment = await this.shipmentRepo.findOne({ where: { id } });

      if (!shipment) throw new NotFoundException('Shipment not found');

      await this.shipmentRepo.remove(shipment);
    } catch {
      throw new InternalServerErrorException('Failed to delete shipment');
    }
  }
}
