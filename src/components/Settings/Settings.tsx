import React, {ChangeEvent} from "react";
import s from './settings.module.css'
import {useTypedSelector} from "../../Redux/redux-store";
import {useDispatch} from "react-redux";
import {Button, TextField} from "@mui/material";
import {changeMaxValueAC, changeStartValueAC, setErrorAC, setValueAC} from "../../Redux/counter-reducer";


export const Settings = () => {


    const disableBtn = useTypedSelector<boolean>(state => state.counter.disableBtn)
    const maxValue = useTypedSelector<number>(state => state.counter.maxValue)
    const startValue = useTypedSelector<number>(state => state.counter.startValue)


    const dispatch = useDispatch()


    const setSettingsHandler = () => {
        dispatch(setValueAC(false, true, false))
        localStorage.setItem('Settings', JSON.stringify({'startValue': startValue, 'maxValue': maxValue}))
    }

    const onChangeMaxNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.valueAsNumber
        dispatch(changeMaxValueAC(value, true, false))
        dispatch(setErrorAC(false))
    }
    const onChangeStartNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.valueAsNumber
        dispatch(changeStartValueAC(value, true, false))
        dispatch(setErrorAC(false))
    }



    const buttonStyle = {
        backgroundColor: "#07575B", color: "#66A5AD", borderRadius: "20px",
        boxShadow: "0px 1px 5px 2px #07575B"
    }
//Посмотреть, почему не присваивается класс s.errValue
    const errValue = maxValue === startValue || startValue! > maxValue! || startValue! < 0
    return (
        <div className={s.container}>
            <div className={errValue? s.errValue: s.value}>
                <div className={s.maxInput}>
                <span>max value:
                    <TextField variant={"standard"}
                               color={ "primary"}
                               value={maxValue}
                               onChange={onChangeMaxNumberHandler}
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
                                    color={"primary"}
                                    value={startValue}
                                    onChange={onChangeStartNumberHandler}
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