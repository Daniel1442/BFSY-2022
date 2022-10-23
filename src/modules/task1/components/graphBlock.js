
import React from "react";
import { BarChart, Bar } from "recharts";

const GraphBlock = ({data}) => {


    return (
        <BarChart width={600} height={170} data={data}>
            <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>

    )
        ;
}

export default GraphBlock