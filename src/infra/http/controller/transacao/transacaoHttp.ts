import { Body, Controller, Post } from '@nestjs/common';
import { TransacaoHttpDto } from './transacaoDto/transacaoHttpDto';
import { ArmazenarTransacoes } from 'src/infra/memory/armazenarTransacoes';
@Controller('transacao')
export class TransacaoHttp {
  constructor(private readonly transacoes: ArmazenarTransacoes) {}
  @Post()
  criaTransacao(@Body() transacaoHttpDto: TransacaoHttpDto) {
    const transacoesExistentes = this.transacoes.get('Transacoes') ?? [];
    transacoesExistentes.push(transacaoHttpDto);
    this.transacoes.set('Transacoes', transacoesExistentes);
    return transacaoHttpDto;
  }
}
