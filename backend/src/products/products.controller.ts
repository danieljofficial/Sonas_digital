import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { ProductsService } from './products.service';
import { createProductDto } from './dto/create-product-dto';
import { PaginationDto } from './dto/pagination.dto';

@Controller('products')
export class ProductsController {
  // private databaseService: DatabaseService
  constructor(private productsService: ProductsService) {}
  @Get()
  findMany() {
    return this.productsService.getProducts();
  }

  // @Get(':productId')
  // findOne(@Param('productId') productId: string) {
  //   return this.productsService.getProduct(productId);
  // }

  @Post()
  create(@Body() dto: createProductDto) {
    return this.productsService.createProduct(dto);
  }
}
