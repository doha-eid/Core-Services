import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Status } from './status.entity';
import { StatusSeeder } from './status.seeder';
import { StatusesController } from './statuses.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Status])],
  controllers: [StatusesController],
  providers: [StatusSeeder],
  exports: [TypeOrmModule],
})
export class StatusesModule {}
