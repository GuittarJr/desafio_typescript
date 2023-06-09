export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name
  }

  setBalance = (balance:number):void=>{
    this.balance +=balance
  }

  getStatus=():boolean=>{
    return this.status
  }

  deposit = (deposit:number): void => {
    if(this.validateStatus()){
     this.balance += deposit
    }
  }

  withdraw = (withdraw:number): void => {
    if(this.validateStatus() && this.balance > withdraw){
      this.balance -= withdraw;
    }else{
      console.log('Saldo insuficiente')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
