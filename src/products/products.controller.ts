import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { ProductDto } from './dto/productdto';
import { Response } from 'express';

const products: ProductDto[] = [];

@Controller('products')
export class ProductsController {
  @Get()
  getAllProducts() {
    return products;
  }
  @Get('filter')
  getProductBynam(@Query() query: any): ProductDto {
    const findProduct = products.find((item) => item.name == query.name);
    if (findProduct) {
      return findProduct;
    } else {
      throw new NotFoundException(`Product with name ${query.name} not found`);
    }
  }
  @Post()
  createProduct(@Body() productDto: ProductDto, @Res() res: Response) {
    products.push(productDto);
    // return productDto;
    res.status(HttpStatus.CREATED).send(productDto);
  }
  @Get(':id')
  getProductById(
    @Param('id') id: number,
    @Res({ passthrough: true }) res: Response,
  ) {
    const findProduct = products.find((item) => item.id == id);
    if (findProduct) {
      // return findProduct;
      res.status(HttpStatus.OK);
      return findProduct;
    } else {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
  }
  @Put(':id')
  updateProduct(
    @Param('id') id: number,
    @Body() productDto: ProductDto,
  ): ProductDto {
    const findUpdatedProductIndex = products.findIndex((item) => item.id == id);
    if (findUpdatedProductIndex !== -1) {
      products[findUpdatedProductIndex] = productDto;
      return productDto;
    } else {
      throw new NotFoundException(`Product with id ${id} is not found`);
    }
  }
  @Delete(':id')
  deleteProduct(@Param('id') id: number): string {
    const findDeletedProductIndex = products.findIndex((item) => item.id == id);
    if (findDeletedProductIndex !== -1) {
      products.splice(findDeletedProductIndex, 1);
      return `Delete product with ${id}`;
    } else {
      throw new NotFoundException(`Not found porduct with id ${id}`);
    }
  }
}
