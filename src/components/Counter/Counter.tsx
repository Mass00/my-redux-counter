import React from 'react';
import {useSelector} from "react-redux";
import {storeType} from "../../Store/ReduxStore";
import {SettingsReducerStateType} from "../../Store/Reducers/SettingsReducer";

export const Counter = () => {
    const counter = useSelector<storeType,number>(state => state.counter)
    const {min} = useSelector<storeType,SettingsReducerStateType>(state => state.settings)
    return (
            <h1>{counter}</h1>
    );
};