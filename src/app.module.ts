import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { StartupsModule } from './startups/startups.module.js';

@Module({
  imports: [StartupsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
