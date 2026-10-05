import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name:"RIDER_SERVICE",
        transport:Transport.RMQ,
          options: {
          urls: ['amqp://guest:guest@localhost:5672'],
          queue: 'riders_queue',
          queueOptions: {
            durable: false
          },
        },
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
