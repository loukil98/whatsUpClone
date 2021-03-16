import React, {useEffect, useState} from 'react';
import './Messages.css'
import axios from "axios";

function Messages(props) {

    return (

        <div className={`messages__container ${props.received ? "chat__received_container" : ""}`}>
            <h5>{props.sender? props.sender : "name"}</h5>
            <div className={`messages__body ${props.received ? "chat__received" : ""}`}>
                <p>{props.messageText}</p>
                <p className="messages__date">{props.messageDate}</p>
            </div>
        </div>

    );
}

export default Messages;