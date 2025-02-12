import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './repositories/products.repository';
import { Product } from './products.interfaces';

@Injectable()
export class ProductsService {
  constructor(private productsRepository: ProductsRepository) {}

  getAllProducts() {
    return this.productsRepository.getAllProducts();
  }

  getProductById(id: number) {
    return this.productsRepository.getProductById(id);
  }

  createProduct(product: Omit<Product, 'id'>) {
    return this.productsRepository.createProduct(product);
  }

  updateProduct(id: number, updatedData: Partial<Omit<Product, 'id'>>) {
    return this.productsRepository.updateProduct(id, updatedData);
  }

  deleteProduct(id: number) {
    return this.productsRepository.deleteProduct(id);
  }
}
