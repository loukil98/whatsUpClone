const express = require('express')
const Router = express.Router()
const jwt = require("jsonwebtoken");


Router.get("/",async (req,res)=>{

    try {
        const token = req.cookies.token
        if (!token){
            return res.send(false)
        }
         await jwt.verify(token,process.env.secretPassword)
        res.send(true)
    }catch (e) {
        res.json(false)
    }
})


module.exports = Router