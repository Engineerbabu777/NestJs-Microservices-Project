import { Injectable } from '@nestjs/common';
import { OrderDto } from './dto/order.dto.js';
import { db } from './db/db.js';
import { dispataches } from './db/schema.js';


const RIDERS = ['Ali', 'Zohaib']
@Injectable()
export class AppService {
  async dispatchRider(data:OrderDto) {

    const rider = RIDERS[Math.floor(Math.random()*2)]

    const [dispatched] = await db.insert(dispataches).values({
      customerName:data.customerName,
      orderId: data.id,
      item: data.item,
      riderStatus:'dispatched'
    }).returning();

    console.log(`Order has been dispatched ${dispatched.orderId} by ${rider}`)

    return 'Hello World!';
  }
}
