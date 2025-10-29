import { Module } from '@nestjs/common';
import { TransacaoHttp } from './infra/http/controller/transacao/transacaoHttp';
import { ArmazenarTransacoes } from './infra/memory/armazenarTransacoes';
import { TransacoesHttp } from './infra/http/controller/transacoes/transacoesHttp';
import { ExcluiTransacaoHttp } from './infra/http/controller/excluiTransacao/excluiTransacaoHttp';
import { EstatisticaHttp } from './infra/http/controller/estatisticas/estatisticaHttp';

@Module({
  imports: [],
  controllers: [
    TransacaoHttp,
    TransacoesHttp,
    ExcluiTransacaoHttp,
    EstatisticaHttp,
  ],
  providers: [ArmazenarTransacoes],
})
export class AppModule {}
