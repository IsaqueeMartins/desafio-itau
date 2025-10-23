import { Module } from '@nestjs/common';
import { TransacaoHttp } from './controller/http/transacao/transacaoHttp';

@Module({
  imports: [],
  controllers: [TransacaoHttp],
  providers: [],
})
export class AppModule {}
