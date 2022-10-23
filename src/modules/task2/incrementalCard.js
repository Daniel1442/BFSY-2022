import {Button, Col, Row,} from "react-bootstrap";
import React, {useEffect, useState} from "react";

const IncrementalCard = ({data, setTotal, total}) => {


    const [numberOfClients, setNumberOfClients] = useState(0)
    const [error, setError] = useState(false);

    const currentHour = new Date().getHours()

    useEffect(() => {
        if (currentHour >= 22)
            setError(true)
        if (currentHour < 6)
            setError(true);

    },[currentHour])

    const incrementCount = () => {
        if (data.limit === numberOfClients) {
            setError(true)
            return;
        }
        setNumberOfClients(numberOfClients + 1);
        setTotal(total + 1)
    };
    return (
        <div className={'my-3 border border-dark'}>
            <Row className={''}>
                <Col xl={4} sm={12}/>
                <Col xl={4} sm={12} className={`text-center ${error && 'text-danger'}`}>
                    {data.storeName}
                </Col>
                <Col xl={4} sm={12}>
                    <Button variant={'success'} onClick={incrementCount} disabled={error}>+1</Button>
                </Col>
            </Row>
            <Row className={''}>
                <Col xl={4} sm={12}/>
                <Col xl={4} sm={12} className={`text-center ${error && 'text-danger'}`}>
                    {numberOfClients}
                </Col>
                <Col xl={4} sm={12}/>
            </Row>
        </div>

    )
        ;
}

export default IncrementalCard