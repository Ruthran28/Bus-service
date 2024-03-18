const express=require('express')

const route=express.Router();
const con=require('./userCon')

route.post('/addbus',con.adddata)
route.get('/get',con.getStatus)

module.exports=route