import './App.css';
import React from 'react'

import {AuthContextProvider} from "./context/AuthContextProvider";
import Routes from "./components/Routes";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {

    return (
        <Provider store={store}>
            <AuthContextProvider>
                <Routes/>
            </AuthContextProvider>
        </Provider>
    );
}

export default App;
