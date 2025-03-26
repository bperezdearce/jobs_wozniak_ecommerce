import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './repositories/products.repository';
import { Product } from './products.interfaces';

@Injectable()
export class ProductsService {
  constructor(private productsRepository: ProductsRepository) {}

  getAllProducts(page?: number, limit?: number) {
    const currentPage = page || 1;
    const productsPerPage = limit || 5;
    return this.productsRepository.getAllProducts(currentPage, productsPerPage);
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
