import { Controller, Delete } from '@nestjs/common';
import { ArmazenarTransacoes } from 'src/infra/memory/armazenarTransacoes';

@Controller('exclui-transacoes')
export class ExcluiTransacaoHttp {
  constructor(private readonly transacoes: ArmazenarTransacoes) {}
  @Delete()
  excluiTransacoes() {
    this.transacoes.clear();
    return 'Transações excluidas com sucesso!';
  }
}
