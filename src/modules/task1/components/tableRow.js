import React from "react"

const TableHeader = ({data}) => {


    return (
        <tr>
            <td>{data.name}</td>
            <td>{data.bio}</td>
            <td>{data.rating}</td>
        </tr>

    )
        ;
}

export default TableHeader