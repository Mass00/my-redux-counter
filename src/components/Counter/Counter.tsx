import React from 'react';
import {useSelector} from "react-redux";
import {storeType} from "../../Store/ReduxStore";

export const Counter = () => {
    const counter = useSelector<storeType,number>(state => state.counter)
    return (
            <h1>{counter}</h1>
    );
};