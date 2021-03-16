const express = require("express")
const Router = express.Router()
const Messages = require("../Models/messageModel")
const Users = require("../Models/userModel")
const auth = require("../auth")
Router.get("/",auth,async(req,res)=>{
    try {
        const messages = await Messages.find().populate("sender","firstName lastName")
        res.status(200).send(messages)
    }catch (e) {
        console.log("eroorrr :",e)
        res.status(404).send("messages not found")
    }
})

Router.post("/",auth,async(req,res)=>{

    const user = await Users.findOne({_id:req.userId})
    const message = new Messages({...req.body,sender:user})
    try {
        const savedMessage = await message.save()
        res.status(201).send(savedMessage)

    }catch (e) {
        console.log("eroorrr :",e)
        res.status(404).send("error occured")
    }
})

module.exports = Router