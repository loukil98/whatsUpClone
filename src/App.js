import './App.css';
import React from 'react'

import  {AuthContextProvider} from "./context/AuthContextProvider";
import Routes from "./components/Routes";

function App() {

    return (
        <AuthContextProvider>
            <Routes/>

        </AuthContextProvider>
    );
}

export default App;
