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
import { UsersService } from './users.service';
import { User } from './users.interfaces';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @HttpCode(200)
  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

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

  @HttpCode(200)
  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() updatedData: Partial<Omit<User, 'id'>>,
  ) {
    return this.usersService.updateUser(Number(id), updatedData);
  }

  @HttpCode(200)
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(Number(id));
  }
}
