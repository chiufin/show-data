import React from 'react'
import Bar from '../features/Bar/Bar'

const Chart = () => {
    const data = [
        {
          "country": "AD",
          "hot dog": 158,
          "hot dogColor": "hsl(104, 70%, 50%)",
          "burger": 124,
          "burgerColor": "hsl(113, 70%, 50%)",
          "sandwich": 56,
          "sandwichColor": "hsl(19, 70%, 50%)",
          "kebab": 71,
          "kebabColor": "hsl(63, 70%, 50%)",
          "fries": 84,
          "friesColor": "hsl(345, 70%, 50%)",
          "donut": 41,
          "donutColor": "hsl(203, 70%, 50%)"
        },
        {
          "country": "AE",
          "hot dog": 32,
          "hot dogColor": "hsl(67, 70%, 50%)",
          "burger": 56,
          "burgerColor": "hsl(337, 70%, 50%)",
          "sandwich": 87,
          "sandwichColor": "hsl(250, 70%, 50%)",
          "kebab": 58,
          "kebabColor": "hsl(34, 70%, 50%)",
          "fries": 13,
          "friesColor": "hsl(357, 70%, 50%)",
          "donut": 70,
          "donutColor": "hsl(114, 70%, 50%)"
        },
        {
          "country": "AF",
          "hot dog": 195,
          "hot dogColor": "hsl(94, 70%, 50%)",
          "burger": 88,
          "burgerColor": "hsl(191, 70%, 50%)",
          "sandwich": 119,
          "sandwichColor": "hsl(33, 70%, 50%)",
          "kebab": 86,
          "kebabColor": "hsl(287, 70%, 50%)",
          "fries": 177,
          "friesColor": "hsl(95, 70%, 50%)",
          "donut": 39,
          "donutColor": "hsl(206, 70%, 50%)"
        },
        {
          "country": "AG",
          "hot dog": 46,
          "hot dogColor": "hsl(1, 70%, 50%)",
          "burger": 87,
          "burgerColor": "hsl(291, 70%, 50%)",
          "sandwich": 42,
          "sandwichColor": "hsl(92, 70%, 50%)",
          "kebab": 112,
          "kebabColor": "hsl(272, 70%, 50%)",
          "fries": 187,
          "friesColor": "hsl(279, 70%, 50%)",
          "donut": 113,
          "donutColor": "hsl(87, 70%, 50%)"
        },
        {
          "country": "AI",
          "hot dog": 45,
          "hot dogColor": "hsl(302, 70%, 50%)",
          "burger": 101,
          "burgerColor": "hsl(121, 70%, 50%)",
          "sandwich": 136,
          "sandwichColor": "hsl(177, 70%, 50%)",
          "kebab": 9,
          "kebabColor": "hsl(61, 70%, 50%)",
          "fries": 158,
          "friesColor": "hsl(257, 70%, 50%)",
          "donut": 194,
          "donutColor": "hsl(134, 70%, 50%)"
        },
        {
          "country": "AL",
          "hot dog": 90,
          "hot dogColor": "hsl(343, 70%, 50%)",
          "burger": 148,
          "burgerColor": "hsl(248, 70%, 50%)",
          "sandwich": 111,
          "sandwichColor": "hsl(228, 70%, 50%)",
          "kebab": 85,
          "kebabColor": "hsl(345, 70%, 50%)",
          "fries": 128,
          "friesColor": "hsl(283, 70%, 50%)",
          "donut": 184,
          "donutColor": "hsl(210, 70%, 50%)"
        },
        {
          "country": "AM",
          "hot dog": 71,
          "hot dogColor": "hsl(247, 70%, 50%)",
          "burger": 30,
          "burgerColor": "hsl(214, 70%, 50%)",
          "sandwich": 106,
          "sandwichColor": "hsl(252, 70%, 50%)",
          "kebab": 167,
          "kebabColor": "hsl(80, 70%, 50%)",
          "fries": 113,
          "friesColor": "hsl(217, 70%, 50%)",
          "donut": 110,
          "donutColor": "hsl(284, 70%, 50%)"
        }
      ]
    return (
        <div>
            <h2>Chart</h2>
            <Bar data={data}/>
        </div>
    )
}

export default Chart