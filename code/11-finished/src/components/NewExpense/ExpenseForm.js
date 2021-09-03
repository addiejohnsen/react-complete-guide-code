import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [titleInput, setTitleInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [amountInput, setAmountInput] = useState("");

  const handleTitleChange = (e) => {
    setTitleInput(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateInput(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmountInput(e.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={handleTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2024-12-31"
            onChange={handleDateChange}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
