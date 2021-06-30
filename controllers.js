const BankModel = require('./model')
//controllers
const listBanksController =(req, res) =>{
    // list all banks
    const banks = BankModel.all();  
    res.json({data:banks })
}
const createBankController = (req, res) =>{
    //create all banks
    const {name, location, branch, phone, address,accountNumber} = req.body;
    const bank = new BankModel({name, location, branch, phone, address,accountNumber});
     
    bank.save(); 
    res.json({message: "create successful", data:bank});
}
const updateBankController =(req, res) =>{
    //update all banks
    const {name, location, branch, phone, address,accountNumber} = req.body;
  const updatedBank=  BankModel.update({name, location, branch, phone, address,accountNumber});
  res.json({message: "update successful", data: updatedBank});
}
const deleteBanksController =(req, res)=>{
    //delete all banks
    const {name} = req.body;
    const deletedbank = BankModel.delete({name });
    res.json({message: "bank deleted", data: deletedbank})
}

module.exports ={
    listBanksController,
    updateBankController,
    createBankController,
    deleteBanksController,
}