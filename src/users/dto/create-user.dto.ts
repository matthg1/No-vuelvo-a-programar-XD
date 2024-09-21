import { IsEmail, IsNotEmpty, IsString, Length, IsOptional, IsInt } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 50)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 15)
  password: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 80)
  address: string;

  @IsNotEmpty()
  @IsInt()
  phone: number; // Asegúrate de que este campo esté presente

  @IsOptional()
  @IsString()
  @Length(5, 50)
  country?: string;

  @IsOptional()
  @IsString()
  @Length(5, 50)
  city?: string;
}
