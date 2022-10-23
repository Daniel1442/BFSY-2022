import React, {useContext, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import secondTaskData from '../data/mockDataTask2.json'
import IncrementalCard from "../modules/task2/incrementalCard";
import {ColorSchemeContext} from "../context/ColorSchemaContext";


const TaskTwo = () => {
    const {colorScheme} = useContext(ColorSchemeContext);

    const [totalNumber, setTotalNumber] = useState(0);

    return (
        <Container>
            <Row className={'text-center'}>
                <Col xl={12}><h3 style={{color: colorScheme.color}}>Celkový počet nakupujíchích</h3></Col>
                <Col xl={12}>{totalNumber}</Col>
            </Row>
            {Object.entries(secondTaskData.stores).map(([id, data]) => {
                return (
                    <IncrementalCard data={data} key={id} setTotal={setTotalNumber} total={totalNumber}/>
                )
            })}
        </Container>
    )
}

export default TaskTwo;