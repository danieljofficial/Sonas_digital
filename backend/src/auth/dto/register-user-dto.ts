import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class RegisterUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  companyName: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @IsStrongPassword()
  password: string;
}
