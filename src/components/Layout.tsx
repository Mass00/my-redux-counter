import React from 'react';
import {DisplayForm} from "./Counter/DisplayForm";
import {Settings} from "./Counter/Settings";
import {Counter} from "./Counter/Counter";
import {ButtonsForm} from "./Counter/ButtonsForm";
import {useSelector} from "react-redux";
import {storeType} from "../Store/ReduxStore";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    const isEdit = useSelector<storeType,boolean>(state => state.settings.isEdit)
    console.log(isEdit)
    return (
        <div>
            <DisplayForm>
                <Outlet/>
            </DisplayForm>
            <ButtonsForm isEdit={isEdit}/>
        </div>
    );
};