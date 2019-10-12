import React from 'react'
import Bar from '../features/chart/Bar'
import Pie from '../features/chart/Pie'

const ChartPage = () => {
    return (
        <div>
            <h2>Chart</h2>
            <Bar />
            <Pie />
        </div>
    );
}

export default ChartPage