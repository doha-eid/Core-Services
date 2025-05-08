import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Status } from './status.entity';

@Injectable()
export class StatusSeeder implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(Status)
    private readonly statusRepo: Repository<Status>,
  ) {}

  async onApplicationBootstrap() {
    const count = await this.statusRepo.count();
    if (count === 0) {
      const statuses = ['Ready to Pick Up', 'Out for Delivery', 'Delivered'];
      await this.statusRepo.save(statuses.map(name => this.statusRepo.create({ name })));

    }
  }
}
