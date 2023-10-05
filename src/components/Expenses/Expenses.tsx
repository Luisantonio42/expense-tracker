/**
 * Expenses Component
 * Renders an array of n elements of type Expense.
 */

import React, { useState } from "react";
import { Expense } from "../../models/expense.model";
import ExpenseItem from "./ExpenseItem";
import classes from "./Expenses.module.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses: React.FC<{ items: Expense[] }> = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filteredYearHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className={classes.expenses}>
        <ExpensesFilter
          onSaveFilteredYear={filteredYearHandler}
          selected={filteredYear}
        />

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
    </div>
  );
};

export default Expenses;
