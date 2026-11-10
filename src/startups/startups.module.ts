import { Module } from '@nestjs/common';
import { StartupsService } from './startups.service.js';
import { StartupsController } from './startups.controller.js';

@Module({
  controllers: [StartupsController],
  providers: [StartupsService],
})
export class StartupsModule {}
