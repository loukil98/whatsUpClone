import React from 'react';
import './Chat.css'
import {Avatar, IconButton} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Messages from "../Messages/Messages";
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import MicIcon from '@material-ui/icons/Mic';

function Chat(props) {
    const messages = [
        {name: "Loukil Ghassen", messageText: "Hey guys", messageDate: new Date().toDateString(), received: false},
        {name: "Bahloul Ahmed", messageText: "ya Rojlaa", messageDate: new Date().toDateString(), received: true},


    ]
    const renderMessages = () => {
        return (
            messages.map((message) => {
                return (
                    <Messages name={message.name} messageText={message.messageText} messageDate={message.messageDate}
                              received={message.received}/>
                )

            })
        )
    }
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
            </div>
            <div className="chat__footer">
                <IconButton>
                    <SentimentSatisfiedIcon/>
                </IconButton>
                <form>
                    <input type="text" placeholder="type a message"/>
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