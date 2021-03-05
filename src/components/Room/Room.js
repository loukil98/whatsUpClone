import React from 'react';
import {Avatar} from "@material-ui/core";
import "./Room.css"

function Room(props) {
    return (
        <div className="Room__container">
            <Avatar src={props.avatar}/>
            <div className="Room__textContent">
                <h3>{props.name}</h3>
                <p>{props.lastMessage}</p>
            </div>

        </div>
    );
}

export default Room;
