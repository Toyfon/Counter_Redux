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
type InitialStateType = typeof initialState


export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case "SET_INITIAL_VALUES":
            return {
                ...state, ...action.payload
            }

        case 'CHANGE_COUNT':
            return {...state, ...action.payload}
        case 'RESET_COUNT':
            return {...state, value: state.startValue}
        case 'CHANGE_MAX_VALUE':
            return {
                ...state, ...action.payload,
                value: 'enter values'
                /*  maxValue: action.value,
                  isDisabled: action.isDisabled,
                  disableBtn: action.disableBtn,*/

            }
        case 'CHANGE_START_VALUE':
            return {
                ...state, ...action.payload,
                value: 'enter values '
                /*       startValue: action.value,
                       isDisabled: action.isDisabled,
                       disableBtn: action.disableBtn,*/
            }
        case 'SET_VALUE':
            return {
                ...state,
                value: state.startValue, ...action.payload
             /*   isDisabled: action.isDisabled,
                disableBtn: action.disableBtn,
                error: action.error*/
            }
        case 'SET_ERROR':
            return {
                ...state, ...action.payload
            }
        default:
            return state
    }

}


export const changeCountAC = (value: number, error: boolean) => ({
    type: 'CHANGE_COUNT',
    payload: {value, error}
} as const)
export const resetCountAC = () => ({type: 'RESET_COUNT'} as const)
export const changeMaxValueAC = (maxValue: number, isDisabled: boolean, disableBtn: boolean) => ({
    type: 'CHANGE_MAX_VALUE',
    payload: {
        maxValue,
        isDisabled,
        disableBtn
    }
} as const)
export const changeStartValueAC = (startValue: number, isDisabled: boolean, disableBtn: boolean) => (
    {
        type: 'CHANGE_START_VALUE',
        payload: {
            startValue,
            isDisabled,
            disableBtn
        }

    } as const)
export const setValueAC = (isDisabled: boolean, disableBtn: boolean, error: boolean) => ({
    type: 'SET_VALUE', payload: {
        isDisabled,
        disableBtn,
        error,
    }
} as const)
export const setErrorAC = (error: boolean) => ({type: 'SET_ERROR', payload: {error}} as const)
export const setInitialValuesAC = (startValue: number, maxValue: number, value: number) => ({
    type: 'SET_INITIAL_VALUES',
    payload: {
        startValue,
        maxValue,
        value
    }
} as const)



