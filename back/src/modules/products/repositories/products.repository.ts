import { Injectable } from '@nestjs/common';
import { Product } from '../products.interfaces';

@Injectable()
export class ProductsRepository {
  private products: Product[] = [
    {
      id: 1,
      name: 'iPhone 16',
      description:
        'Pantalla Super Retina XDR; Pantalla OLED de 6,1 pulgadas (diagonal) sin marco; Resolución de 2556 x 1179 pixeles a 460 ppi.',
      price: 649000,
      stock: true,
      imgUrl:
        'https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-16.png',
    },
    {
      id: 2,
      name: 'MacBook Pro 16” M3',
      description:
        'Chip M3 Pro con CPU de 12 núcleos y GPU de 18 núcleos; Pantalla Liquid Retina XDR de 16,2 pulgadas; 18 GB de RAM unificada.',
      price: 2499000,
      stock: true,
      imgUrl:
        'https://photos5.appleinsider.com/price_guide/macbook-pro-16-inch-m3-pg-header.png',
    },
    {
      id: 3,
      name: 'iPad Air 6',
      description:
        'Pantalla Liquid Retina de 10,9 pulgadas; Chip M2; Compatible con Apple Pencil Pro y Magic Keyboard.',
      price: 799000,
      stock: true,
      imgUrl:
        'https://cdsassets.apple.com/live/7WUAS350/images/ipad/spring-2024-4.png',
    },
  ];

  getAllProducts() {
    return this.products;
  }

  getProductById(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    return product;
  }

  createProduct(product: Omit<Product, 'id'>) {
    const id = this.products.length + 1;
    const newProduct = {
      id,
      ...product,
    };
    this.products = [...this.products, newProduct];
    return { id };
  }

  updateProduct(id: number, updatedData: Partial<Omit<Product, 'id'>>) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );

    this.products[productIndex] = {
      ...this.products[productIndex],
      ...updatedData,
    };
  }

  deleteProduct(id: number) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );

    this.products.splice(productIndex, 1);

    return { id };
  }
}
