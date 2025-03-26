import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  Param,
  Body,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { ProductsService } from './products.service';
import { Product } from './products.interfaces';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @HttpCode(200)
  @Get()
  getAllProducts(@Query('page') page?: string, @Query('limit') limit?: string) {
    const pageNumber = page ? parseInt(page, 10) : undefined;
    const limitNumber = limit ? parseInt(limit, 10) : undefined;
    return this.productsService.getAllProducts(pageNumber, limitNumber);
  }

  @HttpCode(200)
  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(Number(id));
  }

  @UseGuards(AuthGuard)
  @HttpCode(201)
  @Post()
  createProduct(@Body() product: Product) {
    return this.productsService.createProduct(product);
  }

  @UseGuards(AuthGuard)
  @HttpCode(200)
  @Put(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updatedData: Partial<Omit<Product, 'id'>>,
  ) {
    return this.productsService.updateProduct(Number(id), updatedData);
  }

  @UseGuards(AuthGuard)
  @HttpCode(200)
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(Number(id));
  }
}
