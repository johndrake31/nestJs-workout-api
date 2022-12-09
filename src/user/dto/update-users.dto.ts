import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsOptional,
  IsEmail,
  IsArray,
} from 'class-validator';

export class UpdateUserDTO {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;
}
