import {combineReducers, legacy_createStore as createStore} from 'redux';
import {SettingsReducer} from "./Reducers/SettingsReducer";
import {CounterReducer} from "./Reducers/CounterReducer";

const rootReducer = combineReducers({
    settings: SettingsReducer,
    counter: CounterReducer
})

export const store = createStore(rootReducer)
export type storeType = ReturnType<typeof rootReducer>