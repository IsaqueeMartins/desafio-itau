import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class TransacaoHttpDto {
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  valor: number;

  @IsNotEmpty()
  @IsDateString()
  dataHora: string;
}
