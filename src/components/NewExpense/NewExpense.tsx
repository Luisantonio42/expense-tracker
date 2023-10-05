/**
 * NewExpense Component
 * Conditionaly displays the ExpenseForm if needed. 
 */

import React, { useState } from "react";
import classes from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";
import { Expense } from "../../models/expense.model";

const NewExpense: React.FC<{ onAddExpense: (data: Expense) => void }> = (
  props
) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (expenseData: Expense) => {
    props.onAddExpense(expenseData);
  };

  const editingAddExpense = () => {
    setShowForm(!showForm);
  };
  return (
    <div className={classes["new-expense"]}>

      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelAddExpense={editingAddExpense}
        />
      )}
      {!showForm && <button onClick={editingAddExpense}>Add new Expense</button>}
    </div>
  );
};

export default NewExpense;
