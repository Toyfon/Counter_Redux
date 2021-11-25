import React, {ChangeEvent} from "react";
import s from './settings.module.css'
import {useTypedSelector} from "../../Redux/redux-store";
import {useDispatch} from "react-redux";
import {changeMaxValueAC, changeStartValueAC, setErrorAC, setValueAC} from "../../Redux/actions";
import {Button, TextField} from "@mui/material";


export const Settings = () => {


    const disableBtn = useTypedSelector<boolean>(state => state.counter.disableBtn)
    const maxValue = useTypedSelector<number>(state => state.counter.maxValue)
    const startValue = useTypedSelector<number>(state => state.counter.startValue)
    const error = useTypedSelector<boolean>(state => state.counter.error)

    const dispatch = useDispatch()


    const setSettingsHandler = () => {
        dispatch(setValueAC(false, true, false))
        localStorage.setItem('Settings', JSON.stringify({'startValue': startValue, 'maxValue': maxValue}))
    }

    const onChangeMaxNumberHandler = (value: number) => {
        dispatch(changeMaxValueAC(value, true, false))
        dispatch(setErrorAC(false))
    }
    const onChangeStartNumberHandler = (value: number) => {
        dispatch(changeStartValueAC(value, true, false))
        dispatch(setErrorAC(false))
    }

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.valueAsNumber
        onChangeMaxNumberHandler(value)
    }
    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.valueAsNumber
        onChangeStartNumberHandler(value)
    }


    const buttonStyle = {
        backgroundColor: "#07575B", color: "#66A5AD", borderRadius: "20px",
        boxShadow: "0px 1px 5px 2px #07575B"
    }

    return (
        <div className={s.container}>
            <div className={ s.value}>
                <div className={s.maxInput}>
                <span>max value:
                    <TextField variant={"standard"}
                               color={maxValue === startValue || startValue! > maxValue! ? "error" : "primary"}
                               value={maxValue}
                               onChange={onChangeHandlerMax}
                               type={"number"}
                               sx={{
                                   input: {
                                       width: "100px",
                                       height: "15px"
                                   }
                               }}
                    />

                </span>

                </div>
                <div className={s.minInput}>
                    <span>start value:
                         <TextField variant={"standard"}
                                    color={maxValue === startValue || startValue! < 0 || startValue! > maxValue! ? "error" : "primary"}
                                    value={startValue}
                                    onChange={onChangeHandlerStart}
                                    type={"number"}
                                    sx={{
                                        input: {
                                            width: "100px",
                                            height: "15px"
                                        }
                                    }}
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
            </div>
        </div>
    )
}