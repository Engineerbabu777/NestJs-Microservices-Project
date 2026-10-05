import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import { EventPattern, Payload } from '@nestjs/microservices';
import { OrderDto } from './dto/order.dto.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('order_created')
  async handleOrderCreated(@Payload() data: OrderDto ) {

    console.log(`Kitchen recived order ${data.id}`);
    this.appService.processOrder(data);
    return this.appService.processOrder(data);
  }
}
