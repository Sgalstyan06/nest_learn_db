import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { InterseptController } from './intersept/intersept.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { mongodbUri } from './service/consfig';

@Module({
  imports: [
    OrdersModule,
    UsersModule,
    MongooseModule.forRoot(mongodbUri, { dbName: 'newUsers' }),
  ],
  controllers: [AppController, ProductsController, InterseptController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
