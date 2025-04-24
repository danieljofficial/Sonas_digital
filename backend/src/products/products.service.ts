import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { createProductDto } from './dto/create-product-dto';

@Injectable()
export class ProductsService {
  constructor(private readonly databaseService: DatabaseService) {}
  async getProducts() {
    const products = await this.databaseService.product.findMany();
    return products;
  }

  // async getProduct(productId: string) {
  //   const product = await this.databaseService.product.findUnique({
  //     where: { id: productId },
  //   });
  //   if (!product) throw new NotFoundException('Product Not found');
  //   return product;
  // }

  async createProduct(dto: createProductDto) {
    const product = await this.databaseService.product.findFirst({
      where: { name: dto.name },
    });
    if (product) return 'Product already exists';
    return await this.databaseService.product.create({
      data: { ...dto },
    });
  }
}
