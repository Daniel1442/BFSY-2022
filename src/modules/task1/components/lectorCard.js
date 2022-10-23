import {Button, Card} from "react-bootstrap";


const LectorCard = ({data}) => {


    return (
        <Card>
            <Card.Img variant="top" src={"/images/robot.png"} />
            <Card.Body>
                <Card.Title>{data.lectoreName}</Card.Title>
                <Card.Text>
                    {data.lectoreDesctription}
                </Card.Text>
                <Button variant="primary">Kontaktovat</Button>
            </Card.Body>
        </Card>

    )
        ;
}

export default LectorCard