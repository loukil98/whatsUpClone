import './App.css';
import React from 'react'
import MainApp from "./components/MainApp/MainApp";
import SignUp from "./components/SignUp/SignUp";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";


function App() {

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path={"/"} exact component={MainApp}/>
                    <Route path={"/signUp"} component={SignUp}/>
                    <Route path={"/Login"} component={Login}/>
                    <Route path={"/logout"} component={Logout}/>
                </Switch>
            </div>
        </Router>
    );
}
export default App;
