
const express = require('express')
 const cors = require('cors')
 const mongoose = require('mongoose')
 const User = require('../server/model/model')
const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json())

const connectDB = async()=>{
  await mongoose.connect(process.env.MONGO_DB)
  try {
    console.log("db is connected")
    
  } catch (error) {
    console.log(error)
    
  }
}
app.post('/register', async (req,res)=>{
  try {
    const newUser =   new User({
      name: req.body.name,
      email:req.body.email,
      password:req.body.password
  
    })
    const saveUser = await newUser.save()
    res.status(201).json(saveUser)
    console.log(saveUser)
  } catch (error) {
    res.status(409).json(error)
    
  }
 
})

connectDB()
app.listen(process.env.PORT , () => console.log(`server is ready ${process.env.PORT}`))