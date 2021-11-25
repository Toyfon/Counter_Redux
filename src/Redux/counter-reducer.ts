import {ActionsType} from "./actions";


export const initialState = {
    value: 0 as number | string,
    startValue: 0,
    maxValue: 3,
    isDisabled: false,
    disableBtn: true,
    error: false
}
type initialStateType = typeof initialState


export const counterReducer = (state :initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {

        case "SET_INITIAL_VALUES":
            return {
                ...state,
                value: action.value,
                startValue: action.startValue,
                maxValue: action.maxValue
            }

        case 'CHANGE_COUNT':
            return {...state, value: action.value, error: action.error}
        case 'RESET_COUNT':
            return {...state, value: state.startValue}
        case 'CHANGE_MAX_VALUE':
            return {...state, maxValue: action.value, isDisabled: action.isDisabled, disableBtn: action.disableBtn, value:'enter values'}
        case 'CHANGE_START_VALUE':
            return {...state, startValue: action.value, isDisabled: action.isDisabled, disableBtn: action.disableBtn, value:'enter values '}
        case 'SET_VALUE':
            return {
                ...state,
                value: state.startValue, isDisabled: action.isDisabled,
                disableBtn: action.disableBtn, error: action.error
            }
        case 'SET_ERROR':
            return {
                ...state, error: action.error
            }
        default:
            return state
    }

}



