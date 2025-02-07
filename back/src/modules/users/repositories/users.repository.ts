import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  private users = [
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

  getAllUsers() {
    return this.users;
  }
}
