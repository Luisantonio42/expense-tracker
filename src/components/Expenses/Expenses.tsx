/**
 * Expenses Component
 * Renders an array of n elements of type Expense.
 */

import React from "react";
import { Expense } from "../../models/expense.model";
import ExpenseItem from "./ExpenseItem";
import classes from './Expenses.module.css';
import Card from "../UI/Card";

const Expenses: React.FC<{ items: Expense[] }> = (props) => {
  return (
    <Card className={classes.expenses}>
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            id={item.id}
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
