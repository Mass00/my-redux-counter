import React, {useState} from 'react';
import st from './Settings.module.css'
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../../Store/ReduxStore";
import {setMaxAC, setMinAC, SettingsReducerStateType} from "../../Store/Reducers/SettingsReducer";
export const Settings = () => {
    const {min,max} = useSelector<storeType,SettingsReducerStateType>(state => state.settings)
    const dispatch = useDispatch()
    const onChangeSetMaxHandler = (value: number) => {
        dispatch(setMaxAC(value))
    }
    const onChangeSetMinHandler = (value: number) => {
        dispatch(setMinAC(value))
    }
    const error = min >= max || min < 0 || max < 0
    return (
        <div>
            <div className={st.minMaxContainer}>
                <span>MIN: </span>
                <input
                    style={{borderColor: error ? "red" : "black", outline: 'none'}}
                    type={"number"}
                    value={min}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChangeSetMinHandler(e.currentTarget.valueAsNumber)}
                />
            </div>
            <div className={st.minMaxContainer}>
                <span>MAX: </span>
                <input
                    style={{borderColor: error ? "red" : "black", outline: 'none'}}
                    type={"number"}
                    value={max}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChangeSetMaxHandler(e.currentTarget.valueAsNumber)}
                />
            </div>
        </div>
    );
};
