import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import thirdTaskData from '../data/mockDataTask3.json'
import Graph from "../modules/task3/graph";


const TaskThree = () => {

    const [limit, setLimit] = useState(0);

    return (
        <Container>
            <label className={'me-3'}>Vyberte si počet let které chcete zobrazit</label>
            <select onChange={e => setLimit(e.target.value)}>
                <option value={0}>1 rok</option>
                <option value={1}>2 roky</option>
                <option value={2}>3 roky</option>
                <option value={3}>4 roky</option>
                <option value={4}>5 let</option>
            </select>
            <Row className={'text-center'}>
                <Col xl={12}>Populační statistiky</Col>
            </Row>
            <Row>
                <Col xl={12} sm={12} className={'text-center'}>
                    <h5 className={'text-center'}>Počet narozených</h5>
                    <Graph data={thirdTaskData.bornDataOverAll} limit={limit}/>
                </Col>
                <Col xl={12} sm={12} className={'text-center'}>
                    <h5 className={'text-center'}>Počet mrtvých</h5>
                    <Graph data={thirdTaskData.deathDataOverAll} limit={limit}/>
                </Col>
                <Col xl={12} sm={12} className={'text-center'}>
                    <h5 className={'text-center'}>Počet obyvatel</h5>
                    <Graph data={thirdTaskData.populationDataOverAll} limit={limit}F/>
                </Col>
            </Row>
        </Container>
    )
}

export default TaskThree;