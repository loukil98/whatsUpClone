import React, {useState} from 'react';
import "./SignUp.css"
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";

function SignUp(props) {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })
    const [mdpVisible, setmdpVisible] = useState(false)
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:5000/signUp",user)
            .then((response) => {
                props.history.push("/")
            })
            .catch(e => {
                console.log(e)
            })
    }
    return (
        <div className="SignUp__container">
            <p>Enregistrez votre compte What's up</p>
            <h5>Vous avez déja un compte ? connexion</h5>
            <div className="form_container">
                <form onSubmit={e => handleSubmit(e)}>
                    <div>
                        <label>Nom</label><input type="text" name="lastName" placeholder="votre nom" value={user.lastName}
                                                    onChange={(e) => handleChange(e)}/>
                    </div>
                    <div>
                        <label>Prenom</label><input type="text" name="firstName" placeholder="votre prenom"
                                                 value={user.firstName} onChange={handleChange}/>
                    </div>
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

                    <button className="SignUp__signUpBtn" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;