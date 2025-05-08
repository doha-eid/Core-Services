import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { shipments } from './shipments/shipment.entity';
import { Status } from './statuses/status.entity';
import { ShipmentsModule } from './shipments/shipments.module';
import { StatusesModule } from './statuses/statuses.module'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'logistics.db',
      entities: [shipments, Status],
      synchronize: true,
    }),
    ShipmentsModule,
    StatusesModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
