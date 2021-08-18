const express = require('express');
const {body} = require('express-validator');
const { listBanksController, createBankController, updateBankController, deleteBanksController } = require('../controllers/bankController');
const isAuth = require('../middlewares/is-auth');
const BankModel = require('../models/bank');
const router = express.Router();


//create bank -get method
router.get('/bank/:id?', isAuth, listBanksController);
//create bank   - post method
router.post('/banks', isAuth,[
     body('name').trim().not().isEmpty().withMessage('enter name'), 
     body('phone').isMobilePhone("en-GH").withMessage('enter phone number'),
     body('location').trim().not().isEmpty().withMessage('enter location'), 
     body('branch').trim().not().isEmpty()


     .custom((value, {req}) =>{

         return BankModel.findOne({'phone':value}).then(
             bankDoc =>{
                 if(bankDoc)
                 return Promise.reject('phone number already taken');
             }
         )
     })
    ], createBankController);
//update bank - put method
router.put('/bank', isAuth, updateBankController);
//delete bank - delete method
router.delete('/bank', isAuth, deleteBanksController);

 module.exports = router;