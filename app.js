// App.js
import React, { useState } from "react";
import ExpenseTracker from "./ExpenseTracker";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: "Car insurance", amount: 200 },
  ]);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <div>
      <ExpenseTracker onAddExpense={addExpenseHandler} expenses={expenses} />
    </div>
  );
}

export default App;
