/**
 * ExpenseItem component
 * Return a componenent that includes a ExpenseDate component and also a Expense type.
 */

import React from "react";
import classes from "./ExpenseItem.module.css";
import { Expense } from "../../models/expense.model";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem: React.FC<Expense> = (props) => {
  return (
    <li>
      <Card className={classes["expense-item"]}>
        <ExpenseDate date={props.date} />
        <div className={classes["expense-item__description"]}>
          <h2>{props.title}</h2>
          <div className={classes["expense-item__price"]}>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
