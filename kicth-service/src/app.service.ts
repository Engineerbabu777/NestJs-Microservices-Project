import { Inject, Injectable } from '@nestjs/common';
import { OrderDto } from './dto/order.dto.js';
import { ClientProxy } from '@nestjs/microservices';
import { db } from './db/db.js';
import { tickets } from './db/schema.js';

@Injectable()
export class AppService {
  
  
  constructor(
    @Inject("RIDER_SERVICE") private readonly riderClient: ClientProxy
  ){}

  async processOrder(data: OrderDto) {

    const [ticket] = await db.insert(tickets).values(
      {
      orderId: data.id,
      customerName: data.customerName,
      item: data.item,
      status: "received",
      quantity:data.quantity
    }
  ).returning();

   await new Promise((res) => setTimeout(res, 2000));

   this.riderClient.emit("order_ready",{
    ...data
   })

   console.log(`Event emitted to rider_queeue ${data.id}`);

    return ticket;
  }
}
