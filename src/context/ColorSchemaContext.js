import {createContext, useEffect, useState} from "react";

export const ColorSchemeContext = createContext(null);

export const ColorSchemeContextProvider = ({children}) => {

    const [colorScheme, setColorSchema] = useState({
        color: "#0000ff",
        bg: "#fff"
    });

    return (
        <ColorSchemeContext.Provider value={{colorScheme, setColorSchema}}>
            {children}
        </ColorSchemeContext.Provider>
    )
}