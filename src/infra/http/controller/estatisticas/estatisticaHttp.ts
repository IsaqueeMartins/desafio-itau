import { Controller, Get } from '@nestjs/common';
import { ArmazenarTransacoes } from 'src/infra/memory/armazenarTransacoes';

@Controller('estatistica')
export class EstatisticaHttp {
  constructor(private readonly transacoes: ArmazenarTransacoes) {}
  @Get()
  buscaEstatistica() {
    const umMinutoAtras = Date.now() - 60 * 1000;
    const ultimasTransacoes = this.transacoes
      .get('Transacoes')
      ?.filter((transacao) => {
        const dataTransacao = new Date(transacao.dataHora).getTime();
        return dataTransacao > umMinutoAtras;
      });

    if (!ultimasTransacoes) {
      return 'Sem transações no ultimo minuto';
    }

    const countTransacoes = ultimasTransacoes?.length;
    const sumTransacoes = ultimasTransacoes?.reduce(
      (a: number, b) => a + Number(b.valor),
      0,
    );
    const avgTransacoes = sumTransacoes / countTransacoes;
    const minTransacoes = Math.min(
      ...ultimasTransacoes.map((transacao) => transacao.valor),
    );
    const maxTransacoes = Math.max(
      ...ultimasTransacoes.map((transacao) => transacao.valor),
    );

    const estatisticas = {
      countTransacoes,
      sumTransacoes,
      avgTransacoes,
      minTransacoes,
      maxTransacoes,
    };
    return estatisticas;
  }
}
