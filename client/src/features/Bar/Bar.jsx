import React from 'react'
import { Bar } from '@nivo/bar'

const BarFigure = () => {
    const keys = ['kebab', 'fries', 'donut'];
    const commonProps = {
        width: 900,
        height: 500,
        margin: { top: 60, right: 80, bottom: 60, left: 80 },
        data: [
            {
              "country": "AD",
              "kebab": 21,
              "fries": 182,
              "donut": 83,
            },
            {
              "country": "AE",
              "kebab": 31,
              "fries": 94,
              "donut": 40,
            },
            {
              "country": "AF",
              "kebab": 25,
              "fries": 174,
              "donut": 50,
            },
            {
              "country": "AG",
              "kebab": 21,
              "fries": 139,
              "donut": 96,
            },
            {
              "country": "AI",
              "kebab": 34,
              "fries": 187,
              "donut": 162,
            },
            {
              "country": "AL",
              "kebab": 111,
              "fries": 161,
              "donut": 18,
            }
          ],
        indexBy: 'country',
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