import 'dotenv/config';


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,{
    transport: Transport.RMQ,
     options: {
          urls: ['amqp://guest:guest@localhost:5672'],
          queue:"riders_queue",
          queueOptions:{
            durable:false
          }
     }
  });

  await app.listen();
  console.log(`"Riders service is listening...`);

}
await bootstrap();
