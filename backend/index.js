const express = require("express")
const app = express()
const mongoose = require('mongoose')
const homeRoot = require("./Routes/homeRoot")
const cors = require("cors")

//listening
 app.listen(5000, () => {
    console.log("helloo from server")
})


//middlewares
app.use(express.json())
app.use(cors())
app.use("/",homeRoot)


//socket



//Db connection
mongoose.connect("mongodb+srv://ghassen:azerty@cluster0.agiog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {useCreateIndext: true, useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.once("open", () => {
    console.log("connected to DB")

})
mongoose.connection.on("error", (err) => {
    console.log("not connected with error => ", err)
})
