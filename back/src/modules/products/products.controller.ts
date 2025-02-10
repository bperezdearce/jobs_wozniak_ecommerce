import { Controller, Get, Post, Put, Delete, HttpCode } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @HttpCode(200)
  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @HttpCode(200)
  @Get(':id')
  getUserById() {
    return 'Este endpoint devuelve un producto según su id';
  }

  @HttpCode(201)
  @Post()
  createUser() {
    return 'Este endpoint crea un producto';
  }

  @HttpCode(200)
  @Put(':id')
  updateUser() {
    return 'Este endpoint modifica un producto según su id';
  }

  @HttpCode(200)
  @Delete(':id')
  deleteUser() {
    return 'Este endpoint elimina un producto según su id';
  }
}
