


import express from "express"
import pissMODEL from "../Models/pissaModel.js"
const router = express.Router()


router.get("/pizz" , async(req,res) => {

    try {

        const pizzaz = await pissMODEL.find({})
        console.log(pizzaz)
        res.send(pizzaz)

    } catch(e) {
        res.json({mssege : e})


    }

})


export default router