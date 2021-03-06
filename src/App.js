import './App.css';
import React from 'react'
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {

    return (
        <div className="App">
            <div className="app_body">
                <Sidebar/>
                <Chat/>
            </div>
        </div>
    );
}

export default App;
