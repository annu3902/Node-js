// const express = require('express') -> Module based 

import express from "express"
import { configDotenv } from "dotenv"

const app = express()

app.get('/', (req, res)=>{
    res.send("Hello World")
})

app.get('/login', (req, res) => [
    res.cookie('Welcome to Login Page')
])

app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`)
})