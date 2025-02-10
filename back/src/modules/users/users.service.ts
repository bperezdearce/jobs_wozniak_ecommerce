import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repository';
import { User } from './users.interfaces';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  getAllUsers() {
    return this.usersRepository.getAllUsers();
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
