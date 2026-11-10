import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { StartupsService } from './startups.service.js';
import { CreateStartupDto } from './dto/create-startup.dto.js';
import { UpdateStartupDto } from './dto/update-startup.dto.js';

@Controller('startups')
export class StartupsController {
  constructor(private readonly startupsService: StartupsService) {}

  @Post()
  create(@Body() dto: CreateStartupDto) {
    return this.startupsService.create(dto);
  }

  @Get()
  findAll() {
    return this.startupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.startupsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateStartupDto) {
    return this.startupsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.startupsService.remove(id);
  }
}