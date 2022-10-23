import {Card} from "react-bootstrap";

const HeaderBlock = ({data}) => {


    return (
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{data.label}</Card.Title>
                <Card.Text>
                    {data.value}
                </Card.Text>
            </Card.Body>
        </Card>

    )
        ;
}

export default HeaderBlock