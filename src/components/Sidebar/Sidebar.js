import React from 'react';
import './Sidebar.css'
import {Avatar, IconButton} from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import Room from "../Room/Room";

function Sidebar(props) {
    const rooms = [
        {name:"Loukil Ghassen",lastMessage:"yoo what's up ",avatar:"https://thumbs.dreamstime.com/z/homme-ic%C3%B4ne-d-avatar-utilisateur-signe-symbole-de-profil-vecteur-personne-%C3%A2%E2%82%AC-plat-%C2%AB-pour-des-actions-145781760.jpg"}
        ,{name:"Mabrouk Ali",lastMessage: "hello everyone",avatar: "https://image.freepik.com/vecteurs-libre/profil-avatar-homme-icone-ronde_24640-14044.jpg"},
        {name:"Bahloul Ahmed" , lastMessage: "hayya nemchiw" , avatar: "https://www.esen.tn/ePFE/instructor/avatar/avatar_enseignant_214.jpg"}
    ]
    const renderRooms = () => {
        return(
    rooms.map( room => {
        return (
            <Room name={room.name} lastMessage={room.lastMessage} avatar={room.avatar} />
        )
    })
        )}
    return (
        <div className="sideBar__container">
            <div className="sideBar__header">
                <Avatar src="https://www.esen.tn/ePFE/instructor/avatar/avatar_enseignant_214.jpg"/>
                <div className="sideBar__icons">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <MessageIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sideBar__searchBar">
                <div className="sideBar__search">
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div>
            <div>
                {renderRooms()}
            </div>

        </div>

    );
}

export default Sidebar;