import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "../Settings/settings.module.css"


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputPropsType = DefaultInputPropsType & {
    value: number
    callBack: (value: number) => void
    error?: boolean
    maxValue?: number
    startValue?: number
}

export const Input: React.FC<InputPropsType> = ({
                                                    value, callBack,
                                                    error, maxValue, startValue, ...props
                                                }: InputPropsType) => {


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.valueAsNumber
        callBack(value)
    }

    const finalInputClass = maxValue === startValue || startValue! < 0 || startValue! > maxValue! ? s.inputError : ''
    return (
        <input className={finalInputClass}
               type="number"
               value={value}
               onChange={onChangeHandler}
        />
    )
}

