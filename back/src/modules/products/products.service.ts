import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './repositories/products.repository';

@Injectable()
export class ProductsService {
  constructor(private productsRepository: ProductsRepository) {}

  getAllProducts() {
    return this.productsRepository.getAllProducts();
  }
}
