/**
 * ExpensesFilter Component
 * Display a filter for choosing a year to filter expenses.
 */

import React from "react";
import classes from "./ExpensesFilter.module.css";

type ExpensesFilterProps = {
  onSaveFilteredYear: (selectedYear: string) => void;
  selected: string;
};

const ExpensesFilter: React.FC<ExpensesFilterProps> = (props) => {
  const changeHanlder = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onSaveFilteredYear(event.target.value);
  };

  return (
    <div className={classes["expenses-filter"]}>
      <div className={classes["expenses-filter__control"]}>
        <label>Filter by year</label>
        <select onChange={changeHanlder} value={props.selected}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
