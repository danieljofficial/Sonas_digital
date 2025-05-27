import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { createProductDto } from './dto/create-product-dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class ProductsService {
  constructor(
    private readonly databaseService: DatabaseService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  async getProducts() {
    const cacheKey = 'products';
    const cachedProducts = await this.cacheManager.get(cacheKey);
    if (cachedProducts) {
      return cachedProducts;
    } else {
      const products = await this.databaseService.product.findMany();
      await this.cacheManager.set(cacheKey, products);
      return products;
    }
  }

  async getProduct(productId: string) {
    const product = await this.databaseService.product.findUnique({
      where: { id: productId },
    });
    if (!product) throw new NotFoundException('Product Not found');
    return product;
  }

  async createProduct(dto: createProductDto) {
    const product = await this.databaseService.product.findFirst({
      where: { name: dto.name },
    });
    if (product) return 'Product already exists';
    return await this.databaseService.product.create({
      data: { ...dto },
    });
  }

  async clearProductsCache() {
    const keys = await this.cacheManager.stores.keys();
    for (const key of keys) {
      await this.cacheManager.del(key.toString());
    }
  }
}
