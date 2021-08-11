const express= require("express");
const bodyParser =require('body-parser')
const mongoose =require('mongoose')
const server = express();
const bankRoutes = require('./routes/bankroute')
const accountRoutes = require('./routes/accountRoute')
 const userRoutes =require('./routes/user')

//middleware
server.use(bodyParser.json());






//routes
server.use(accountRoutes);
server.use(bankRoutes);
server.use(userRoutes);
//connecting to database and  start  server
mongoose.connect('mongodb+srv://codetrainUser:mongo2000@cluster0.ebfyc.mongodb.net/codetrain?retryWrites=true&w=majority',
{useNewUrlParser:true, useUnifiedTopology:true}
)
.then(result =>{
server.listen(3000, ()=>console.log('server is ready'))
}).catch(err =>console.log(err)) 