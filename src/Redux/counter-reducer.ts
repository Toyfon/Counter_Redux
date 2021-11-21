import {
    ActionsType,
    CHANGE_COUNT,
    CHANGE_MAX_VALUE,
    CHANGE_START_VALUE,
    RESET_COUNT,
    SET_ERROR,
    SET_VALUE
} from "./actions";


export type initialStateType = {
    value: number
    startValue: number
    maxValue: number
    isDisabled: boolean
    error: boolean
    disableBtn: boolean
}

export const initialState: initialStateType = {
    value: 0,
    startValue: 0,
    maxValue: 5,
    isDisabled: false,
    disableBtn: true,
    error: false
}


export const counterReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case CHANGE_COUNT:
            return {...state, value: action.value, error: action.error}
        case RESET_COUNT:
            return {...state, value: state.startValue, error: state.error}
        case CHANGE_MAX_VALUE:
            return {...state, maxValue: action.value, isDisabled: action.isDisabled, disableBtn: action.disableBtn}
        case CHANGE_START_VALUE:
            return {...state, startValue: action.value, isDisabled: action.isDisabled, disableBtn: action.disableBtn}
        case SET_VALUE:
            return {
                ...state,
                value: state.startValue, isDisabled: action.isDisabled,
                disableBtn: action.disableBtn, error: action.error
            }
        case SET_ERROR:
            return {
                ...state, error: action.error
            }
        default:
            return state
    }

}



