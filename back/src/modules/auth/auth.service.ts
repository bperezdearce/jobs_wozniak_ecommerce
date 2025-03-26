import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from '../users/repositories/users.repository'; // Adjust the path as needed
import { SingIn } from './auth.interfaces';

@Injectable()
export class AuthService {
  constructor(private readonly usersRepository: UsersRepository) {}

  signIn(signin: SingIn) {
    const { email, password } = signin;

    if (!email || !password) {
      throw new Error('Email y password requeridos');
    }

    const user = this.usersRepository.getUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Email o password incorrectos');
    }

    const isPasswordCorrect = user.password === password;

    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Email o password incorrectos');
    }

    return { message: 'Login exitoso' };
  }
}
