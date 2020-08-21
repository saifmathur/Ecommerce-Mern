const express = require('express')
const app = express()
const data = require('./backend/data')

app.get('/api/products', (req,res)=>{
    res.send(data.products)
})


app.listen(5000, (req,res)=>{
    console.log('connected')
})