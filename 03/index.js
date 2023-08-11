//import express module to use 
const express = require('express');

//make a instance of express module 
const app = express();

//convert data to json
app.use(express.json());

// define port number 
const PORT = 4000;

//define hostname 
const hostname = 'localhost'

//request to server 
app.get('/',(req,res)=>{
    res.send('<h1>I am a home page </h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>I am about page </h1>')
})

app.get('/contact',(req,res)=>{
    res.send(JSON.stringify({'email':`support@pwskills.com`}));
})


//running server 
app.listen(PORT,()=>{
    console.log(`server running at ${hostname} : ${PORT}`);
})