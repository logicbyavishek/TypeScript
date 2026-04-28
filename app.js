"use strict";
const transactions1 = {
    payerAccountNumber: 123,
    payeeAccountNumber: 455,
};
const transactions2 = {
    payerAccountNumber: 654,
    payeeAccountNumber: 455,
};
const bankAccount = {
    accountNumber: 455,
    accountHolder: "Avi",
    balance: 2000,
    isActive: true,
    transactions: [transactions1, transactions2]
};
console.log(bankAccount);
