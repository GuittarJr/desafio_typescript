import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import {AdminAccount} from './class/AdminAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
const adminAccount:AdminAccount = new AdminAccount('Geovane',30)
console.log(adminAccount)


adminAccount.deposit(30);
adminAccount.getBalance();
adminAccount.getStatus();
adminAccount.getName();
console.log(adminAccount.getStatus());
console.log(adminAccount.getName());


peopleAccount.getBalance();
peopleAccount.deposit(50);
peopleAccount.getBalance();
peopleAccount.getStatus();
peopleAccount.getName();
console.log(peopleAccount.getStatus());
console.log(peopleAccount.getName());


companyAccount.getBalance();
companyAccount.getLoan(30);
companyAccount.getBalance();
console.log(companyAccount.getStatus());
console.log(companyAccount.getName());