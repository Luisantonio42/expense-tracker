/**
 * ExpenseForm Component
 * Create Expense ojbect through a form.
 */
import React, { useState } from "react";
import classes from "./ExpenseForm.module.css";
import { Expense } from "../../models/expense.model";

type ExpenseFormProps = {
  onSaveExpenseData: (data: Expense) => void;
};

const ExpenseForm: React.FC<ExpenseFormProps> = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Since we used onChange in the input element the value is:
  // React.ChangeEvent <HTMLInputElement>. We can hover on the attribute to see the type.
  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.target.value);
  };

  // Here the type is React.FormEvent because we are refering to an event from the form
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const expenseData = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // Lifting state up
    props.onSaveExpenseData(expenseData);

    // Reset values
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  // Two way binding by adding state value to the value attribute into the form elements.
  return (
    <form onSubmit={submitHandler}>
      <div className={classes["new-expense__controls"]}>
        <div className={classes["new-expense__control"]}>
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>

        <div className={classes["new-expense__control"]}>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>

        <div className={classes["new-expense__control"]}>
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>

      <div className={classes["new-expense__actions"]}>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
