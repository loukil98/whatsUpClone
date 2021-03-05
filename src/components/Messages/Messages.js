import React from 'react';
import './Messages.css'
function Messages(props) {
    return (
        <div className={`messages__container ${props.received ? "chat__received_container" : ""}`}>
            <h5>{props.name}</h5>
            <div className={`messages__body ${props.received ? "chat__received" : ""}`}>
                <p>{props.messageText}</p>
                <p className="messages__date">{props.messageDate}</p>
            </div>
        </div>
    );
}

export default Messages;