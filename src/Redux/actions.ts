export const CHANGE_COUNT = 'CHANGE_COUNT'
export const RESET_COUNT = 'RESET_COUNT'
export const CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE'
export const CHANGE_START_VALUE = 'CHANGE_START_VALUE'
export const SET_VALUE = 'SET_VALUE'
export const SET_ERROR = 'SET_ERROR'


export type ActionsType = ReturnType<typeof changeCountAC> |
    ReturnType<typeof resetCountAC> |
    ReturnType<typeof changeMaxValueAC> |
    ReturnType<typeof changeStartValueAC> |
    ReturnType<typeof setValueAC> |
    ReturnType<typeof setErrorAC> |
    ReturnType<typeof setInitialValuesAC>



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

