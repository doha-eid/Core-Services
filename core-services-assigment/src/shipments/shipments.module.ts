import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ShipmentsController } from "./shipments.controller";
import { ShipmentsService } from "./shipments.service";
import { shipments } from "./shipment.entity";
import { Status } from "../statuses/status.entity";

@Module({
  imports: [TypeOrmModule.forFeature([shipments, Status])],
  controllers: [ShipmentsController],
  providers: [ShipmentsService],
})
export class ShipmentsModule {}
