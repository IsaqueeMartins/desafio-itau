import { Body, Controller, Post } from '@nestjs/common';
import { TransacaoHttpDto } from './transacaoDto/transacaoHttpDto';
import { ArmazenarTransacoes } from 'src/infra/memory/armazenarTransacoes';
@Controller('transacao')
export class TransacaoHttp {
  constructor(private readonly transacoes: ArmazenarTransacoes) {}
  @Post()
  criaTransacao(@Body() transacaoHttpDto: TransacaoHttpDto) {
    const transacoesArr: TransacaoHttpDto[] = [];
    transacoesArr.push(transacaoHttpDto);
    this.transacoes.set('Transacoes', transacoesArr);
    return this.transacoes.get('Transacoes');
  }
}
