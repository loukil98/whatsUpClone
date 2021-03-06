const express = require("express")
const app = express()
const mongoose = require('mongoose')
const homeRoot = require("./Routes/homeRoot")
const cors = require("cors")
const Pusher = require("pusher");
//middlewares
app.use(express.json())
app.use(cors())
app.use("/",homeRoot)

//listening
app.listen(5000, () => {
    console.log("helloo from server")
})

const pusher = new Pusher({
    appId: "1167344",
    key: "f45731e0c2be7967c268",
    secret: "6a70f38981039c8e0410",
    cluster: "eu",
    useTLS: true
});

//Db connection
mongoose.connect("mongodb+srv://ghassen:azerty@cluster0.agiog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {useCreateIndext: true, useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.once("open", () => {
    console.log("connected to DB")
    const msgCollection = mongoose.connection.collection("messages")
    const changeStream = msgCollection.watch()
    changeStream.on('change',(change)=>{
        if (change.operationType==='insert'){
            const messageDetails = change.fullDocument ;
            pusher.trigger('messages','inserted',{
                name:messageDetails.name ,
                message:messageDetails.messageText
            })
        }
    })
})
mongoose.connection.on("error", (err) => {
    console.log("not connected with error => ", err)
})
//