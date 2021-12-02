import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";


export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    counter: counterReducer
})



let store = createStore(rootReducer)
export type AppStoreType= typeof store


export const useTypedSelector: TypedUseSelectorHook<AppStateType> = useSelector;

export default store