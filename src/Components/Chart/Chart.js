import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximumValue = Math.max(...dataPointsValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.lebel}
          value={dataPoint.value}
          maxValue={totalMaximumValue}
          lebel={dataPoint.lebel}
        />
      ))}
    </div>
  );
};

export default Chart;
