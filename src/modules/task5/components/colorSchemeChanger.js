import Form from 'react-bootstrap/Form';
import {useContext} from "react";
import {ColorSchemeContext} from "../../../context/ColorSchemaContext";

const ColorSchemeChanger = () => {
    const {setColorSchema} = useContext(ColorSchemeContext);

    const defaultData = '{"color": "#0000ff"}';
    const dataOne = '{"color": "#ff0000"}';
    const dataTwo = '{"color": "#00ff00"}';
    const dataThree = '{"color": "#ffff00"}';
    const dataFour = '{"color": "#FFA500"}';

    const changeColorContext = (e) => {
        let color = JSON.parse(e.target.value);
        console.log(color.color)
        setColorSchema({color: color.color})
    }

    return (
        <Form.Select aria-label="Default select example" onChange={changeColorContext}>
            <option>Vyberte si schema barev</option>
            <option value={defaultData} >Modrý text
            </option>
            <option value={dataOne}>Červený text
            </option>
            <option value={dataTwo}>Zelený text
            </option>
            <option value={dataThree}>Žlutý text
            </option>
            <option value={dataFour}>Oranžový text
            </option>

        </Form.Select>
    );
}

export default ColorSchemeChanger;