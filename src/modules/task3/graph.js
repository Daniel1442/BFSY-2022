import React, {useEffect, useState} from "react";
import {BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from "recharts";

const Graph = ({data,  limit}) => {
    const [limitedData, setLimitedData] = useState([])

    useEffect(() => {
        let lData = [];
        Object.entries(data).map(([id, specificData]) => {
            if(Number(id) <= limit){
                lData[Number(id)] = specificData;
            }
        })
        setLimitedData(lData)
    },[limit])

    return (
        <div>

            <BarChart
                width={500}
                height={300}
                data={limitedData.length > 0 && limitedData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="year"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey={'amount'} fill="#8884d8"/>


            </BarChart>
        </div>

    )
        ;
}

export default Graph