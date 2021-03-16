const mongoose = require("mongoose")
const messageSchema = mongoose.Schema({
    sender: {
        type : mongoose.Schema.Types.ObjectId ,
        ref:"users",
        required:true
    },
    messageText: {
        type : String ,
        required: true
    },
    messageDate: {
        type:String ,
        required:true
    },
    received: {
        type:Boolean ,
        required:true
    }
})
module.exports = mongoose.model("messages",messageSchema)