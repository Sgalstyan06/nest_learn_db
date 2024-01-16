import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderDto } from 'src/dto/order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  create(@Body() order: OrderDto) {
    this.ordersService.create(order);
  }

  @Get()
  findAll(): OrderDto[] {
    return this.ordersService.findAll();
  }

  @Put(':id')
  update(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST }),
    )
    id: number,
    @Body() orderUpdateInfo: OrderDto,
  ): OrderDto {
    console.log(id);
    return this.ordersService.update(id, orderUpdateInfo);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): string {
    return this.ordersService.delete(id);
  }
}
