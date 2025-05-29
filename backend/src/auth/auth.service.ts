import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginUserDto } from './dto/login-user-dto';
import { UsersService } from 'src/users/users.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthUser } from 'src/decorators/user.decorator';
import { RegisterUserDto } from './dto/register-user-dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerUserDto: RegisterUserDto) {
    const user = await this.userService.create(registerUserDto);

    if (user) {
      const loggedUser = await this.login({
        email: registerUserDto.email,
        password: registerUserDto.password,
      });
      return loggedUser;
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.validateUser(loginUserDto);
    const payload: AuthUser = {
      email: user.email,
      sub: {
        userId: user.id,
        name: user.name,
      },
    };
    return {
      user,
      backendTokens: {
        accessToken: await this.jwtService.signAsync(payload, {
          expiresIn: '3d',
          secret: process.env.JWT_SECRET,
        }),
        refreshToken: await this.jwtService.signAsync(payload, {
          expiresIn: '7d',
          secret: process.env.JWT_REFRESH_TOKEN,
        }),
      },
    };
  }

  async validateUser(loginUserDto: LoginUserDto) {
    const user = await this.userService.findByEmail(loginUserDto.email);

    if (user && (await compare(loginUserDto.password, user.password))) {
      const { password, ...result } = user;
      return result;
    }

    if (!user) {
      throw new NotFoundException({
        message: 'Email not found, please signup first.',
        statusCode: 404,
      });
    }

    throw new UnauthorizedException({
      message: 'Incorrect password',
      statusCode: 401,
    });
  }

  async refreshToken(user: any) {
    const payload = {
      name: user.name,
      sub: user.sub,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: '3d',
        secret: process.env.JWT_SECRET,
      }),
      refreshToken: await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
        secret: process.env.JWT_REFRESH_TOKEN,
      }),
    };
  }
}
