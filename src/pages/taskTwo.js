import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import secondTaskData from '../data/mockDataTask2.json'
import IncrementalCard from "../modules/task2/incrementalCard";


const TaskTwo = () => {
1
    const [totalNumber, setTotalNumber] = useState(0);

    return (
        <Container>
            <Row className={'text-center'}>
                <Col xl={12}>Celkový počet nakupujíchích</Col>
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