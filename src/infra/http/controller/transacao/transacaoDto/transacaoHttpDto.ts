import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, MaxDate, Min } from 'class-validator';

export class TransacaoHttpDto {
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  valor: number;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  @MaxDate(() => new Date(), { message: Date() })
  dataHora: Date;
}
