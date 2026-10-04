import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service.js';
import { CreateOrderDto } from './dto/create.order.dto.js';



@Controller("orders")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createOrder(@Body() dto:CreateOrderDto){
    return this.appService.createOrder(dto);
  }
}
