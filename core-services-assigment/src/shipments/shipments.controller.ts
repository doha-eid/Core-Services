import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ShipmentsService } from './shipments.service';

@Controller('shipments')
export class ShipmentsController {
  constructor(private readonly shipmentsService: ShipmentsService) {}

  @Get()
  findAll() {
    return this.shipmentsService.findAll();
  }

  @Post()
  create(@Body() createShipmentData: any) { 
    return this.shipmentsService.create(createShipmentData);
  }

  @Patch(':id/checkout')
  checkout(@Param('id') id: string) {
    return this.shipmentsService.updateStatus(id, 'Out for Delivery');
  }

  @Patch(':id/deliver')
  deliver(@Param('id') id: string) {
    return this.shipmentsService.updateStatus(id, 'Delivered');
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shipmentsService.delete(id);
  }
}
