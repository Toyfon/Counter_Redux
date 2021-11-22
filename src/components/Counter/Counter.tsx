import React, {useEffect} from "react";
import s from "./counter.module.css"
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../Redux/redux-store";
import {changeCountAC, resetCountAC, setErrorAC} from "../../Redux/actions";
import {Button} from "@mui/material";


export const Counter = () => {

    const value = useTypedSelector<number>(state => state.counter.value)
    const startValue = useTypedSelector<number>(state => state.counter.startValue)
    const maxValue = useTypedSelector<number>(state => state.counter.maxValue)
    const error = useTypedSelector<boolean>(state => state.counter.error)
    const isDisabled = useTypedSelector<boolean>(state => state.counter.isDisabled)


    const dispatch = useDispatch()


    const incrementValue = () => {
        if (!isNaN(+value) && value < maxValue) {
            dispatch((changeCountAC(+value + 1, false)))
        }
    }
    const resetValue = () => {
        dispatch((resetCountAC()))
    }


    const buttonStyle = {
        backgroundColor: "darkturquoise", color: "white", borderRadius: "20px"
    }

    useEffect(() => {

        if (value === maxValue) {
            dispatch(setErrorAC(true))
        } else {
            dispatch(setErrorAC(false))
        }
    }, [value])
    console.log(error)

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])


    return (
        <div className={s.container}>
            <div className={s.value}>
                <h1 className={error ? s.redNumber : ""}>
                    {
                        maxValue === startValue || startValue < 0 || startValue > maxValue
                            ? <span style={{color: "red", fontSize: "30px"}}>"Incorrect value"</span>
                            : value
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
                {/*<ButtonName className={s.btn} disabled={isDisabled ? isDisabled : value >= maxValue}
                            onClick={incrementValue}
                            name={"Inc"}/>*/}
                {/* <ButtonName className={s.btn} disabled={isDisabled ? isDisabled : value === startValue} onClick={resetValue}
                            name={"Reset"}/>*/}
            </div>
        </div>
    )
}