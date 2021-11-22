

type StateType = {
    min: number
    max: number
}


export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state)
    localStorage.setItem(key, stateAsString)
}
export function restoreState<T>(key: string, defaultState: T) {
    let state = defaultState
    const stateAsString = localStorage.getItem(key)
    if (stateAsString !== null) state = JSON.parse(stateAsString) as T
    return state
}



/*saveState<StateType>('Settings', {min:startValue,max:maxValue})*/

const state: StateType = restoreState<StateType>('test', {min: 0, max: 0})