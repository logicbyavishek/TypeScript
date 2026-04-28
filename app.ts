interface Transaction{
    payerAccountNumber:number;
    payeeAccountNumber:number;
}

interface BankAccount{
    accountNumber:number;
    accountHolder:string;
    balance:number;
    isActive:boolean;
    transactions:Transaction[]
}

const transactions1:Transaction = {
    payerAccountNumber:123,
    payeeAccountNumber:455,
}

const transactions2:Transaction ={
    payerAccountNumber:654,
    payeeAccountNumber:455,
}

const bankAccount:BankAccount={
    accountNumber:455,
    accountHolder:"Avi",
    balance:2000,
    isActive:true,
    transactions:[transactions1,transactions2]
}

console.log(bankAccount)

/**
 * {
  accountNumber: 455,
  accountHolder: 'Avi',
  balance: 2000,
  isActive: true,
  transactions: [
    { payerAccountNumber: 123, payeeAccountNumber: 455 },
    { payerAccountNumber: 654, payeeAccountNumber: 455 }
  ]
}
 */