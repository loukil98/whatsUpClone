import React, {useEffect, useRef, useState} from 'react';
import './Chat.css'
import {Avatar, IconButton} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Messages from "../Messages/Messages";
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import MicIcon from '@material-ui/icons/Mic';
import axios from 'axios';
import io from "socket.io-client";

const socket = io('http://localhost:5000/', {
    transports: ["websocket", "polling"]
})

function Chat(props) {
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState("")
    const dummyDiv = useRef()
    useEffect(() => {
        axios.get("http://localhost:5000/",{withCredentials: true})
            .then((res) => {
                setMessages(res.data)
                dummyDiv.current.scrollIntoView()

            })
            .catch((err) => {
                console.log("an error occured ", err)
            })


        return () => socket.disconnect();


    }, [])
    useEffect(() => {
        dummyDiv.current.scrollIntoView()
    }, [messages])
    const renderMessages = () => {
        return (

            messages.map((message) => {
                return (
                    <Messages key={message._id} name={message.name} messageText={message.messageText}
                              messageDate={message.messageDate}
                              received={message.received}/>
                )

            })
        )
    }
    const sendMessage = (e) => {
        e.preventDefault()
        const message = {
            name: "Bahloul Ahmed",
            messageText: input,
            messageDate: new Date().toUTCString(),
            received: true
        }
        axios.post("http://localhost:5000/", message)
            .then(res => {
                setMessages([...messages, res.data])
                setInput('')
                dummyDiv.current.scrollIntoView({behavior: "smooth"})
                socket.emit('msgSent', res.data)
            })
            .catch(e => {
                console.log(e)
            })
    }
    socket.on('msgSent', (data) => {
        setMessages([...messages, data])
    })

    return (
        <div className="chat__container">
            <div className="chat__Header">
                <div className="chat__Header_Left">
                    <Avatar
                        src="https://image.freepik.com/vecteurs-libre/profil-avatar-homme-icone-ronde_24640-14044.jpg"/>
                    <div className="chat__Header_Text">
                        <h3>Room Name</h3>
                        <p className="chat__header_date">last seen {new Date().toDateString()}</p>
                    </div>
                </div>
                <div>
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="chat__Body">
                {renderMessages()}
                <div ref={dummyDiv}></div>
            </div>
            <div className="chat__footer">
                <IconButton>
                    <SentimentSatisfiedIcon/>
                </IconButton>
                <form onSubmit={(e) => sendMessage(e)}>
                    <input type="text" placeholder="type a message" value={input}
                           onChange={(e) => setInput(e.target.value)}/>
                    <button type="submit"></button>
                </form>
                <IconButton>
                    <MicIcon/>
                </IconButton>
            </div>
        </div>
    );
}

export default Chat;