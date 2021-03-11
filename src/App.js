import './App.css';
import React from 'react'
import MainApp from "./components/MainApp/MainApp";
import SignUp from "./components/SignUp/SignUp";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"


function App() {

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path={"/"} exact component={MainApp}/>
                    <Route path={"/signUp"} component={SignUp}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
