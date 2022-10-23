import React, {useContext} from 'react';
import firstTaskData from '../data/mockDataTask1.json'
import HeaderBlock from "../modules/task1/components/headerBlock";
import {Col, Container, Row} from "react-bootstrap";
import LectorCard from "../modules/task1/components/lectorCard";
import GraphBlock from "../modules/task1/components/graphBlock";
import TableWrapper from "../modules/task1/components/tableWrapper";
import {ColorSchemeContext} from "../context/ColorSchemaContext";

const TaskOne = () => {
    const {colorScheme} = useContext(ColorSchemeContext);


    return (
        <Container>
            <Row>
                {Object.entries(firstTaskData.headerData).map(([id, data]) => {
                    return (
                        <Col xl={3} sm={3}>
                            <HeaderBlock key={id} data={data}/>
                        </Col>
                    )
                })}
            </Row>
            <Row className={'my-3'}>
                <h3 style={{color: colorScheme.color}}>Dnešní lektor</h3>
                <Col xl={6} sm={6}>
                    <LectorCard data={firstTaskData.lectoreData}/>
                </Col>
                <Col xl={6} sm={6}>
                    <h3  style={{color: colorScheme.color}}>Průběžné hodnocení podle témat</h3>
                    <GraphBlock data={firstTaskData.graphData}/>
                </Col>
            </Row>
            <Row className={'my-3'}>
                <h3 style={{color: colorScheme.color}}>Studenti</h3>
                <Col xl={12} sm={12}>
                    <TableWrapper data={firstTaskData.tableData}/>
                </Col>

            </Row>

        </Container>
    )
}

export default TaskOne;