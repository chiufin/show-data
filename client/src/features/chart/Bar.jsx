import React from 'react'
import { Bar } from '@nivo/bar'

const BarFigure = ({data}) => {
    const keys = ['salary'];
    const commonProps = {
        width: 900,
        height: 500,
        margin: { top: 60, right: 80, bottom: 60, left: 80 },
        data: data.slice(3, 7),
        indexBy: 'first_name',
        keys,
        padding: 0.2,
        labelTextColor: 'inherit:darker(1.4)',
        labelSkipWidth: 16,
        labelSkipHeight: 16,
    };
    return (
        <Bar {...commonProps} groupMode="grouped"/>
    )
} 
export default BarFigure