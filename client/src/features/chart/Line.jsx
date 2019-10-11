import React from "react";
import { ResponsiveLine } from "@nivo/line";

const data = [
    {
      id: "hours",
      data: [
        { x: "A", y: "13/05/1998" },
        { x: "B", y: "13/06/1978" },
        { x: "C", y: "13/09/2018" },
        // { x: "D", y: "2019-05-30 04:00" }
      ]
    }
  ];
  
  const LineFigure = () => {
    return (
      <div className="App" style={{ height: 400 }}>
        <h1>Line y axis time scale</h1>
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 60, bottom: 50, left: 120 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "time",
            format: "%d/%m/%Y",
            precision: "day"
          }}
          yFormat="time:%d,%m,%y"
          axisLeft={{
            orient: "left",
            format: "%d,%M,%Y",
            legend: "year month day",
            legendOffset: -80,
            legendPosition: "middle"
          }}
          pointSize={10}
          pointColor="white"
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          useMesh={true}
        />
      </div>
    );
  };
  

export default LineFigure