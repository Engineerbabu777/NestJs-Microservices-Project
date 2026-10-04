import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create.order.dto.js';
import { ClientProxy } from '@nestjs/microservices';
import { db } from './db/db.js';
import { Order, orders } from './db/schema.js';

@Injectable()
export class AppService {

  constructor(@Inject("KITCHEN_SERVICE") private readonly kitchenClient: ClientProxy){}


  async createOrder(dto: CreateOrderDto): Promise<Order> {

    const [order] = await db.insert(orders).values(
     { customerName: dto.customerName,
      item: dto.item,
      quantity: dto.quantity,
      status: "pending"
    }

    ).returning();

    this.kitchenClient.emit('order_created',{
      ...order
    });

    console.log(`Event emitted to kitch queue`);
    
    return order;
  }


}
