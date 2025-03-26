import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      throw new UnauthorizedException('No hay header de autorización');
    }

    const [prefix, credentials] = authHeader.split(' ');

    if (prefix !== 'Basic:' || !credentials || !credentials.includes(':')) {
      throw new UnauthorizedException('Header de autorización inválido');
    }

    const [email, password] = credentials.split(':');

    if (!email || !password) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    return true;
  }
}
