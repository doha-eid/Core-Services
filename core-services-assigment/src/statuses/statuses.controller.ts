import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Status } from './status.entity';

@Controller('statuses')
export class StatusesController {
  constructor(
    @InjectRepository(Status)
    private readonly statusRepo: Repository<Status>,
  ) {}

  @Get()
  async findAll(): Promise<Status[]> {
    return this.statusRepo.find();
  }
}
