import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  Param,
  Body,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.interfaces';

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
  getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(Number(id));
  }

  @HttpCode(201)
  @Post()
  createProduct(@Body() product: Product) {
    return this.productsService.createProduct(product);
  }

  @HttpCode(200)
  @Put(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updatedData: Partial<Omit<Product, 'id'>>,
  ) {
    return this.productsService.updateProduct(Number(id), updatedData);
  }

  @HttpCode(200)
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(Number(id));
  }
}
