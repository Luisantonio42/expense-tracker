import React from "react";
import classes from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";
import { Expense } from "../../models/expense.model";

const NewExpense:React.FC<{onAddExpense: (data:Expense) => void}> = (props) => {
  const saveExpenseDataHandler = (expenseData: Expense) => {
    props.onAddExpense(expenseData);
  };

  return (
    <div className={classes["new-expense"]}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
