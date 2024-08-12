import { IsUrl, IsNotEmpty } from 'class-validator';

export class CreateURLDto {
  @IsUrl()
  @IsNotEmpty()
  original!: string;
}
