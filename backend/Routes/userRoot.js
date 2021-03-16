const express = require('express')
const Router = express.Router()
const Users = require("../Models/userModel")
Router.get('/:id',async (req,res)=>{

    try {
        const user = await Users.findOne({_id:req.params.id})
        res.status(200).send({firstName:user.firstName,lastName:user.lastName})
    }catch (e) {
        console.log(e)
        res.status(404).send("user Not found")
    }
})




module.exports = Router