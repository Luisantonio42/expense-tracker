/**
 * Expenses Component
 * Renders an array of n elements of type Expense. and charts for month expenses. 
 */

import React, { useState } from "react";
import { Expense } from "../../models/expense.model";
import classes from "./Expenses.module.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses: React.FC<{ items: Expense[] }> = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filteredYearHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className={classes.expenses}>
        <ExpensesFilter
          onSaveFilteredYear={filteredYearHandler}
          selected={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
