import {counterReducer, initialState} from "./counter-reducer";

let state: typeof initialState

beforeEach(() => {
    state =  {
        value: 0,
        error: false,
        disableBtn:true,
        startValue:0,
        maxValue:5,
        isDisabled:false
    }
})

test('reducer should be  change value', () => {
    //action
const newState = counterReducer(state, {type:'CHANGE_COUNT', payload:{value: 1, error: false}})
expect(newState.value).toBe(1)
expect(newState.error).toBe(false)
})


test('reducer should reset value', () => {
    //action
    const newState = counterReducer(state, {type:'RESET_COUNT'})
    expect(newState.value).toBe(0)
})


test('reducer should change maxValue', () => {
    //action
    const newState = counterReducer(state, {type:'CHANGE_MAX_VALUE',payload:{value: 10,disableBtn: true,isDisabled: false} })
    expect(newState.maxValue).toBe(10)
    expect(newState.disableBtn).toBe(true)
    expect(newState.isDisabled).toBe(false)
})


test('reducer should change startValue', () => {
    //action
    const newState = counterReducer(state, {type:'CHANGE_START_VALUE',payload:{value: 5,disableBtn: true, isDisabled: false}})

    expect(newState.startValue).toBe(5)
    expect(newState.disableBtn).toBe(true)
    expect(newState.isDisabled).toBe(false)
})


test('reducer should disable button, when click "set" button', () => {
    //action
    const newState = counterReducer(state, {type:'SET_VALUE',payload:{disableBtn: true, isDisabled: false, error: false} })
    expect(newState.disableBtn).toBe(true)
    expect(newState.isDisabled).toBe(false)
    expect(newState.error).toBe(false)
})


test('reducer should set error, when some action will take place', () => {
    //action
    const newState = counterReducer(state, {type:'SET_ERROR', payload:{error: true }})
    expect(newState.error).toBe(true)
})
