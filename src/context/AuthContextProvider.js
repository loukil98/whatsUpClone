import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";

const AuthContext = createContext()

function AuthContextProvider(props) {

    const [loggedIn,setLoggedIn] = useState(undefined)

    const getLoggedIn = async () => {
        axios.get("http://localhost:5000/loggedIn",{withCredentials:true})
            .then((response)=>{
                setLoggedIn(response.data)
            })
    }

    useEffect(()=>{
        getLoggedIn()
    },[])
    return (
        <AuthContext.Provider value={{loggedIn,getLoggedIn}}>
            {props.children}
        </AuthContext.Provider>
    );
}
export default AuthContext
export {AuthContextProvider};