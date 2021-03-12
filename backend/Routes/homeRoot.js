const express = require("express")
const Router = express.Router()
const Messages = require("../Models/messageModel")
const auth = require("../auth")
Router.get("/",auth,async(req,res)=>{
    try {
        const messages = await Messages.find()
        res.status(200).send(messages)

    }catch (e) {
        console.log("eroorrr :",e)
        res.status(404).send("messages not found")
    }
})

Router.post("/",async(req,res)=>{

    const message = new Messages(req.body)

    try {
        const savedMessage = await message.save()
        res.status(201).send(savedMessage)

    }catch (e) {
        console.log("eroorrr :",e)
        res.status(404).send("error occured")

    }
})

module.exports = Router