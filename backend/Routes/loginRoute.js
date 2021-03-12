const express = require("express")
const Router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../Models/userModel')
const jwt = require("jsonwebtoken");
Router.post("/", async (req, res) => {

    try {
        const {email, password} = req.body
        const existingUser = await User.findOne({email})
        console.log(existingUser)
        if (!existingUser) {
            return res.status(404).send("email  are incorrect")
        }
        const hashedPassword = existingUser.hashedPassword
        const verified = await bcrypt.compare(password, hashedPassword)
        if (!verified) {
            return res.status(404).send(" password are incorrect")
        }
        const token = await jwt.sign({
            user: existingUser._id
        }, process.env.secretPassword)
        res.cookie("token", token, {
            httpOnly: true })
        res.status(200).send()

    } catch (e) {
        console.log(e)
        res.status(500).send("email or password are incorrect")
    }
})

module.exports = Router

