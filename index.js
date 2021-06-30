const express= require("express");
const bodyParser =require('body-parser')
const {listBanksController, updateBankController, createBankController, deleteBanksController} = require('./controllers');
const server = express();
 
//middleware
server.use(bodyParser.json());






//routes

//create bank -get method
server.get ('/bank', listBanksController);
//create bank - post method
server.post('/bank', createBankController);
//update bank - put method
server.put('/bank', updateBankController);
//delete bank - delete method
server.delete('/bank', deleteBanksController);
  
server.listen(3000, ()=>console.log('server is ready'))