/**
 * ChartBar Component
 * Responsible for showing the elements as bars in screen, recieves to values: label and value.
 */

import React from "react";
import classes from "./ChartBar.module.css";
import { DataPoint } from "../../models/dataPoint.model";

const ChartBar: React.FC<DataPoint> = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  
  return (
    <div className={classes["chart-bar"]}>
      <div className={classes["chart-bar__inner"]}>
        <div
          className={classes["chart-bar__fill"]}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={classes["chart-bar__label"]}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
