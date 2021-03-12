import React, {useEffect} from 'react';
import axios from "axios";

function Logout(props) {
    useEffect(()=>{
    axios.get("http://localhost:5000/logout",{withCredentials: true})
        .then((response) => {
            props.history.push('/login')
        })
    },[])
    return (
        <div></div>
    );
}

export default Logout;