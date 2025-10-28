import { Injectable } from '@nestjs/common';
import { ITransacao } from 'src/interface/transacao/transacaoInterface';

@Injectable()
export class ArmazenarTransacoes {
  private transacoes = new Map<string, ITransacao[]>();

  set(key: string, value: ITransacao[]): void {
    this.transacoes.set(key, value);
  }

  get(key: string): ITransacao[] | undefined {
    return this.transacoes.get(key);
  }

  clear(): void {
    this.transacoes.clear();
  }
}
