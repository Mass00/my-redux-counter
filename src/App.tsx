import React from 'react';
import './App.css';
import {DisplayForm} from "./components/Counter/DisplayForm";
import {ButtonsForm} from "./components/Counter/ButtonsForm";
import {Settings} from "./components/Counter/Settings";
import {Counter} from "./components/Counter/Counter";
import {useSelector} from "react-redux";
import {storeType} from "./Store/ReduxStore";


function App() {
    const isEdit = useSelector<storeType,boolean>(state => state.settings.isEdit)
  return (
    <div className="App">
        <DisplayForm>
            {isEdit
            ? <Settings/>
            : <Counter/>
            }
        </DisplayForm>
        <ButtonsForm isEdit={isEdit}/>
    </div>
  );
}

export default App;
