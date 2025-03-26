import { Controller, Post, Body } from '@nestjs/common';
import { SingIn } from './auth.interfaces';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signIn(@Body() signin: SingIn) {
    return this.authService.signIn(signin);
  }
}
