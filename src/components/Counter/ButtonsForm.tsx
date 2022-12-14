import React, {memo} from 'react';
import st from './ButtonsForm.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setEditAC, SettingsReducerStateType} from "../../Store/Reducers/SettingsReducer";
import {incCounterAC, resCounterAC} from "../../Store/Reducers/CounterReducer";
import {storeType} from "../../Store/ReduxStore";
import {useNavigate} from "react-router-dom";
type ButtonsFormPropsType = {
    isEdit: boolean
}
export const ButtonsForm = memo(({isEdit}: ButtonsFormPropsType) => {
    const dispatch = useDispatch()
    const counter = useSelector<storeType,number>(state => state.counter)
    const {min,max} = useSelector<storeType,SettingsReducerStateType>(state => state.settings)
    const error = min >= max || min < 0 || max < 0
    const navigate = useNavigate()
    const onClickSetEditHandler = () => {
        isEdit ? navigate("counter") : navigate("settings")
        dispatch(setEditAC(!isEdit))
        dispatch(resCounterAC(min))
    }
    const onClickIncCounterHandler = () => dispatch(incCounterAC())
    const onClickResCounterHandler = () => dispatch(resCounterAC(min))
    return (
        <div className={st.container}>
            <button
                disabled={isEdit || counter >= max}
                onClick={onClickIncCounterHandler}>Inc</button>
            <button
                disabled={isEdit || counter < max}
                onClick={onClickResCounterHandler}>Res</button>
            <button
                disabled={error}
                onClick={onClickSetEditHandler}>Setting</button>
        </div>
    );
})