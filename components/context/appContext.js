import React, { useState } from 'react';

export const MyContext = React.createContext();
export function MyProviderConText(props) {
    const [ tabs, changeTab ] = useState({})
    return (
        <MyContext.Provider value={{}}>
            {props.children}
        </MyContext.Provider>
    );
}