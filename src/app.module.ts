import { Module } from '@nestjs/common';
import { TransacaoHttp } from './infra/http/controller/transacao/transacaoHttp';
import { ArmazenarTransacoes } from './infra/memory/armazenarTransacoes';

@Module({
  imports: [],
  controllers: [TransacaoHttp],
  providers: [ArmazenarTransacoes],
})
export class AppModule {}
