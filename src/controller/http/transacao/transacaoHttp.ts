import { Body, Controller, Post } from '@nestjs/common';
import { TransacaoHttpDto } from './transacaoHttpDto';

@Controller('transacao')
export class TransacaoHttp {
  @Post()
  criaTransacao(@Body() transacaoHttpDto: TransacaoHttpDto) {
    return transacaoHttpDto;
  }
}
