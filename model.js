let banksDb = require('./database');

//bank model
class BankModel{
    constructor({name, location, branch, phone, address,accountNumber}){
        this.name =name;
        this.location = location;
        this.branch = branch;
        this.phone = phone;
        this.address = address;
        this.accountNumber = accountNumber;

    }
    save(){
        banksDb.push(this)
        return this;
    }
    static all(){
        return banksDb
    }

    static update(updatedInfo ={} ){
      banksDb =  banksDb.map(bank =>{
            if(bank.name === updatedInfo.name){
                return {...bank, ...updatedInfo}
            }
            return bank; 
        }); 
    }
    static delete({name}){
        let deletedbank = null;
        banksDb= banksDb.filter( bank =>{
             if(bank.name !== name){
                 return true;
             }
             deletedbank= bank;

             return false;
         });
         return deletedbank;
    }

}
module.exports = BankModel