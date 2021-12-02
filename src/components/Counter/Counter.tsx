import React, {useEffect} from "react";
import s from "./counter.module.css"
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../Redux/redux-store";

import {Button} from "@mui/material";
import {changeCountAC, resetCountAC, setErrorAC} from "../../Redux/counter-reducer";


export const Counter = () => {

    const value = useTypedSelector<number| string>(state => state.counter.value)
    const startValue = useTypedSelector<number>(state => state.counter.startValue)
    const maxValue = useTypedSelector<number>(state => state.counter.maxValue)
    const error = useTypedSelector<boolean>(state => state.counter.error)
    const isDisabled = useTypedSelector<boolean>(state => state.counter.isDisabled)


    const dispatch = useDispatch()


    const incrementValue = () => {
        if (!isNaN(+value) && value < maxValue) {
            dispatch((changeCountAC(+value + 1, false)))
            localStorage.setItem('counterValue', JSON.stringify(+value + 1))
        }
    }
    const resetValue = () => {
        dispatch((resetCountAC()))
    }


    const buttonStyle = {
        backgroundColor: "#07575B", color: "#66A5AD", borderRadius: "20px",
        boxShadow: "0px 1px 5px 2px #07575B"
    }

    useEffect(() => {
        if (value === maxValue) {
            dispatch(setErrorAC(true))
        } else {
            dispatch(setErrorAC(false))
        }
    }, [value])


    const errorValues =  maxValue === startValue || startValue < 0 || startValue > maxValue

    return (
        <div className={s.container}>
            <div className={ error ? s.errValue :s.value}>
                <h1 >
                    {
                        errorValues
                            ? <span  style={{color: "red", fontSize: "30px", fontWeight:'lighter', }}>Incorrect value</span>
                            :  value
                    }
                </h1>
            </div>
            <div className={s.buttons}>
                <Button
                    sx={buttonStyle}
                    variant="contained"
                    color="primary"
                    size="small"
                    disabled={isDisabled ? isDisabled : value >= maxValue}
                    onClick={incrementValue}>Inc</Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={buttonStyle}
                    disabled={isDisabled ? isDisabled : value === startValue}
                    onClick={resetValue}>Reset</Button>
            </div>
        </div>
    )
}

