import { ConflictException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { hash } from 'bcrypt';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.databaseService.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    if (user) {
      throw new ConflictException('Email already exists.');
    }

    const newUser = await this.databaseService.user.create({
      data: {
        ...createUserDto,
        password: await hash(createUserDto.password, 10),
      },
    });

    const { password, ...result } = newUser;
    return result;
  }

  async findAll() {
    return await this.databaseService.user.findMany();
  }

  async findOne(id: string) {
    const user = await this.databaseService.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }
  async findByEmail(email: string) {
    return await this.databaseService.user.findUnique({
      where: {
        email,
      },
    });
  }

  async getUserProfile(userId: string) {
    return await this.databaseService.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.databaseService.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    return await this.databaseService.user.delete({
      where: {
        id,
      },
    });
  }
}
