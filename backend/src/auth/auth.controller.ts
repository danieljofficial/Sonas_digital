import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user-dto';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/login-user-dto';
import { AuthService } from './auth.service';
import { RefreshJwtGuard } from './guards/refresh.guard';
import { JwtGuard } from './guards/jwt.guard';
import { RegisterUserDto } from './dto/register-user-dto';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}
  @Post('register')
  async registerUser(@Body() registerUserDto: RegisterUserDto) {
    return await this.authService.register(registerUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return await this.authService.login(loginUserDto);
  }

  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refreshToken(@Request() req) {
    return await this.authService.refreshToken(req.user);
  }

  @UseGuards(JwtGuard)
  @Post('profile')
  async getProfile(@Request() req) {
    return req.user;
  }
}
