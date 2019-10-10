import React from 'react'
import { Bar } from '@nivo/bar'
//import { newDateList } from '../../utils'

const BarFigure = ({data}) => {
    //const newList = newDateList(data)
    const keys = ['salary'];
    const commonProps = {
        width: 900,
        height: 500,
        margin: { top: 60, right: 80, bottom: 60, left: 80 },
        data: data.slice(0, 10),
        indexBy: 'first_name',
        keys,
        padding: 0.2,
        labelTextColor: 'inherit:darker(1.4)',
        labelSkipWidth: 16,
        labelSkipHeight: 16,
    };
    return (
        <Bar {...commonProps} legends = {[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}/>
    )
} 

export default BarFigure