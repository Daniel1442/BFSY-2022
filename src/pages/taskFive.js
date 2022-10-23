import React, {useContext} from 'react';
import {Container} from "react-bootstrap";
import ColorSchemeChanger from "../modules/task5/components/colorSchemeChanger";
import {ColorSchemeContext} from "../context/ColorSchemaContext";

const TaskFive = () => {
    const {colorScheme} = useContext(ColorSchemeContext);


    return (
        <Container>
            <label className={'me-3'}>Vyberte si počet let které chcete zobrazit</label>
            <ColorSchemeChanger/>
            <label className={'me-3'}>Příklad:</label>
            <h3 style={{color: colorScheme.color}}> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h3>
        </Container>
    )
}

export default TaskFive;