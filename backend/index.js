const express = require("express")
const app = express()
const mongoose = require('mongoose')
const homeRoot = require("./Routes/homeRoot")
const cors = require("cors")
const http = require('http').Server(app);
const io = require('socket.io')(http, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
        }
    }
);


//listening
http.listen(5000, () => {
    console.log("helloo from server")
})


//middlewares
app.use(express.json())
app.use(cors())
app.use("/", homeRoot)


//socket
io.on('connection', (socket) => {
    console.log('a user connected',socket.id);
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('msgSent',(data)=>{
        socket.broadcast.emit('msgSent',data)
    })
});


//Db connection
mongoose.connect("mongodb+srv://ghassen:azerty@cluster0.agiog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {useCreateIndext: true, useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.once("open", () => {
    console.log("connected to DB")

})
mongoose.connection.on("error", (err) => {
    console.log("not connected with error => ", err)
})
