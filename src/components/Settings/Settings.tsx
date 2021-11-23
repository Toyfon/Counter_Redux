import React from "react";
import s from './settings.module.css'
import {Input} from "../Input/Input";
import {useTypedSelector} from "../../Redux/redux-store";
import {useDispatch} from "react-redux";
import {changeMaxValueAC, changeStartValueAC, setErrorAC, setValueAC} from "../../Redux/actions";
import {Button} from "@mui/material";


export const Settings = () => {

    const disableBtn = useTypedSelector<boolean>(state => state.counter.disableBtn)
    const maxValue = useTypedSelector<number>(state => state.counter.maxValue)
    const startValue = useTypedSelector<number>(state => state.counter.startValue)
    const error = useTypedSelector<boolean>(state => state.counter.error)

    const dispatch = useDispatch()


    const setSettingsHandler = () => {
        dispatch(setValueAC(false, true, false))
        localStorage.setItem('Settings', JSON.stringify({ 'startValue':startValue,'maxValue':maxValue}))
        /*localStorage.setItem('startValue', JSON.stringify(startValue))*/
    }

    const onChangeMaxNumberHandler = (value: number) => {
        dispatch(changeMaxValueAC(value, true, false))
        dispatch(setErrorAC(false))
    }
    const onChangeStartNumberHandler = (value: number) => {
        dispatch(changeStartValueAC(value, true, false))
        dispatch(setErrorAC(false))
    }
    const buttonStyle = {
        backgroundColor: "#C4DFE6", color: "white", borderRadius: "20px"
    }


    return (
        <div className={s.container}>
            <div className={s.value}>
                <div className={s.maxInput}>
                <span>max value:
                   {/* <TextField  type="number" value={maxValue} onChange={(e)=>onChangeMaxNumberHandler(+e.currentTarget.value)}  error={error}/>*/}
                    <Input value={maxValue}
                           callBack={onChangeMaxNumberHandler}
                           error={error}
                           maxValue={maxValue}
                           startValue={startValue}/>
                </span>

                </div>
                <div className={s.minInput}>
                    <span>start value:
                       <Input value={startValue}
                              callBack={onChangeStartNumberHandler}
                              error={error}
                              maxValue={maxValue}
                              startValue={startValue}
                       />
                </span>
                </div>
            </div>
            <div className={s.buttons}>
                <Button variant="contained"
                        color="primary"
                        size="small"
                        className={s.btn} disabled={disableBtn}
                        sx={buttonStyle}
                        onClick={setSettingsHandler}>Set</Button>
                {/*    <ButtonName className={s.btn} onClick={callBackHandler} name={'Set'} disabled={disableBtn}/>*/}
            </div>
        </div>
    )
}