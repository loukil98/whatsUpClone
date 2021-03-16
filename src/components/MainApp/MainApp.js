import React, {useContext, useEffect} from 'react';
import Sidebar from "../Sidebar/Sidebar";
import Chat from "../Chat/Chat";
import './MainApp.css'
import Logout from "../Logout/Logout";
import authContext from '../../context/AuthContextProvider'
import {useHistory} from 'react-router-dom'

function MainApp(props) {
    const history = useHistory()
    const {loggedIn} = useContext(authContext)
    useEffect(()=>{
        !loggedIn && history.push('/login')
            },[])
    return (
        <div className="MainApp__body">
            <Sidebar/>
            <Chat/>
            <Logout/>
        </div>
    );
}

export default MainApp;
