import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import { EventPattern, Payload } from '@nestjs/microservices';
import { OrderDto } from './dto/order.dto.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern("order_ready")
  async handleOrderReady(@Payload() data:OrderDto) {

    console.log(`Order recieved for dispathcing ${data.id}`)
    return this.appService.dispatchRider(data);
  }
}
