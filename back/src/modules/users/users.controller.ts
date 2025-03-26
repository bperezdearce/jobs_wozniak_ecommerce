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
import { UsersService } from './users.service';
import { User } from './users.interfaces';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @HttpCode(200)
  @Get()
  getAllUsers(@Query('page') page?: string, @Query('limit') limit?: string) {
    const pageNumber = page ? parseInt(page, 10) : undefined;
    const limitNumber = limit ? parseInt(limit, 10) : undefined;
    return this.usersService.getAllUsers(pageNumber, limitNumber);
  }

  @UseGuards(AuthGuard)
  @HttpCode(200)
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(Number(id));
  }

  @HttpCode(201)
  @Post()
  createUser(@Body() user: User) {
    return this.usersService.createUser(user);
  }

  @UseGuards(AuthGuard)
  @HttpCode(200)
  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() updatedData: Partial<Omit<User, 'id'>>,
  ) {
    return this.usersService.updateUser(Number(id), updatedData);
  }

  @UseGuards(AuthGuard)
  @HttpCode(200)
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(Number(id));
  }
}
