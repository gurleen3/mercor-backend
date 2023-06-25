const express =require('express');
const route=express.Router();
const User = require('../controller/controller.js');
route.get('/',User.Greet)
route.post('/ask', User.GPT)
module.exports=route

