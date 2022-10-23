import React from 'react';
import firstTaskData from '../data/mockDataTask1.json'
import HeaderBlock from "../modules/task1/components/headerBlock";
import {Col, Container, Row} from "react-bootstrap";
import LectorCard from "../modules/task1/components/lectorCard";

const Index = () => {


    return (
        <Container>
            <h1>Dobrý den, zde se nacházejí ukoly pro předmět Frontendové systémy. </h1>
        </Container>
    )
}

export default Index;