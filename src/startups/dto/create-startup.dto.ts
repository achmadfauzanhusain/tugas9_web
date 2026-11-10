import { IsBoolean, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, Min, MinLength } from 'class-validator';

export class CreateStartupDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @IsNotEmpty()
  sector: string;

  @IsIn(['pre-seed', 'seed', 'series-a', 'series-b'])
  stage: string;

  @IsNumber()
  @Min(0)
  fundingAmount: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}