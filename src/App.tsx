import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {useDispatch} from "react-redux";
import {setInitialValuesAC} from "./Redux/actions";
import {Container} from "@mui/material";


const App = () => {


    const dispatch = useDispatch()


    useEffect(() => {
        let initialValueAsString = localStorage.getItem('counterValue')
        let settingsAsString = localStorage.getItem('Settings')
        if (settingsAsString !== null && initialValueAsString !== null) {
            const initialValue = JSON.parse(initialValueAsString)
            const settings = JSON.parse(settingsAsString)
            dispatch(setInitialValuesAC(settings.startValue, settings.maxValue, initialValue))
        }

    }, [])

    return (
        <div className="Wrapper" >
            <div className="table">
                <Counter/>
            </div>
            <div>
                <Settings/>
            </div>
        </div>
    )
}

export default App;
