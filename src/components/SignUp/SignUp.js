import React, {useState} from 'react';
import "./SignUp.css"
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from "@material-ui/core/IconButton";

function SignUp(props) {
    const [user, setUser] = useState({
        prenom: "",
        nom: "",
        email: "",
        mdp: "",
        confirmMdp: ""
    })
    const [mdpVisible, setmdpVisible] = useState(false)
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        
    }
    return (
        <div className="SignUp__container">
            <p>Enregistrez votre compte What's up</p>
            <h5>Vous avez déja un compte ? connexion</h5>
            <div className="form_container">
                <form onSubmit={e => handleSubmit(e)}>
                    <div>
                        <label>Prenom</label><input type="text" name="nom" placeholder="votre nom" value={user.nom}
                                                    onChange={(e) => handleChange(e)}/>
                    </div>
                    <div>
                        <label>Nom</label><input type="text" name="prenom" placeholder="votre prenom"
                                                 value={user.prenom} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>E-mail</label><input type="email" name="email" placeholder="votre e-mail"
                                                    value={user.email} onChange={handleChange}/>
                    </div>
                    <div className='password'>
                        <label>Mot de passe</label>

                        <input type={mdpVisible ? 'text' : "password"} className="tryin" name="mdp"
                               placeholder="votre mot de passe " value={user.mdp} onChange={handleChange}/>
                        <IconButton className="iconButton" onClick={() => setmdpVisible(!mdpVisible)}>
                            <VisibilityIcon/>
                        </IconButton>
                    </div>

                    <div>
                        <label>Confirmer votre mot de passe</label><input type="password"
                                                                          placeholder="confirmer le mot de passe "
                                                                          name="confirmMdp"
                                                                          value={user.confirmMdp}
                                                                          onChange={handleChange}/>
                    </div>
                    <button className="SignUp__signUpBtn" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;