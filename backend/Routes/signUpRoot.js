const express = require("express")
const Router = express.Router()
const Users = require("../Models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
Router.post('/', async (req, res) => {
    const {firstName, lastName, email, password} = req.body
    try {
        const exist = await Users.findOne({email: email})
        console.log(exist)
        if (exist) {
           return  res.status(400).send("email already signed Up")
        }
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)
        const user = new Users({firstName, lastName, email, hashedPassword})
        const savedUser = await user.save()

        const token = jwt.sign({
            user: savedUser._id
        }, process.env.secretPassword)
        res.cookie("token", token, {
            httpOnly: true
        }).status(200).send(savedUser)
    } catch (e) {
        console.log(e)
    }

})
module.exports = Router