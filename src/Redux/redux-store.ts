import {combineReducers, createStore, Store} from "redux";
import {counterReducer} from "./counter-reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";


export type AppStateType = ReturnType<typeof appState>

let appState = combineReducers({
    counter: counterReducer
})

let store: Store<AppStateType, any> = createStore(appState)

export const useTypedSelector: TypedUseSelectorHook<AppStateType> = useSelector;

export default store