import { Injectable, NotFoundException } from '@nestjs/common';
import { OrderDto } from 'src/dto/order.dto';
import { IOrder } from 'src/interfaces/order.interface';

@Injectable()
export class OrdersService {
  private readonly orders: IOrder[] = [];

  create(order: IOrder) {
    this.orders.push(order);
  }

  findAll(): IOrder[] {
    return this.orders;
  }

  update(id: number, orderUpdateInfo: OrderDto): OrderDto {
    const findindex = this.orders.findIndex((item) => item.id === id);
    if (findindex !== -1) {
      this.orders[findindex] = orderUpdateInfo;
      return orderUpdateInfo;
    } else {
      throw new NotFoundException(`Order with id ${id} not found`);
    }
  }

  delete(id: number): string {
    const findIndex = this.orders.findIndex((item) => item.id === id);
    if (findIndex !== -1) {
      this.orders.splice(findIndex, 1);
      return `Order with Id ${id} was deleted successfully`;
    } else {
      throw new NotFoundException(
        `You cant delete Order with id ${id}, because its not found`,
      );
    }
  }
}
