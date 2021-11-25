export type ActionsType = ReturnType<typeof changeCountAC> |
    ReturnType<typeof resetCountAC> |
    ReturnType<typeof changeMaxValueAC> |
    ReturnType<typeof changeStartValueAC> |
    ReturnType<typeof setValueAC> |
    ReturnType<typeof setErrorAC> |
    ReturnType<typeof setInitialValuesAC>


export const initialState = {
    value: 0 as number | string,
    startValue: 0,
    maxValue: 3,
    isDisabled: false,
    disableBtn: true,
    error: false
}
type initialStateType = typeof initialState


export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
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
            return {
                ...state,
                maxValue: action.value,
                isDisabled: action.isDisabled,
                disableBtn: action.disableBtn,
                value: 'enter values'
            }
        case 'CHANGE_START_VALUE':
            return {
                ...state,
                startValue: action.value,
                isDisabled: action.isDisabled,
                disableBtn: action.disableBtn,
                value: 'enter values '
            }
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


export const changeCountAC = (value: number, error: boolean) => ({type: 'CHANGE_COUNT', value, error} as const)
export const resetCountAC = () => ({type: 'RESET_COUNT'} as const)
export const changeMaxValueAC = (value: number, isDisabled: boolean, disableBtn: boolean) => (
    {
        type: 'CHANGE_MAX_VALUE',
        value, isDisabled, disableBtn
    } as const)
export const changeStartValueAC = (value: number, isDisabled: boolean, disableBtn: boolean) => (
    {
        type: 'CHANGE_START_VALUE',
        value, isDisabled, disableBtn
    } as const)
export const setValueAC = (isDisabled: boolean, disableBtn: boolean, error: boolean) => ({
    type: 'SET_VALUE',
    isDisabled, disableBtn, error,
} as const)
export const setErrorAC = (error: boolean) => ({type: 'SET_ERROR', error} as const)
export const setInitialValuesAC = (startValue: number, maxValue: number, value: number) => ({
    type: 'SET_INITIAL_VALUES',
    startValue,
    maxValue,
    value
} as const)



