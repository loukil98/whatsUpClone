import React, {useContext, useEffect} from 'react';
import axios from "axios";
import {useHistory} from 'react-router-dom'
import authContext  from "../../context/AuthContextProvider";

function Logout(props) {
    const {getLoggedIn} = useContext(authContext)
    const history = useHistory()
    const  logOut =  () => {
        axios.get("http://localhost:5000/logout",{withCredentials: true})
            .then(async (response) => {
                await getLoggedIn()
                history.push('/login')
            })

    }
    return (
        <div>
            <button onClick={()=>{logOut()}}>
                Deconnexion
            </button>
        </div>
    );
}

export default Logout;