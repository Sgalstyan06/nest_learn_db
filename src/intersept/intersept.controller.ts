import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from './logging.interceptor';

@Controller('intersept')
@UseInterceptors(LoggingInterceptor)
export class InterseptController {
  @Get()
  interseptFn() {
    console.log('interseptor controler body');
    return 'this is intersept route';
  }
}
