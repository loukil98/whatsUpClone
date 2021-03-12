const express = require('express')
const Router = express.Router()

Router.get('/',(req,res)=>{

    try {
        res.cookie("token","",{
            httpOnly:true ,
            expires : new Date(0)
        }).status(200).send()
    }catch (e) {
        console.log(e)
    }

})


module.exports = Router