import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Status } from './status.entity';

@Injectable()
export class StatusSeederService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(Status)
    private readonly statusRepo: Repository<Status>,
  ) {}

  async onApplicationBootstrap() {
    const defaultStatuses = ['Ready to Pick Up', 'Out for Delivery', 'Delivered'];

    for (const name of defaultStatuses) {
      const exists = await this.statusRepo.findOne({ where: { name } });
      if (!exists) {
        const status = this.statusRepo.create({ name });
        await this.statusRepo.save(status);
      }
    }
  }
}
