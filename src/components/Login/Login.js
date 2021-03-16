import React, {useContext, useEffect, useState} from 'react';
import "./Login.css"
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import authContext  from "../../context/AuthContextProvider";

function Login(props) {
    const {getLoggedIn} = useContext(authContext)
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const [mdpVisible, setmdpVisible] = useState(false)


    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:5000/login",user,{withCredentials: true})
            .then(async (res) => {
                await getLoggedIn()
                props.history.push('/')
            })
            .catch(e=>{
                console.log(e)
            })


    }
    return (
        <div className="Login__container">
            <p>Welcome Home again </p>
            <h5>Connexion</h5>
            <div className="form_container">
                <form onSubmit={e => handleSubmit(e)}>
                    <div>
                        <label>E-mail</label><input type="email" name="email" placeholder="votre e-mail"
                                                    value={user.email} onChange={handleChange}/>
                    </div>
                    <div className='password'>
                        <label>Mot de passe</label>
                        <input type={mdpVisible ? 'text' : "password"} className="tryin" name="password"
                               placeholder="votre mot de passe " value={user.password} onChange={handleChange}/>
                        <IconButton className="iconButton" onClick={() => setmdpVisible(!mdpVisible)}>
                            <VisibilityIcon/>
                        </IconButton>
                    </div>

                    <button className="Login__signUpBtn" type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default Login;;