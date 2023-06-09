import { DioAccount } from "./DioAccount";

export class AdminAccount extends DioAccount {
  constructor(nome: string, accountNumber: number) {
    super(nome, accountNumber);
  }
  
  deposit = (deposit: number): void => {
    this.setBalance(deposit + 10.0);
  };
}
