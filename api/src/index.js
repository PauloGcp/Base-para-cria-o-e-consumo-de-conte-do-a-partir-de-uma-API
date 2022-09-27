import { config } from "dotenv";
import express from "express";
import cors from "cors";

config()

const api = express()
const {PORT} = process.env;

api.use(cors())

api.get('/', (req, res)=>{
    res.status(200).send("APIHome")
})

api.get('/frontend', (req, res)=>{
    res.status(200).json({title: "APIJson", hours: 10})
})

api.listen(PORT, ()=>{
    console.log(`Server on: http://localhost:${PORT}`)
    console.log('Shutdown ctrl + c');
})

