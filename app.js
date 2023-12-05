import express from "express"
const app = express()
import mongoose, { Mongoose } from "mongoose"
import dotenv from "dotenv"
import path from "path"
import PIZZA from "./Routers/Pissarouter.js"
app.use(express.json())
import {config} from "./config/config.js"
import cors from "cors"

//config dotenv
dotenv.config();

config()

.then((res) => {
    console.log("yes")
})
.catch((e)=> {
    console.log(e)

})
app.use(cors())

app.use("/api" , PIZZA) 


app.listen(30000 , (req,res) => {
    console.log("port 3000")
})








app.get("/" , (req,res) => {
    console.log("alot me running rhe world pigeste then ")
})