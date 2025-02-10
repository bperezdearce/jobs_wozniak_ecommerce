import { Injectable } from '@nestjs/common';
import { User } from '../users.interfaces';

@Injectable()
export class UsersRepository {
  private users: User[] = [
    {
      id: 1,
      email: 'soniareyes@gmail.com',
      name: 'Sonia Reyes',
      password: 'fhgierthw',
      address: 'Los Olmos 624, Culiprán, Región Metropolitana',
      phone: '+56925579865',
      country: 'Chile',
      city: 'Melipilla',
    },
    {
      id: 2,
      email: 'martinrojas@hotmail.com',
      name: 'Martín Rojas',
      password: '7hfT8kloW',
      address: 'Avenida Los Cerezos 1350, Las Condes, Región Metropolitana',
      phone: '+56987456321',
      country: 'Chile',
      city: 'Santiago',
    },
    {
      id: 3,
      email: 'camilagomez@yahoo.com',
      name: 'Camila Gómez',
      password: 'Gz98bT4pQ',
      address: 'Pasaje Las Araucarias 256, Concepción, Región del Biobío',
      phone: '+56965432178',
      country: 'Chile',
      city: 'Concepción',
    },
  ];

  private excludePassword(user: User): Omit<User, 'password'> {
    return Object.fromEntries(
      Object.entries(user).filter(([key]) => key !== 'password'),
    ) as Omit<User, 'password'>;
  }

  getAllUsers() {
    return this.users.map((user) => this.excludePassword(user));
  }

  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return this.excludePassword(user);
  }

  createUser(user: Omit<User, 'id'>) {
    const id = this.users.length + 1;
    const newUser = {
      id,
      ...user,
    };
    this.users = [...this.users, newUser];
    return { id };
  }

  updateUser(id: number, updatedData: Partial<Omit<User, 'id'>>) {
    const userIndex = this.users.findIndex((user) => user.id === id);

    this.users[userIndex] = {
      ...this.users[userIndex],
      ...updatedData,
    };

    return { id };
  }

  deleteUser(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);

    this.users.splice(userIndex, 1);

    return { id };
  }
}
