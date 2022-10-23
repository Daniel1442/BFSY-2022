import {Button, Card, Table} from "react-bootstrap";
import TableHeader from "./tableHeader";
import TableRow from "./tableRow";


const TableWrapper = ({data}) => {


    return (
        <Table responsive striped className={'mt-3'}>
           <TableHeader/>
            <tbody>
            {data && Object.keys(data).length > 0 ? Object.entries(data).map(([id, rowData]) => {
                return <TableRow key={id} data={rowData}/>
            }) : <h3 className={'mt-3 text-nowrap'}>Aplikace neobsahuje žádné kontroly.</h3>}
            </tbody>
        </Table>

    )
        ;
}

export default TableWrapper