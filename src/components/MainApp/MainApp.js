import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import Chat from "../Chat/Chat";
import './MainApp.css'


function MainApp(props) {
    return (
        <div className="MainApp__body">
            <Sidebar/>
            <Chat/>
        </div>
    );
}

export default MainApp;
