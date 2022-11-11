import React from 'react';
import st from './DisplayForm.module.css'
type CounterFormPropsType = {
    children: React.ReactNode
}
export const DisplayForm = ({children}:CounterFormPropsType) => {
    return (
        <div className={st.container}>
            {children}
        </div>
    );
};
