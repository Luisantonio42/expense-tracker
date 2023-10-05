/**
 * ExpensesList Component
 * Discplays A dynamic list of Expenses if any.
 */

import React from "react";
import classes from "./ExpensesList.module.css";
import { Expense } from "../../models/expense.model";
import ExpenseItem from "./ExpenseItem";

const ExpensesList: React.FC<{ items: Expense[] }> = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className={classes["expenses-list__fallback"]}>No expenses found.</h2>
    );
  }
  return (
    <ul className={classes["expenses-list"]}>
      {props.items.length > 0 &&
        props.items.map((item) => {
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
    </ul>
  );
};

export default ExpensesList;
