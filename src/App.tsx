import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";


const App = () => {

    return (
        <div className="Wrapper">

            <div className="table">
                <Counter/>
            </div>
            <div className="settings">
                <Settings/>
            </div>
        </div>
    )
}

export default App;
