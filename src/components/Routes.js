import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainApp from "./MainApp/MainApp";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import authContext  from "../context/AuthContextProvider";


function Routes(props) {
    const {loggedIn} = useContext(authContext)

    return (
        <div>
            <Router>
                <div className="App">
                    <Switch>
                        <Route path={"/"} exact component={loggedIn===true ? MainApp : Login}/>
                         <Route path={"/signUp"}  component={loggedIn === false ? SignUp : MainApp}/>
                         <Route path={"/Login"} component={loggedIn === false ? Login : MainApp}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default Routes;