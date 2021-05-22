import React, { useState } from "react";
import ExpensesList from "./ExpensesList";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setYear] = useState("2021");

  const getYear = (year) => {
    // console.log("Hellow");
    console.log(year);
    setYear(year);
  };

  const filteredExpenses = props.data.filter((expense) => {
    // console.log(expense);
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={year} onSelectYear={getYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
