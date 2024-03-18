const express=require('express')

const mongoose=require('mongoose')
const cors=require("cors")

const app=express()
const rout=require('./router')

app.use(express.json())
app.use(cors())
app.use('/api',rout) //http://localhost:2718/api/

mongoose.connect('mongodb://127.0.0.1:27017/businformation').then(()=>{
    app.listen(2718)
    console.log('db connect')
})