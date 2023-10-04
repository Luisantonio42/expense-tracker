/**
 * Expense Date component
 * Return a date component to render in ExpenseItem
 */

import React from "react";
import classes from './ExpenseDate.module.css';

const ExpenseDate: React.FC<{date: Date}> = (props) => {

  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  const day = props.date.toLocaleDateString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className={classes["expense-date"]}>
      <div className={classes["expense-date__month"]}>{month}</div>
      <div className={classes["expense-date__year"]}>{year}</div>
      <div className={classes["expense-date__day"]}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
