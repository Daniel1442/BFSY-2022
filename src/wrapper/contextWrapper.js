import {useState} from "react";
import {ColorSchemaContext} from "../context/ColorSchemaContext";

export default props => {
        const [colorScheme, setColorScheme] = useState('');

        const changeColor = () => {
            setColorScheme(colorScheme => colorScheme)
        }

    return (
        <ColorSchemaContext.Provider value={{colorScheme, changeColor}}>
            {props.children}
        </ColorSchemaContext.Provider>
    )
}