import React from 'react';
import './App.css';
import {DisplayForm} from "./components/Counter/DisplayForm";
import {ButtonsForm} from "./components/Counter/ButtonsForm";
import {Settings} from "./components/Counter/Settings";
import {Counter} from "./components/Counter/Counter";
import {useSelector} from "react-redux";
import {storeType} from "./Store/ReduxStore";
import {Navigate, Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";


function App() {

  return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route path={"settings"} element={<Settings/>}/>
                <Route path={"counter"} element={<Counter/>}/>
                <Route index element={<Navigate to={"counter"} replace/>}/>
            </Route>
        </Routes>
  );
}

export default App;
