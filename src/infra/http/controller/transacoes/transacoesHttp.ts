import { Controller, Get } from '@nestjs/common';
import { ArmazenarTransacoes } from 'src/infra/memory/armazenarTransacoes';

@Controller('transacoes')
export class TransacoesHttp {
  constructor(private readonly transacoes: ArmazenarTransacoes) {}
  @Get()
  buscaTransacoes() {
    const transacoesExistentes = this.transacoes.get('Transacoes') ?? [];
    return transacoesExistentes;
  }
}
