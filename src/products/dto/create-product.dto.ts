import { IsString, IsDecimal, IsBoolean, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsDecimal()
  price: number;

  @IsBoolean()
  stock: boolean;

  @IsOptional()
  @IsString()
  imgUrl?: string;
}
