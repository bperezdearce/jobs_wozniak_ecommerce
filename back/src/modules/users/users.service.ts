import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repository';
import { User } from './users.interfaces';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  getAllUsers(page?: number, limit?: number) {
    const currentPage = page || 1;
    const currentLimit = limit || 5;
    return this.usersRepository.getAllUsers(currentPage, currentLimit);
  }

  getUserById(id: number) {
    return this.usersRepository.getUserById(id);
  }

  createUser(user: Omit<User, 'id'>) {
    return this.usersRepository.createUser(user);
  }

  updateUser(id: number, updatedData: Partial<Omit<User, 'id'>>) {
    return this.usersRepository.updateUser(id, updatedData);
  }

  deleteUser(id: number) {
    return this.usersRepository.deleteUser(id);
  }
}
