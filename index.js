//import express
const express = require('express')

const dataService = require('./services/data service')

//create an app using express

const app = express()

//to parse json
app.use(express.json())

//resolve http request from client
//GET - TO READ DATA
app.get('/' ,(req,res) => {
    res.status(401).send("IT'S A GET METHOD")
})

//POST - TO CREATE DATA
app.post('/' ,(req,res) => {
    res.send("IT'S A POST METHOD")
})

//PUT - TO UDATE/MODIFY DATA
app.put('/' ,(req,res) => {
    res.send("IT'S A PUT METHOD")
})

//PATCH - TO UDATE PARTIALLY DATA
app.patch('/' ,(req,res) => {
    res.send("IT'S A PATCH METHOD")
})

//DELETE - TO DELETE DATA
app.delete('/' ,(req,res) => {
    res.send("IT'S A DELETE METHOD")
})


//bank app - API

//register API
app.post('/register',(req,res)=>{

    const result = dataService.register(req.body.acno,req.body.password,req.body.uname)
    res.status(result.statusCode).json(result)

})

//login API

app.post('/login',(req,res)=>{

    const result = dataService.login(req.body.acno,req.body.password)
    res.status(result.statusCode).json(result)

})

//deposit API

app.post('/deposit',(req,res)=>{

    const result = dataService.deposit(req.body.acno,req.body.password,req.body.amt)
    res.status(result.statusCode).json(result)

})


//setup the port number
app.listen(3000,()=>{
    console.log("server started at port no:3000")
})