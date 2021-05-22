import { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const [form, setForm] = useState(false);
  const getNewExpenseHandler = (newExpense) => {
    const expense = { ...newExpense, id: Math.random().toString() };
    props.onGetNewExpense(expense);
    setForm(false);
  };

  const showFormHandler = () => {
    setForm(true);
  };

  const unShowFormHandler = () => {
    setForm(false);
  };

  return (
    <div className="new-expense">
      {form === false ? (
        <button onClick={showFormHandler}>Add New Expense</button>
      ) : (
        <NewExpenseForm
          onFormSubmitNewExpense={getNewExpenseHandler}
          onUnShowForm={unShowFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
