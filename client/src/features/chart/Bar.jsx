import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const BarGraph = ({data}) => {    
    return (
      <div>
        <BarChart
            width={500}
            height={300}
            data={data}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </div>
    )
}

export default BarGraph