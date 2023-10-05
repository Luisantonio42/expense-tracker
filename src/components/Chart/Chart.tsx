/**
 * Chart Components
 * Displays ChartBar components, it is composed from an object {label: string, value: number}
 */

import React from "react";
import classes from "./Chart.module.css";
import ChartBar from "./ChartBar";

type ChartProps = {
  dataPoints: { label: string; value: number }[];
};

const Chart: React.FC<ChartProps> = (props) => {

  // Transform the array from {label, number}[] to number[] and gets the max value from the array.
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className={classes.chart}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar 
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
