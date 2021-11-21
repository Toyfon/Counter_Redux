import React from "react";
import s from './settings.module.css'
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {useTypedSelector} from "../../Redux/redux-store";
import {useDispatch} from "react-redux";
import {changeMaxValueAC, changeStartValueAC, setErrorAC, setValueAC} from "../../Redux/actions";




export const Settings = () => {


    const disableBtn = useTypedSelector<boolean>(state => state.counter.disableBtn)
    const maxValue = useTypedSelector<number>(state => state.counter.maxValue)
    const startValue = useTypedSelector<number>(state => state.counter.startValue)
    const error = useTypedSelector<boolean>(state => state.counter.error)

    const dispatch = useDispatch()


    const callBackHandler = () => {
        dispatch(setValueAC(false, true, false))
    }

    const onChangeMaxNumberHandler = (value: number) => {
        dispatch(changeMaxValueAC(value, true, false))
        dispatch(setErrorAC(false))

    }
    const onChangeStartNumberHandler = (value: number) => {
        dispatch(changeStartValueAC(value, true, false))
        dispatch(setErrorAC(false))
    }


    return (
        <div className={s.container}>
            <div className={s.value}>
                <div className={s.maxInput}>
                <span>max value:
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
                <Button className={s.btn} onClick={callBackHandler} name={'Set'} disabled={disableBtn}/>
            </div>
        </div>
    )
}