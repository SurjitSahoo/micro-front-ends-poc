import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService, Item } from './app.service';

@Controller('items')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll() {
    return this.appService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.appService.getOne(id);
  }

  @Post()
  create(@Body() item: Item) {
    return this.appService.create(item);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updates: Partial<Item>) {
    return this.appService.update(id, updates);
  }
}
